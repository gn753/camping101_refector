import styled from "@emotion/styled";
import postLogin from "@libs/api/auth/postLogin";
import { setAccessAndRefreshToken } from "@libs/services/authTokenService";
import { authLoginAtom } from "@libs/store/authStore";
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
  const setLogin = useSetRecoilState(authLoginAtom);
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
        setIsLoading(false);
        setLogin({ isLogin: true });
        setAccessAndRefreshToken(res);
        router.push("/");
      })
      .catch((errors) => {
        setIsLoading(false);
        alert(errors.message);
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
