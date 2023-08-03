import * as styles from "./AlarmPreview.style";

const AlarmPreview = () => {
  return (
    <>
      <styles.Container>
        <styles.SpeechContainer>
          <img
            src="src/assets/animation/staticImage/Alarm1Message.svg"
            width={600}
            height={250}
          ></img>
        </styles.SpeechContainer>
        <styles.ImageContainer>
          <img
            style={{ zIndex: 1 }}
            src="src/assets/animation/staticImage/Alarm1.png"
            width={500}
            height={500}
          ></img>
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
