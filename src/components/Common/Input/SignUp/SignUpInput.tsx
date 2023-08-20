import * as styles from "./SignupInputStyle";
import { useState } from "react";
import { ReactComponent as CancelOffComponent } from "@/assets/icons/Cancel/cancel.svg";
import { ReactComponent as CancelOnComponent } from "@/assets/icons/Cancel/cancel_on.svg";
import React, { SetStateAction, Dispatch } from "react";

interface SignUpInputProps {
  title: string;
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  click: boolean;
  setClick: Dispatch<SetStateAction<boolean>>;
}

const SignUpInput = ({
  title,
  label,
  value,
  setValue,
  click,
  setClick,
}: SignUpInputProps) => {
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
        <>
          {title}
          <styles.ClickContainer>
            <styles.ClickedInput onChange={onChange} value={value} />
            <styles.CancelWrapper>
              <CancelOnComponent onClick={cancelClick} />
            </styles.CancelWrapper>
          </styles.ClickContainer>
        </>
      ) : (
        <>
          {title}
          <styles.Container>
            <styles.Input placeholder={label} onClick={onClick} />
            <styles.CancelWrapper>
              <CancelOffComponent onClick={cancelClick} />
            </styles.CancelWrapper>
          </styles.Container>
        </>
      )}
    </>
  );
};

export default SignUpInput;
