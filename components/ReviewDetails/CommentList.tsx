import CommentItem from "./CommentItem";
import { IsCommentItem, IsCommentService } from "./comment.interface";

interface Props extends IsCommentService {
  comments: IsCommentItem[];
}
export default function CommentList({
  comments,
  onDeleteComment,
  onEditComment,
  onAddReComment,
  onDeleteReComment,
  onEditReComment,
}: Props) {
  return (
    <div>
      {comments.map((comment) => (
        <CommentItem
          key={comment.commentId}
          comment={comment}
          onDeleteComment={onDeleteComment}
          onEditComment={onEditComment}
          onAddReComment={onAddReComment}
          onDeleteReComment={onDeleteReComment}
          onEditReComment={onEditReComment}
        />
      ))}
    </div>
  );
}
