import { useNavigate } from "react-router-dom";
import * as styles from "./SubHeader.style";
import { ReactComponent as BackArrow } from "@icons/Arrow/BackArrow.svg";

interface SubHeaderProps {
  title: string;
}

const SubHeader = ({ title }: SubHeaderProps) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(-1);
  };
  return (
    <styles.Header>
      <styles.SubContainer>
        <styles.BackArrowContainer>
          <BackArrow onClick={onClick} />
        </styles.BackArrowContainer>
        <styles.Title>{title}</styles.Title>
      </styles.SubContainer>
    </styles.Header>
  );
};
export default SubHeader;
