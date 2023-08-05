import KnowledgeButton from "../Common/Button/Knowledge/KnowledgeButton";
import * as styles from "./Knowledge.style";
import { KNOWLEDGE_DATA } from "./KnowledgeData";

const Knowledge = () => {
  return (
    <>
      <styles.Container>
        {KNOWLEDGE_DATA.map((item) => (
          <styles.KnowledgeImageContainer url={item.img} key={item.id}>
            <styles.KnowledgeTitle>{item.title}</styles.KnowledgeTitle>
            <styles.KnowledgeSubTitle>{item.subTitle}</styles.KnowledgeSubTitle>
            <KnowledgeButton />
          </styles.KnowledgeImageContainer>
        ))}
      </styles.Container>
    </>
  );
};
export default Knowledge;