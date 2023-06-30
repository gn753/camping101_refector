import styled from "@emotion/styled";
import postJoin from "@libs/api/auth/postJoin";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@components/common/Button/StyledButton";
import ErrorMessage from "./ErrorMessage";
import FormInputValidation from "./FormInputValidation";
import { IsUseJoinForm } from "./FormType";

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm<IsUseJoinForm>({
    mode: "onSubmit",
    defaultValues: {
      memberType: "CUSTOMER",
      signUpType: "EMAIL",
      nickname: "",
      email: "",
      password: "",
      passwordConfirm: "",
      phone: "",
      file: [],
    },
  });
  const { errors } = formState;
  const router = useRouter();
  const createUserJoin = async (data: IsUseJoinForm) => {
    const formData = new FormData();
    if (isLoading) return;
    setIsLoading(true);
    formData.append("memberType", data.memberType);
    formData.append("signUpType", data.signUpType);
    formData.append("nickname", data.nickname);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("phoneNumber", data.phone);
    formData.append("profileImage", data.file[0]);

    await postJoin(formData)
      .then(() => {
        setTimeout(() => setIsLoading(false), 3000);
        router.replace("/");
      })
      .catch((error) => {
        setTimeout(() => setIsLoading(false), 3000);
        const text = error.message;
        alert(text);
      });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(createUserJoin)}>
      <FormInputValidation
        title="닉네임"
        errorMessage={<ErrorMessage errors={errors.nickname} />}
        type="text"
        register={{
          ...register("nickname", {
            required: "필수 응답 항목입니다.",
          }),
        }}
      />
      <FormInputValidation
        title="프로필"
        errorMessage={<ErrorMessage errors={errors.nickname} />}
        type="file"
        register={{
          ...register("file", {
            required: "필수 응답 항목입니다.",
          }),
        }}
      />
      <FormInputValidation
        title="이메일"
        type="email"
        register={{
          ...register("email", {
            required: "필수 응답 항목입니다.",
          }),
        }}
        errorMessage={<ErrorMessage errors={errors.file} />}
      />
      <FormInputValidation
        title="비밀번호"
        type="password"
        register={{
          ...register("password", {
            required: "필수 응답 항목입니다.",
          }),
        }}
        errorMessage={<ErrorMessage errors={errors.password} />}
      />
      <FormInputValidation
        title="비밀번호 확인"
        type="password"
        register={{
          ...register("passwordConfirm", {
            required: "필수 응답 항목입니다.",
          }),
        }}
        errorMessage={<ErrorMessage errors={errors.passwordConfirm} />}
      />
      <FormInputValidation
        title="연락처"
        type="number"
        register={{
          ...register("phone", {
            required: "필수 응답 항목입니다.",
          }),
        }}
        errorMessage={<ErrorMessage errors={errors.phone} />}
      />
      <CustomButton primary>
        <span>{isLoading ? "가입처리중...." : "회원가입하기"}</span>
      </CustomButton>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CustomButton = styled(Button)`
  display: block;
  width: 449px;
`;
