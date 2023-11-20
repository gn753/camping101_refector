export interface IsCommentService {
  onDeleteComment: (commentId: number) => void;
  onEditComment: (commentId: number, editedContent: string) => void;
  onAddReComment: (commentId: number, newReComment: string) => void;
  onDeleteReComment: (reCommentId: number) => void;
  onEditReComment: (reCommentId: number, editedContent: string) => void;
}

export interface IsCommentItem {
  commentId: number;
  content: string;
  createdAt: string;
  profileImagePath: string;
  reComments: IsReCommentItem[];
  writerEmail: string;
  writerNickName: string;
}

interface IsReCommentItem {
  content: string;
  createdAt: string;
  like: number;
  profileImagePath: string;
  reCommentId: number;
  writerEmail: string;
  writerNickName: string;
}
