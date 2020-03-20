import { Comment } from './comment';
export interface Post {
  postId?: number;
  userId?: number;
  post?: string;
  comment?: Comment[];
  like?: number;
}
