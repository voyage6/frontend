import instance from '../services/AxiosManager';

export interface PostDto {
  title: string;
  contents: string;
  category: string;
  imgUrls: string[];
}

export function createPost(newPost: PostDto) {
  return instance.post(`/api/posts`, newPost);
}
