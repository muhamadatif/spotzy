import { Alert } from "react-native";
import * as FileSystem from "expo-file-system";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-expo";
import { useState } from "react";

export const useUploadStory = (
  selectedMedia: string,
  mediaType: string,
  setSelectedMedia: React.Dispatch<React.SetStateAction<string>>
) => {
  const [isUploading, setIsUploading] = useState(false);
  const [story, setStory] = useState({});

  const { user } = useUser();

  const generateUploadUrl = useMutation(api.posts.generateUploadUrl);
  const createStory = useMutation(api.stories.createStory);

  const handleStoryUpload = async () => {
    if (!selectedMedia || !mediaType || !user) return;
    try {
      setIsUploading(true);
      setSelectedMedia("");

      // Step 1: Generate upload URL from Convex
      const uploadUrl = await generateUploadUrl();

      // Step 2: Upload file
      const mimeType = mediaType === "video" ? "video/mp4" : "image/jpeg";
      const uploadResult = await FileSystem.uploadAsync(
        uploadUrl,
        selectedMedia,
        {
          httpMethod: "POST",
          uploadType: FileSystem.FileSystemUploadType.BINARY_CONTENT,
          mimeType,
        }
      );

      if (uploadResult.status !== 200) {
        throw new Error("Upload failed!");
      }

      // Step 3: Get file ID from response
      const { storageId } = JSON.parse(uploadResult.body);

      // Step 4: Save story metadata in Convex
      const story = await createStory({
        storageId,
        type: mediaType, // image or video
      });

      if (story) {
        setStory(story);
        Alert.alert("Success", "Story uploaded!");
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Error", error.message);
      } else {
        Alert.alert("Error", "Something went wrong ");
      }
    } finally {
      setIsUploading(false);
    }
  };

  return { handleStoryUpload, isUploading, story };
};
