import { Post } from '../typings/Post';
import axios from 'axios';
import instance from '../services/AxiosManager';

export async function fetchPostById(id: number): Promise<Post> {
  return instance.get(`/api/posts/${id}`).then((res) => res.data);
}
