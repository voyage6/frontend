import axios from 'axios';
import instance from '../services/AxiosManager';

export function removeComment(commentId: number) {
  return instance.delete(`/api/comments/${commentId}`).then((res) => res.data);
}
