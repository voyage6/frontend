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
  id: number;
  writerName: string | null;
  writerId: string | null;
  profileUrl: string | null;
  contents: string;
  createdAt: string;
}
