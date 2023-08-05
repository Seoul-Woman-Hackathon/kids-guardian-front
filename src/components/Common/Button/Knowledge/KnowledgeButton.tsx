import * as styles from "./KnowledgeButton.style";

interface KnowledgeButtonProps {
  onClick?: () => void;
}

const KnowledgeButton = ({ onClick }: KnowledgeButtonProps) => {
  return (
    <styles.KnowlegeButtonContainer onClick={onClick}>
      <styles.KnowledgeButtonText>알아보기</styles.KnowledgeButtonText>
    </styles.KnowlegeButtonContainer>
  );
};
export default KnowledgeButton;
