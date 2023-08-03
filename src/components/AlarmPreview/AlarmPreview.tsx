import * as styles from "./AlarmPreview.style";

const AlarmPreview = () => {
  return (
    <>
      <styles.Container>
        <styles.SpeechContainer>
          <styles.SpeechImage />
        </styles.SpeechContainer>
        <styles.ImageContainer>
          <styles.CatImage />
        </styles.ImageContainer>
        <styles.RectContainer>
          <styles.Rect1 />
          <styles.Rect2 />
        </styles.RectContainer>
      </styles.Container>
    </>
  );
};

export default AlarmPreview;
