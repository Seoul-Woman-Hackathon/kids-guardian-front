import * as styles from "./LoginInputStyle";
import { useState } from "react";
import { ReactComponent as CancelOffComponent } from "@/assets/icons/Cancel/cancel.svg";
import { ReactComponent as CancelOnComponent } from "@/assets/icons/Cancel/cancel_on.svg";
import React, { SetStateAction, Dispatch } from "react";

interface LoginInputProps {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const LoginInput = ({ label, value, setValue }: LoginInputProps) => {
  const [click, setClick] = useState(false);
  const onClick = () => {
    setClick(true);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const cancelClick = () => {
    setValue("");
  };
  return (
    <>
      {click ? (
        <styles.ClickContainer>
          <styles.ClickedInput onChange={onChange} value={value} />
          <styles.CancelWrapper>
            <CancelOnComponent onClick={cancelClick} />
          </styles.CancelWrapper>
        </styles.ClickContainer>
      ) : (
        <styles.Container>
          <styles.Input placeholder={label} onClick={onClick} />
          <styles.CancelWrapper>
            <CancelOffComponent onClick={cancelClick} />
          </styles.CancelWrapper>
        </styles.Container>
      )}
    </>
  );
};

export default LoginInput;
