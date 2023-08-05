import { useParams } from "react-router-dom";
import { KNOWLEDGE_DATA } from "./KnowledgeData";
import * as styles from "./KnowledgeDetail.style";

const KnowledgeDetail = () => {
  const { id } = useParams();
  console.log(id);
  const idx = parseInt(id!);

  return (
    <styles.Container>
      <styles.Image url={KNOWLEDGE_DATA[idx].img} />
      <styles.TextContainer>
        <styles.TextTitle>{KNOWLEDGE_DATA[idx].title}</styles.TextTitle>
        {KNOWLEDGE_DATA[idx].detail.map((text) => (
          <styles.TextBody>{text}</styles.TextBody>
        ))}
      </styles.TextContainer>
    </styles.Container>
  );
};

export default KnowledgeDetail;
