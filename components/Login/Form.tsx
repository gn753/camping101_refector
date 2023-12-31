import styled from "@emotion/styled";
import getUserData from "@libs/api/auth/getUserData";
import postLogin from "@libs/api/auth/postLogin";
import {
  setRefreshToken,
  tokenWithoutBearer,
} from "@components/common/Auth/authToken.service";
import { authAccessTokenAtom, authUserData } from "@libs/store/authStore";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import Button from "@components/common/Button/StyledButton";
import FormInputValidation from "./FormInputValidation";

interface IsUseFormProps {
  email: string;
  password: string;
}

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const setUser = useSetRecoilState(authUserData);
  const setLogin = useSetRecoilState(authAccessTokenAtom);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IsUseFormProps>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const loginUser = async (data: IsUseFormProps) => {
    if (isLoading) return false;
    await postLogin(data)
      .then((res) => {
        const accessToken = res?.headers["access-token"];
        const refreshToken = tokenWithoutBearer(res?.headers["refresh-token"]);
        setRefreshToken(refreshToken);
        setIsLoading(false);
        setLogin(accessToken);
        axios.defaults.headers.common.Authorization = accessToken;

        getUserData().then((response) => setUser(response.data));
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(loginUser)}>
      <FormInputValidation
        title="이메일"
        errors={errors.email}
        type="email"
        register={{
          ...register("email", {
            required: "필수 응답 항목입니다.",
          }),
        }}
      />
      <FormInputValidation
        title="비밀번호"
        errors={errors.password}
        type="password"
        register={{
          ...register("password", {
            required: "필수 응답 항목입니다.",
          }),
        }}
      />
      <CustomButton primary full>
        로그인
      </CustomButton>
    </form>
  );
}

const CustomButton = styled(Button)`
  width: 449px;
  margin-top: 20px;
`;
