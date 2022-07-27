import { AxiosManager } from '../services/AxiosManager';

export const fetchPosts = async () => {
  return AxiosManager.Instance.get('/api/posts').then((res) => res.data);
};
