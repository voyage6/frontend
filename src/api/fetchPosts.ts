import axios from 'axios';
import { AxiosManager } from '../services/AxiosManager';

export const fetchPosts = async () => {
  return AxiosManager.Instance.get('/api/posts/').then((res) => res.data);
  return [
    {
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
    },
    {
      id: 3,
      title: '악보3',
      writerName: '스파르타',
      writerId: 2,
      contents: '악보3',
      category: '피아노',
      imgUrls: [
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2119B63C55EE40600A',
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2119B63C55EE40600A',
      ],
      comments: [
        {
          userId: 2,
          postId: 3,
          contents: '응러ㅓㅜㄹ어ㅏ훌어ㅏ훙러ㅏㅡㄹ아펑루퍼아뤂어ㅏ릎랑',
          createdAt: '7/27/22 2:37 PM',
        },
        {
          userId: 2,
          postId: 3,
          contents: '응러ㅓㅜㄹ어ㅏ훌',
          createdAt: '7/27/22 2:37 PM',
        },
        {
          userId: 2,
          postId: 3,
          contents: '4번째 게시글',
          createdAt: '7/27/22 2:38 PM',
        },
        {
          userId: 2,
          postId: 3,
          contents: '테스트 성공',
          createdAt: '7/27/22 2:38 PM',
        },
      ],
      createdAt: '7/27/22 2:37 PM',
      updatedAt: '7/27/22 2:37 PM',
    },
    {
      id: 2,
      title: '악보2',
      writerName: '항해',
      writerId: 1,
      contents: '악보2',
      category: '피아노',
      imgUrls: [
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2119B63C55EE40600A',
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2119B63C55EE40600A',
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2119B63C55EE40600A',
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2119B63C55EE40600A',
      ],
      comments: [
        {
          userId: 1,
          postId: 2,
          contents: '피아노 사주세요',
          createdAt: '7/27/22 2:36 PM',
        },
      ],
      createdAt: '7/27/22 2:36 PM',
      updatedAt: '7/27/22 2:36 PM',
    },
    {
      id: 1,
      title: '악보',
      writerName: '항해',
      writerId: 1,
      contents: '악보1',
      category: '바이올린',
      imgUrls: [
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
          postId: 1,
          contents: '바이올린 사주세요',
          createdAt: '7/27/22 2:35 PM',
        },
      ],
      createdAt: '7/27/22 2:35 PM',
      updatedAt: '7/27/22 2:35 PM',
    },
  ];
};
