import { CommentData } from "@components/Comment/types";
import { SharedPostData } from "@components/SharedPost/types";

export type FeedItemType = 'comment' | 'shared';

export type FeedItem =
  | { id: string; type: 'comment'; data: CommentData }
  | { id: string; type: 'shared'; data: SharedPostData };


