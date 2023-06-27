import styled from "@emotion/styled";

interface Props {
  total: number;
  limit: number;
  page: number;
  updatePagination: (i: number) => void;
  nextArrow: () => void;
  prevArrow: () => void;
}

export default function Pagination({
  total,
  limit,
  page,
  updatePagination,
  nextArrow,
  prevArrow,
}: Props) {
  const numPages = Math.ceil(total / limit);

  return (
    <Nav>
      <Button onClick={prevArrow} disabled={page === 1}>
        &lt;
      </Button>
      {Array.from({ length: numPages }).map((_, i) => (
        <Button
          key={i}
          onClick={() => updatePagination(i)}
          data-page={page === i + 1 ? "page" : "none"}
        >
          {i + 1}
        </Button>
      ))}
      <Button onClick={nextArrow} disabled={page === numPages}>
        &gt;
      </Button>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[data-page="page"] {
    background: deeppink;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
  &[data-page="none"] {
    background: grey;
    cursor: revert;
    transform: revert;
  }
`;
