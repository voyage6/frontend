import instance from '../services/AxiosManager';

export const fetchPosts = async () => {
  return instance.get('/api/posts').then((res) => res.data);
};
