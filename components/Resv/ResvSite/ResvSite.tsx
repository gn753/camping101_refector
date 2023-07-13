import styled from "@emotion/styled";
import TitleSection from "@components/Review/ContentTitleSection";
import ResvSiteCard from "./ResvSiteCard";
import { IsResvSiteList } from "./ResvSiteType";

interface Props {
  resvList: IsResvSiteList[];
}

export default function ResvSite({ resvList }: Props) {
  return (
    <>
      <TitleSection title="예약가능한 캠핑장을 둘러보세요" />
      <Wrapper>
        {resvList.map((it, index) => (
          <ResvSiteCard {...it} key={index} />
        ))}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
  article {
    width: 50%;
    box-sizing: border-box;
  }
  article:nth-of-type(odd) {
    border-right: 1px solid #e6e6e6;
  }
  article:nth-of-type(n + 3) {
    border-top: 1px solid #e6e6e6;
  }
`;
