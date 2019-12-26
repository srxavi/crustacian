export type User = {
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
  url: string;
  title: string;
  tags: Array<string>;
  submitter_user: User;
};
