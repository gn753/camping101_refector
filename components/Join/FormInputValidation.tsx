import styled from "@emotion/styled";

export default function FormInputValidation({
  title,
  type,
  register,
  errorMessage,
}: any) {
  return (
    <>
      <FormInputTextFiled>
        <Label>{title}</Label>
        <Input type={type} {...register} />
      </FormInputTextFiled>
      {errorMessage}
    </>
  );
}

const FormInputTextFiled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px 10px;
`;

const Label = styled.label`
  width: 100px;
`;
