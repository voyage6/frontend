import { AxiosManager } from '../services/AxiosManager';

export function deletePost(id: number) {
  return AxiosManager.Instance.delete(`/api/posts/${id}`);
}
