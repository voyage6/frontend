import { AxiosManager } from '../services/AxiosManager';

export async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append('file', file);
  return AxiosManager.Instance.post('/api/images', formData).then((res) => res.data);
}
