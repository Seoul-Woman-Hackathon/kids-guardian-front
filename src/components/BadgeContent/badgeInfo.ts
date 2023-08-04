import { ReactComponent as BallonIcon } from '@/assets/BadgeImage/balloon.svg';
import { ReactComponent as MeerkatIcon } from '@/assets/BadgeImage/meerkat.svg';
import { ReactComponent as SafeHatIcon } from '@/assets/BadgeImage/safeHat.svg';
import { ReactComponent as SunglassIcon } from '@/assets/BadgeImage/sunglass.svg';
import { ReactComponent as TurtleIcom } from '@/assets/BadgeImage/turtle.svg';

interface BadgeInfoType {
  name: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const BADGE_INFO: BadgeInfoType[] = [
  {
    name: '1. 안전의 시작',
    icon: SafeHatIcon,
  },
  {
    name: '2. 좌우 살피는 미어켓',
    icon: MeerkatIcon,
  },
  {
    name: '3. 손 들고 건너기',
    icon: BallonIcon,
  },
  {
    name: '4. 천천히 건너기',
    icon: TurtleIcom,
  },
  {
    name: '5. 신호등 살피기',
    icon: SunglassIcon,
  },
];
