import styled from "@emotion/styled";
import deleteComment from "@libs/api/comment/deleteComment";
import deleteReComment from "@libs/api/comment/deleteReComment";
import getCommentList from "@libs/api/comment/getCommentList";
import postCommentCreate from "@libs/api/comment/postCommentCreate";
import postReCommentCreate from "@libs/api/comment/postReCommentCreate";
import putComment from "@libs/api/comment/putComment";
import putReComment from "@libs/api/comment/putReComment";
import { authUserData } from "@libs/store/authStore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import CommentList from "./CommentList";
import { IsCommentItem } from "./CommentType";

interface IsCommentService {
  onDeleteComment: (commentId: number) => void;
  onEditComment: (commentId: number, editedContent: string) => void;
  onAddReComment: (commentId: number, newReComment: string) => void;
  onDeleteReComment: (reCommentId: number) => void;
  onEditReComment: (reCommentId: number, editedContent: string) => void;
}

interface Props extends IsCommentService {
  comments: any;
}

export default function Comment({ id }: any) {
  const user = useRecoilValue(authUserData);
  const [comments, setComments] = useState<IsCommentItem[] | []>([]);
  const [newCommentContent, setNewCommentContent] = useState("");
  const router = useRouter();
  const handleDeleteComment = async (commentId: number) => {
    if (confirm("삭제하시겠습니까?")) {
      await deleteComment(commentId);
      setComments(
        comments.filter((comment) => comment.commentId !== commentId),
      );
    }
  };

  const handleEditComment = async (
    commentId: number,
    editedContent: string,
  ) => {
    await putComment({
      commentId,
      campLogId: id,
      content: editedContent,
    });
    setComments(
      comments.map((comment) =>
        comment.commentId === commentId
          ? { ...comment, content: editedContent }
          : comment,
      ),
    );
  };

  const handleAddComment = async () => {
    if (!user) {
      router.push("/login");
      return false;
    }

    const response = await postCommentCreate({
      campLogId: id,
      content: newCommentContent,
    });

    if (response) {
      setComments([...comments, response.data]);
    }
  };

  const handleAddReComment = async (
    commentId: number,
    newReComment: string,
  ) => {
    const response = await postReCommentCreate({
      campLogId: id,
      content: newReComment,
      parentId: commentId,
    });
    if (response) {
      setComments(
        comments.map((comment) =>
          comment.commentId === commentId
            ? { ...comment, reComments: [...comment.reComments, response.data] }
            : comment,
        ),
      );
    }
  };

  const handleDeleteReComment = async (reCommentId: number) => {
    if (!confirm("삭제하시겠습니까")) return false;
    const response = await deleteReComment(reCommentId);
    if (response) {
      const updatedComments = comments.map((comment) => {
        const updatedReComments = comment.reComments.filter(
          (reComment) => reComment.reCommentId !== reCommentId,
        );
        return { ...comment, reComments: updatedReComments };
      });
      setComments(updatedComments);
    }
  };

  const handleEditReComment = async (
    reCommentId: number,
    editedContent: string,
  ) => {
    const response = await putReComment({
      reCommentId,
      content: editedContent,
      campLogId: id,
    });

    if (!response) return false;

    const updatedComments = comments.map((comment) => {
      const updatedReComments = comment.reComments.map((reComment) => {
        if (reComment.reCommentId === reCommentId) {
          return { ...reComment, content: editedContent };
        }
        return reComment;
      });
      return { ...comment, reComments: updatedReComments };
    });
    setComments(updatedComments);
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      getCommentList(id).then((res) => setComments(res.data.comments));
    }
  }, [id]);

  return (
    <div>
      <h1>댓글 목록</h1>
      <div>
        <TextArea
          value={newCommentContent}
          onChange={(e) => setNewCommentContent(e.target.value)}
        />
        <button onClick={handleAddComment}>댓글 작성</button>
      </div>
      <CommentList
        comments={comments}
        onDeleteComment={handleDeleteComment}
        onEditComment={handleEditComment}
        onAddReComment={handleAddReComment}
        onDeleteReComment={handleDeleteReComment}
        onEditReComment={handleEditReComment}
      />
    </div>
  );
}

const TextArea = styled.textarea`
  width: 100%;
  min-height: 50px;
`;
