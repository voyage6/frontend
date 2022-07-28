import instance from '../services/AxiosManager';

export function deletePost(id: number) {
  return instance.delete(`/api/posts/${id}`);
}
