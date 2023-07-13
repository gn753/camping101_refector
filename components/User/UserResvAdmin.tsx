import styled from "@emotion/styled";
import { IsAxiosErrorType } from "@libs/api/axiosErrorType";
import axiosInstance from "@libs/api/axiosInstance";
import getResvList from "@libs/api/getResvList";
import { IsGetResvList } from "@libs/api/getResvListType";
import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import TitleSection from "@components/Review/ContentTitleSection";
import Pagination from "@components/common/Pagination/Pagination";
import usePagination from "@components/common/Pagination/usePagination";

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

export default function UserResvAdmin({ userId }: Props) {
  const [resv, setResvList] = useState<[] | IsGetUserResv[]>([]);
  const { offset, limit, nextArrow, prevArrow, page, updatePagination } =
    usePagination();

  useEffect(() => {
    if (typeof window !== undefined) {
      if (userId) {
        getResvList(userId).then((res) => {
          setResvList(res);
        });
      }
    }
  }, [userId]);

  const removeResv = async (resvId: number) => {
    try {
      const response = await axiosInstance.delete(`/api/reservation/${resvId}`);
      if (response) {
        const filterd = resv.filter((it) => it.reservationId !== resvId);
        setResvList(filterd);
      }
    } catch (error) {
      if (isAxiosError<IsAxiosErrorType>(error)) {
        const status = error.response?.data.status;
        const message = error.response?.data.error_message;
        if (status === 500) {
          alert(`${status} : ${message}`);
        }
      }
    }
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
            {resv &&
              resv.length > 0 &&
              resv.slice(offset, offset + limit).map((item) => {
                return (
                  <tr>
                    <td>{item.reservationId}</td>
                    <td>{item.siteName}</td>
                    <td>{item.status}</td>
                    <td>
                      {item.startDate} {item.endDate}
                    </td>
                    <td className="action">
                      {item.status !== "CANCEL" ? (
                        <>
                          <button
                            onClick={() => removeResv(item.reservationId)}
                          >
                            cancle
                          </button>
                        </>
                      ) : (
                        <button disabled>취소불가</button>
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <Pagination
          total={resv.length}
          limit={limit}
          nextArrow={nextArrow}
          prevArrow={prevArrow}
          page={page}
          updatePagination={updatePagination}
        />
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
