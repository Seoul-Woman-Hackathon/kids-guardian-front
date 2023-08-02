import * as styles from "./SubHeader.style";
import { ReactComponent as BackArrow } from "@icons/Arrow/BackArrow.svg";

interface SubHeaderProps {
  title: string;
}

const SubHeader = ({ title }: SubHeaderProps) => {
  return (
    <styles.Header>
      <styles.SubContainer>
        <styles.BackArrowContainer>
          <BackArrow />
        </styles.BackArrowContainer>
        <styles.Title>{title}</styles.Title>
      </styles.SubContainer>
    </styles.Header>
  );
};
export default SubHeader;
