export type UserType = {
  username: string;
  created_at: string;
  is_admin: boolean;
  about: string;
  is_moderator: boolean;
  karma: number;
  avatar_url: string;
  invited_by_user: string;
};

export type ArticleType = {
  short_id: string;
  short_id_url: string;
  created_at: string;
  score: number;
  upvotes: number;
  downvotes: number;
  comment_count: number;
  description: string;
  comments_url: string;
  url: string;
  title: string;
  tags: Array<string>;
  submitter_user: UserType;
};
