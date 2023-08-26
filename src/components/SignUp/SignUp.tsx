import { SignUpDto } from "@/types/user";
import SignUpInput from "../Common/Input/SignUp/SignUpInput";
import * as styles from "./SignUp.style";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signUp } from "@/apis/login";
import { useAsyncError, useNavigate } from "react-router-dom";

// todo : 백엔드 확인 되면 -> react-hook-form 다시 해보기!
const SignUp = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const onSubmit = async () => {
    const data: SignUpDto = {
      email: email,
      name: name,
      password: pw,
      birthdate: birthDate,
      phonenum: phoneNum,
    };
    const response = await signUp(data);
    if (response.isSuccess) {
      navigate("/onboarding");
    }
  };
  return (
    <>
      {click ? (
        <styles.Container>
          <styles.TitleText>회원가입</styles.TitleText>
          <styles.SubContainer>
            <SignUpInput
              title={"이름"}
              value={name}
              setValue={setName}
              label={"이름 입력"}
              click={click}
              setClick={setClick}
            />
            <SignUpInput
              title={"이메일"}
              value={email}
              setValue={setEmail}
              label={"abcd@gmail.com"}
              click={click}
              setClick={setClick}
              {...register("email")}
            />
            <SignUpInput
              title={"비밀번호"}
              value={pw}
              setValue={setPw}
              label={"비밀번호 입력"}
              click={click}
              setClick={setClick}
              {...register("password")}
            />
            <SignUpInput
              title={"생일"}
              value={birthDate}
              setValue={setBirthDate}
              label={"6자리입력"}
              click={click}
              setClick={setClick}
              {...register("birthDate", {
                required: "생년월일은 필수 입니다.",
                pattern: {
                  value: /^\d{6}$/,
                  message: "유효한 생일을 입력해주세요 (6자리 숫자)",
                },
              })}
            />
            <SignUpInput
              title={"핸드폰 번호"}
              value={phoneNum}
              setValue={setPhoneNum}
              label={"010-xxxx-xxxx"}
              click={click}
              setClick={setClick}
              {...(register("phoneNum"),
              {
                required: "핸드폰 번호를 입력해주세요",
                pattern: {
                  value: /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/,
                  message: "유효한 핸드폰 번호를 입력해주세요",
                },
              })}
            />
          </styles.SubContainer>
          <button
            type="submit"
            style={{ border: 0, backgroundColor: "transparent" }}
          >
            <styles.SignUpOnBtn onClick={onSubmit}>
              <styles.SignupOnText>회원가입</styles.SignupOnText>
            </styles.SignUpOnBtn>
          </button>
        </styles.Container>
      ) : (
        <styles.Container>
          <styles.TitleText>회원가입</styles.TitleText>
          <styles.SubContainer>
            <SignUpInput
              title={"이름"}
              value={name}
              setValue={setName}
              label={"이름 입력"}
              click={click}
              setClick={setClick}
            />
            <SignUpInput
              title={"이메일"}
              value={email}
              setValue={setEmail}
              label={"abcd@gmail.com"}
              click={click}
              setClick={setClick}
              {...register("email")}
            />
            <SignUpInput
              title={"비밀번호"}
              value={pw}
              setValue={setPw}
              label={"비밀번호 입력"}
              click={click}
              setClick={setClick}
              {...register("password")}
            />
            <SignUpInput
              title={"생일"}
              value={birthDate}
              setValue={setBirthDate}
              label={"6자리입력"}
              click={click}
              setClick={setClick}
              {...register("birthDate", {
                required: "생년월일은 필수 입니다.",
                pattern: {
                  value: /^\d{6}$/,
                  message: "유효한 생일을 입력해주세요 (6자리 숫자)",
                },
              })}
            />
            <SignUpInput
              title={"핸드폰 번호"}
              value={phoneNum}
              setValue={setPhoneNum}
              label={"010-xxxx-xxxx"}
              click={click}
              setClick={setClick}
              {...(register("phoneNum"),
              {
                required: "핸드폰 번호를 입력해주세요",
                pattern: {
                  value: /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/,
                  message: "유효한 핸드폰 번호를 입력해주세요",
                },
              })}
            />
          </styles.SubContainer>
          <styles.SignupOffBtn>
            <styles.SignupOffText>회원가입</styles.SignupOffText>
          </styles.SignupOffBtn>
        </styles.Container>
      )}
    </>
  );
};

export default SignUp;
