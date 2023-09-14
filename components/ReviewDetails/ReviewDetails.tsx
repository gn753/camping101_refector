import styled from "@emotion/styled";
import Comment from "./Comment";
import Photo from "./Photo";
import ReviewBody from "./ReviewBody";
import ReviewBookmarkOnOff from "./ReviewBookmarkOnOff";
import WriterProfile from "./WriterProfile";

interface Props {
  data: any;
  id: string | string[];
}

export default function ReviewDetails({ data, id }: Props) {
  return (
    <Wrapper>
      {data && (
        <>
          <Photo image={data.image} />
          <WriterProfile data={data} />
          <ReviewBookmarkOnOff title={data.title} like={data.like} id={id} />
          <ReviewBody data={data} />
          <Comment id={id} />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 768px;
  margin: auto;
  section {
    padding-bottom: 20px;
  }
`;
