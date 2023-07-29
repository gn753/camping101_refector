import styled from "@emotion/styled";
import { authUserData } from "@libs/store/authStore";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { IsCommentItem, IsCommentService } from "./CommentType";
import ReComment from "./ReComment";

interface Props extends IsCommentService {
  comment: IsCommentItem;
}
export default function CommentItem({
  comment,
  onDeleteComment,
  onEditComment,
  onAddReComment,
  onDeleteReComment,
  onEditReComment,
}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);
  const [showAddReCommentForm, setShowAddReCommentForm] = useState(false);
  const [newReCommentContent, setNewReCommentContent] = useState("");
  const user = useRecoilValue(authUserData);
  const userId = user?.email;
  const router = useRouter();
  const handleDelete = () => {
    onDeleteComment(comment.commentId);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEditComment(comment.commentId, editedContent);
    setIsEditing(false);
  };

  const handleAddReComment = () => {
    setShowAddReCommentForm(true);
  };

  const handleSaveReComment = () => {
    if (!user) {
      router.push("/login");
      return false;
    }

    onAddReComment(comment.commentId, newReCommentContent);
    setShowAddReCommentForm(false);
    setNewReCommentContent("");
  };

  return (
    <Wrapper>
      <>
        <span>작성자 : {comment.writerNickName}</span>
        {isEditing ? (
          <>
            <TextArea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
            <button onClick={handleSave}>저장</button>
          </>
        ) : (
          <div>{comment.content}</div>
        )}
        <CommentButtonList>
          {user && userId === comment.writerEmail && (
            <>
              <button onClick={handleEdit}>수정</button>
              <button onClick={handleDelete}>삭제</button>
            </>
          )}
          {!showAddReCommentForm && (
            <button onClick={handleAddReComment}>대댓글 추가</button>
          )}
        </CommentButtonList>
        <div>
          {showAddReCommentForm && (
            <div>
              <TextArea
                value={newReCommentContent}
                onChange={(e) => setNewReCommentContent(e.target.value)}
              />
              <button onClick={handleSaveReComment}>저장</button>
            </div>
          )}
        </div>
        {comment.reComments.map((reComment) => (
          <ReComment
            key={reComment.reCommentId}
            reComment={reComment}
            onDeleteReComment={onDeleteReComment}
            onEditReComment={onEditReComment}
            user={user}
          />
        ))}
      </>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 10px;
  border: 1px dashed black;
  padding: 5px;
`;
const TextArea = styled.textarea`
  width: 100%;
  min-height: 50px;
`;

const CommentButtonList = styled.div`
  display: flex;
  button {
    margin-right: 5px;
  }
`;
