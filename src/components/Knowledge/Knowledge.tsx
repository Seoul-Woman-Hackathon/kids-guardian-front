import { useNavigate } from "react-router-dom";
import KnowledgeButton from "../Common/Button/Knowledge/KnowledgeButton";
import * as styles from "./Knowledge.style";
import { KNOWLEDGE_DATA } from "./KnowledgeData";

const Knowledge = () => {
  const navigate = useNavigate();
  const onClick = (id: number) => {
    navigate(`/knowledge/${id}`);
  };
  return (
    <>
      <styles.Container>
        {KNOWLEDGE_DATA.map((item) => (
          <styles.KnowledgeImageContainer key={item.id}>
            <styles.ImageContainer url={item.img} key={item.id}>
              <styles.KnowledgeTitle>{item.title}</styles.KnowledgeTitle>
              <styles.KnowledgeSubTitle>
                {item.subTitle}
              </styles.KnowledgeSubTitle>
              <styles.ButtonContainer>
                <KnowledgeButton onClick={() => onClick(item.id)} />
              </styles.ButtonContainer>
            </styles.ImageContainer>
          </styles.KnowledgeImageContainer>
        ))}
      </styles.Container>
    </>
  );
};
export default Knowledge;
