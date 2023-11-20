import { IsPostJoinProps } from "@libs/api/auth/postJoinType";

export interface IsUseJoinForm extends IsPostJoinProps {
  passwordConfirm: string;
}
