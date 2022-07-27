import axios from 'axios';
import { AxiosManager } from '../services/AxiosManager';

export function removeComment(commentId: number) {
  return AxiosManager.Instance.delete(`/api/comments/${commentId}`).then((res) => res.data);
}
