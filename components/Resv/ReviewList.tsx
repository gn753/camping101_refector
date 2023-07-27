import styled from "@emotion/styled";
import TitleSection from "@components/Review/ContentTitleSection";
import ReviewCard from "@components/common/Card/ReviewCard";

export default function ReviewList({ reviewList }: any) {
  return (
    <section>
      <TitleSection title="캠핑장 가득 찬 리뷰 ~ " />
      <List>
        {reviewList.length > 0 ? (
          reviewList.map((it: any) => <ReviewCard {...it} />)
        ) : (
          <div className="h4">등록된 리뷰가 없습니다</div>
        )}
      </List>
    </section>
  );
}

const List = styled.div`
  display: flex;
  gap: 20px;
  flex-basis: 48%;
  flex-wrap: wrap;
`;

const CardWrapper = styled.article`
  display: flex;
  gap: 20px;
  flex: 1 1 40%;
  height: 100px;
`;

const CardFigure = styled.img`
  width: 100px;
  height: 100%;
  margin-bottom: 20px;
  cursor: pointer;
`;

const CardBody = styled.div`
  width: 100%;
`;

const CardTitle = styled.h3`
  display: block;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  border: 1px solid black;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const CardDescritpion = styled.p`
  display: block;
  width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CardWriter = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  border: 1px solid black;
  font-size: 14px;
`;
const CardWriterCreated = styled.div`
  font-size: 14px;
`;

const WriterImg = styled.img`
  width: 15px;
  height: 15px;
  border: 1px solid black;
  border-radius: 15px;
`;
