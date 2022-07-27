import axios from 'axios';
import { AxiosManager } from '../services/AxiosManager';

export interface CommentDto {
  postId: number;
  contents: string;
}

export function addComment({ postId, contents }: CommentDto) {
  return AxiosManager.Instance.post(`/api/posts/${postId}/comments`, { contents }).then((res) => res.data);
}
