import axios from 'axios';
import instance from '../services/AxiosManager';

export interface CommentDto {
  postId: number;
  contents: string;
}

export function addComment({ postId, contents }: CommentDto) {
  return instance.post(`/api/posts/${postId}/comments`, { contents }).then((res) => res.data);
}
