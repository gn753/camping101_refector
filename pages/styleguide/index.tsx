import styled from "@emotion/styled";
import resvList from "@public/data/resvList.json";
import ResvSiteCard from "@components/Resv/ResvSite/ResvSiteCard";
import TitleSection from "@components/Review/ContentTitleSection";
import usePagination from "@components/common/Pagination/usePagination";
import Button from "components/common/Button/StyledButton";
import ReviewCard from "components/common/Card/ReviewCard";
import SiteCard from "components/common/Card/SiteCard";
import Pagination from "components/common/Pagination/Pagination";

export default function StyleGuidePage() {
  const data = usePagination();
  return (
    <Wrapper>
      <h1 className="h1">Camping101 스타일 가이드 페이지</h1>
      <TitleSection title="팔레트" />
      <Row>
        <div className="col-sm">
          <div className="card-body">
            <div className="primary">
              <span>#2a72ff</span>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card-body">
            <div className="green">
              <span>#3da744</span>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card-body">
            <div className="teal">
              <span>#42c994</span>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card-body">
            <div className="teal">
              <span>#42c994</span>
            </div>
          </div>
        </div>
      </Row>
      <TitleSection title="타이포그래피" />
      <div>
        <p className="h1">h1. Bootstrap heading</p>
        <p className="h2">h2. Bootstrap heading</p>
        <p className="h3">h3. Bootstrap heading</p>
        <p className="h4">h4. Bootstrap heading</p>
        <p className="h5">h5. Bootstrap heading</p>
        <p className="h6">h6. Bootstrap heading</p>
      </div>
      <TitleSection title="카드" />
      <div>
        <SiteCard {...SiteCardData} />
        <ReviewCard {...CampLogData} />
        <ResvSiteCard {...resvList} />
      </div>
      <TitleSection title="버튼" />
      <Button primary full>
        기본
      </Button>
      <Button green full>
        green
      </Button>
      <Button teal full>
        teal
      </Button>
      <TitleSection title="페이지네이션" />
      <Pagination {...data} total={10} />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  max-width: 968px;
  margin: auto;
  .h1 {
    font-size: 2.5rem;
  }

  .h2 {
    font-size: 2rem;
  }
  .h3 {
    font-size: 1.75rem;
  }
  .h4 {
    font-size: 1.5rem;
  }
  .h5 {
    font-size: 1.25rem;
  }
  .h6 {
    font-size: 1rem;
  }
`;

const Row = styled.div`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  .col-sm {
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
  }
  .card-body {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 160px;
      height: 80px;
      color: #fff;
      font-weight: 700;
    }
    .primary {
      background: #2a72ff;
      border-color: #2a72ff;
    }
    .green {
      border-color: #3da744;
      background-color: #3da744;
    }
    .teal {
      background: #42c994;
      border-color: #42c994;
    }
  }
`;

const CampLogData = {
  campLogId: 1,
  writerEmail: "test1@gmail.com",
  writerNickName: null,
  siteId: 2,
  visitedAt: "2023-01-19T19:08:48",
  visitedWith: "커플",
  recTags: ["청결함", "매너타임", "친절함"],
  title: "가고싶었던 캠핑장!",
  description:
    "가고싶었던 캠핑장! 드디어 다녀왔네요ㅎㅎ\n뻥~뚤린 뷰도 너무 좋았지만 무엇보다 전체적으로 시설이 엄청 좋았어요! 화장실,샤워실,개수대 너무너무 관리가 잘\n되어있었고 친절하신 사장님 덕분에 1박2일동안 편안하게\n조용히 잘 쉬다왔어요. 기회가 된다면 재방문하고싶은 캠핑장이에요-!",
  image:
    "https://campingagains3.s3.ap-northeast-2.amazonaws.com/thumbnail__4f07163e26.jpeg",
  image1:
    "https://campingagains3.s3.ap-northeast-2.amazonaws.com/medium_IMG_4305_bd14ce4f2a.jpeg",
  image2:
    "https://campingagains3.s3.ap-northeast-2.amazonaws.com/medium_IMG_4312_ff7be8e4a9.jpeg",
  image3:
    "https://campingagains3.s3.ap-northeast-2.amazonaws.com/medium_IMG_4316_abf3444fdd.jpeg",
  image4:
    "https://campingagains3.s3.ap-northeast-2.amazonaws.com/medium_IMG_4317_e3c1fac3dc.jpeg",
  image5:
    "https://campingagains3.s3.ap-northeast-2.amazonaws.com/medium_IMG_4348_72e88e0236.jpeg",
  like: 224,
  view: 482,
  createdAt: "2023-04-19T19:07:33",
  updatedAt: "2023-06-24T07:11:06.189937",
};

const SiteCardData = {
  campName: "캠핑장1",
  campId: 1,
  intro: "string233",
  manageStatus: "AUTHORIZED",
  location: {
    environment: "string",
    addr1: "string",
    addr2: "string",
    latitude: "string",
    longitude: "string",
  },
  openSeason: "봄",
  animalCapable: "string",
  firstImage:
    "https://campingagains3.s3.ap-northeast-2.amazonaws.com/thumbnail_20221026_111207_31fea50419.jpg",
  campLogCnt: null,
  sites: null,
};
