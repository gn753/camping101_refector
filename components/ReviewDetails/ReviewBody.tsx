import styled from "@emotion/styled";

interface Props {
  details: any;
}

export default function ReviewBody({ data }: any) {
  const { visitedAt, recTags, visitedWith, description } = data;
  return (
    <section>
      <div>
        <Introduce>
          <strong>XXXX ZZZZ사이트</strong>
          <ul>
            <li>날짜 : {visitedAt}</li>
            <li>인원 : {visitedWith}</li>
            <li>
              추천태그 :
              {recTags.map((tag: string, index: number) => (
                <span key={`${tag} - ${index}`}>{tag}</span>
              ))}
            </li>
          </ul>
        </Introduce>
      </div>
      <Editor>
        <strong>에디터 소개</strong>
        <p>{description}</p>
      </Editor>
    </section>
  );
}

const Introduce = styled.div`
  background-color: #eee;
  padding: 10px;
  border-radius: 10px;
  margin: 2rem 0;
`;

const Editor = styled.div`
  min-height: 200px;
  margin: 10px 0;

  border-bottom: 1px solid black;
  strong {
    display: block;
    margin-bottom: 10px;
    font-size: 20px;
  }
  p {
    line-height: 2rem;
  }
`;
