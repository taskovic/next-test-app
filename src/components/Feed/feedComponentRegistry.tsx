import { FeedItemType } from "./types";
import Comment from "@components/Comment/Comment";
import SharedPost from "@components/SharedPost/SharedPost";

// Registry mapping
export const feedComponentRegistry: Record<
  FeedItemType,
  React.ComponentType<{ data: any }>
> = {
  comment: Comment,
  shared: SharedPost,
};
