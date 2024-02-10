import { Logo } from '../../atoms/Logo/Logo';
import { HeroContent } from '../../molecules/HeroContent/HeroContent';
import S from './Hero.module.scss';

export const Hero = () => {
  return (
    <div className={S.hero}>
      <Logo type='bg' />
      <HeroContent />
    </div>
  );
};
