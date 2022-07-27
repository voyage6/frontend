export interface Post {
  id: number;
  title: string;
  writerName: string;
  writerId: number;
  contents: string;
  category: string;
  imgUrls: string[];
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  userId: number;
  postId: number;
  contents: string;
  createdAt: string;
}
