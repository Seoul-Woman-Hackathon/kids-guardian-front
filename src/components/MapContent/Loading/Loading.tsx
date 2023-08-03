import { ReactComponent as CharacterIcon } from '@/assets/icons/MapLoading/characterIcon.svg';
import { ReactComponent as SpeechBubbleIcon } from '@/assets/icons/MapLoading/speechBubbleIcon.svg';

import * as styles from './Loading.style';

const Loading = () => (
  <styles.Wrapper>
    <styles.TextWrapper>
      <styles.Text>
        위치 찾는 중... <br />
        잠시만 기다려줘!
      </styles.Text>
      <SpeechBubbleIcon />
    </styles.TextWrapper>

    <CharacterIcon />
  </styles.Wrapper>
);

export default Loading;
