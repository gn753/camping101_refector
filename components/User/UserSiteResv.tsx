import styled from "@emotion/styled";
import axiosInstance from "@libs/api/axiosInstance";
import { useEffect, useState } from "react";
import TitleSection from "@components/Review/ContentTitleSection";
import Pagination from "@components/common/Pagination/Pagination";
import usePagination from "@components/common/Pagination/paginationHook";

interface Props {
  userId: number;
}

interface IsGetUserResv {
  memberId: number;
  reservationId: number;
  siteId: number;
  siteName: string;
  startDate: string;
  endDate: string;
  humanCapacity: number;
  status: string;
  payment: number;
  createdAt: string;
  cancelAt: object;
  campLogYn: boolean;
  campLogWritableYn: boolean;
}

export default function UserSiteResv({ userId }: Props) {
  const [resv, setResvList] = useState<[] | IsGetUserResv[]>([]);
  const pagination = usePagination();
  useEffect(() => {
    if (typeof window !== undefined) {
      const getResv = async () => {
        if (!userId) return false;
        const response = await axiosInstance.get(
          `/api/reservation/customer/${userId}`,
        );
        setResvList(response.data);
      };
      getResv();
    }
  }, [userId]);

  const removeResv = async (resvId: number) => {
    await axiosInstance.delete(`/api/reservation/${resvId}`);
    const list = resv.filter((it) => it.reservationId !== resvId);
    setResvList(list);
  };

  return (
    <div>
      <div>
        <TitleSection title="예약목록" />
        <Table>
          <thead>
            <tr>
              <th>예약ID</th>
              <th>숙박명</th>
              <th>예약상태</th>
              <th>예약기간</th>
              <th>예약변경</th>
            </tr>
          </thead>
          <tbody>
            {resv.length > 0 &&
              resv.map((item) => {
                return (
                  <tr>
                    <td>{item.reservationId}</td>
                    <td>{item.siteName}</td>
                    <td>{item.status}</td>
                    <td>
                      {item.startDate} {item.endDate}
                    </td>
                    <td className="action">
                      <button onClick={() => removeResv(item.reservationId)}>
                        cancle
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>

        <Pagination total={resv.length} {...pagination} />
      </div>
    </div>
  );
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: rgb(185 188 191 / 20%) 0px 0px 24px 5px;
  border-radius: 5px;
  font-family: arial;
  thead {
    th {
      padding: 10px 16px;
      text-align: left;
      background-color: #f3f3f5;
    }
  }

  tbody {
    tr {
      td {
        padding: 10px 16px;
        border-bottom: 1px solid #eee;
      }

      .action {
        display: flex;

        button {
          margin-right: 10px;
          cursor: pointer;
          background-color: #f3f3f5;
          border: none;
          padding: 5px 10px;
          border-radius: 2px;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
  overflow: auto;
`;
