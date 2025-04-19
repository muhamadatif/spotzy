import { Doc, Id } from "@/convex/_generated/dataModel";

export type NotificationType = {
  _id: Id<"notifications">;
  _creationTime: number;
  postId?: string;
  commentId?: string;
  type: "like" | "comment" | "follow";
  receiverId: string;
  senderId: string;
  post?: Doc<"posts"> | null;
  sender: User;
  comment?: string;
};
