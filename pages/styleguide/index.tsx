import styled from "@emotion/styled";
import usePagination from "@components/common/Pagination/paginationHook";
import Button from "components/common/Button/StyledButton";
import ReviewCard from "components/common/Card/ReviewCard";
import SiteCard from "components/common/Card/SiteCard";
import Pagination from "components/common/Pagination/Pagination";

export default function StyleGuidePage() {
  const data = usePagination();
  return (
    <Wrapper>
      <h1>Camping101 스타일 가이드 페이지</h1>

      <h2>팔레트</h2>
      <Row>
        <div className="col-sm">
          <div className="card-body">
            <img
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22512%22%20height%3D%22256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20256%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_188d2bb2b6c%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A26pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_188d2bb2b6c%22%3E%3Crect%20width%3D%22512%22%20height%3D%22256%22%20fill%3D%22%232A72FF%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22183.75%22%20y%3D%22139.7%22%3E%232A72FF%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="샘플이미지"
            />
          </div>
        </div>
        <div className="col-sm">
          <div className="card-body">
            <img
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22512%22%20height%3D%22256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20256%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_188d2bb2b6c%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A26pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_188d2bb2b6c%22%3E%3Crect%20width%3D%22512%22%20height%3D%22256%22%20fill%3D%22%232A72FF%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22183.75%22%20y%3D%22139.7%22%3E%232A72FF%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="샘플이미지"
            />
          </div>
        </div>
        <div className="col-sm">
          <div className="card-body">
            <img
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22512%22%20height%3D%22256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20256%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_188d2bb2b6c%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A26pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_188d2bb2b6c%22%3E%3Crect%20width%3D%22512%22%20height%3D%22256%22%20fill%3D%22%232A72FF%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22183.75%22%20y%3D%22139.7%22%3E%232A72FF%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="샘플이미지"
            />
          </div>
        </div>
        <div className="col-sm">
          <div className="card-body">
            <img
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22512%22%20height%3D%22256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20256%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_188d2bb2b6c%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A26pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_188d2bb2b6c%22%3E%3Crect%20width%3D%22512%22%20height%3D%22256%22%20fill%3D%22%232A72FF%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22183.75%22%20y%3D%22139.7%22%3E%232A72FF%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="샘플이미지"
            />
          </div>
        </div>
      </Row>
      <h2>타이포그래피</h2>
      <div>
        <p className="h1">h1. Bootstrap heading</p>
        <p className="h2">h2. Bootstrap heading</p>
        <p className="h3">h3. Bootstrap heading</p>
        <p className="h4">h4. Bootstrap heading</p>
        <p className="h5">h5. Bootstrap heading</p>
        <p className="h6">h6. Bootstrap heading</p>
      </div>
      <h2>컴포넌트</h2>
      <div>
        <SiteCard {...SiteCardData} />
        <ReviewCard {...CampLogData} />
      </div>
      <h2>버튼</h2>
      <Button primary full>
        기본
      </Button>
      <Button green full>
        green
      </Button>
      <Button teal full>
        teal
      </Button>
      <h2>페이지네이션</h2>
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
