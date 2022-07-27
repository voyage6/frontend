import { Post } from '../typings/Post';
import axios from 'axios';
import { AxiosManager } from '../services/AxiosManager';

export async function fetchPostById(id: number): Promise<Post> {
  return AxiosManager.Instance.get(`/api/posts/${id}`).then((res) => res.data);
  return {
    id: 4,
    title: '악보4',
    writerName: '스파르타',
    writerId: 2,
    contents:
      'A query is a declarative dependency on an asynchronous source of data that is tied to a unique key. A query can be used with any Promise based method (including GET and POST methods) to fetch data from a server. If your method modifies data on the server, we recommend using Mutations instead.A query is a declarative dependency on an asynchronous source of data that is tied to a unique key. A query can be used with any Promise based method (including GET and POST methods) to fetch data from a server. If your method modifies data on the server, we recommend using Mutations instead.A query is a declarative dependency on an asynchronous source of data that is tied to a unique key. A query can be used with any Promise based method (including GET and POST methods) to fetch data from a server. If your method modifies data on the server, we recommend using Mutations instead.A query is a declarative dependency on an asynchronous source of data that is tied to a unique key. A query can be used with any Promise based method (including GET and POST methods) to fetch data from a server. If your method modifies data on the server, we recommend using Mutations instead.',
    category: '피아노',
    imgUrls: [
      'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2119B63C55EE40600A',
      'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2119B63C55EE40600A',
      'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2119B63C55EE40600A',
      'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2119B63C55EE40600A',
      'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2119B63C55EE40600A',
      'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2119B63C55EE40600A',
      'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2119B63C55EE40600A',
    ],
    comments: [
      {
        userId: 1,
        postId: 4,
        contents: '다른 아이디로 테스트',
        createdAt: '7/27/22 2:38 PM',
      },
      {
        userId: 1,
        postId: 4,
        contents: '다른 아이디로 테스트2',
        createdAt: '7/27/22 2:38 PM',
      },
    ],
    createdAt: '7/27/22 2:38 PM',
    updatedAt: '7/27/22 2:38 PM',
  };
}
