export const fetchPosts = async () => {
  return [
    {
      id: 4,
      title: '악보4',
      writerName: '스파르타',
      writerId: 2,
      contents: '악보4',
      category: '피아노',
      imgUrls: [
        'https://mycong.s3.ap-northeast-2.amazonaws.com/24304691-0af0-48e1-b847-36b6851a904c_%EC%95%85%EB%B3%B47.jpg',
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
        'https://mycong.s3.ap-northeast-2.amazonaws.com/40d5df8a-3478-493b-9bfb-6eed43fcf43f_%EC%95%85%EB%B3%B45.png',
        'https://mycong.s3.ap-northeast-2.amazonaws.com/92a40e9a-d241-4931-a8db-95c66fa04fc0_%EC%95%85%EB%B3%B46.png',
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
        'https://mycong.s3.ap-northeast-2.amazonaws.com/2c513deb-a7aa-4d43-9dc1-246226693e02_%EC%95%85%EB%B3%B43.jpg',
        'https://mycong.s3.ap-northeast-2.amazonaws.com/da965f8f-03b7-4bb0-b83c-8a388dc7ce84_%EC%95%85%EB%B3%B44.jpg',
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
        'https://mycong.s3.ap-northeast-2.amazonaws.com/66918dc4-6003-4315-9e97-87a26757c8e0_%EC%95%85%EB%B3%B41.jpg',
        'https://mycong.s3.ap-northeast-2.amazonaws.com/11627a26-9d0f-4f30-89b8-94a30dc64fe2_%EC%95%85%EB%B3%B42.png',
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
