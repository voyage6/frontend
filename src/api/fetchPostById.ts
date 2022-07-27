import { Post } from '../typings/Post';
import axios from 'axios';
import { AxiosManager } from '../services/AxiosManager';

export async function fetchPostById(id: number): Promise<Post> {
  return AxiosManager.Instance.get(`/api/posts/${id}`).then((res) => res.data);
}
