import styled from "@emotion/styled";
import { useState } from "react";

export default function ReComment({
  reComment,
  onDeleteReComment,
  onEditReComment,
  user,
}: any) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(reComment.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEditReComment(reComment.reCommentId, editedContent);
    setIsEditing(false);
  };

  const isVali =
    user && user.email && reComment && user.email === reComment.writerEmail;

  return (
    <Wrapper>
      <>
        <div>작성자 : {reComment.writerNickName}</div>

        {isEditing ? (
          <>
            <TextArea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              style={{ width: "100%", minHeight: "50px" }}
            />
            <button onClick={handleSave}>저장</button>
          </>
        ) : (
          <div>{reComment.content}</div>
        )}
        {isVali && (
          <>
            <button onClick={handleEdit}>수정</button>
            <button onClick={() => onDeleteReComment(reComment.reCommentId)}>
              삭제
            </button>
          </>
        )}
      </>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: 20px;
  border: 1px dashed black;
  padding: 5px;
`;
const TextArea = styled.textarea`
  width: 100%;
  min-height: 50px;
`;
