import { Id } from "@/convex/_generated/dataModel";

export type Post = {
  _id: Id<"POSTS">;
  userId: string;
  imageUrl: string;
  storageId: string;
  caption?: string;
  likes: number;
  comments: number;
  _creationTime: number;
};

export type User = {
  _id: string;
  username: string;
  image: string;
};

export type NotificationType = {
  _id: Id<"notifications">;
  _creationTime: number;
  postId?: string;
  commentId?: string;
  type: "like" | "comment" | "follow";
  receiverId: string;
  senderId: string;
  post?: Pos | null;
  sender: User;
  comment?: string;
};
