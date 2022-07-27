import { AxiosManager } from '../services/AxiosManager';

export interface PostDto {
  title: string;
  contents: string;
  category: string;
  imgUrls: string[];
}

export function createPost(newPost: PostDto) {
  return AxiosManager.Instance.post(`/api/posts`, newPost);
}
