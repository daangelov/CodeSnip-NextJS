import {CogIcon, CursorArrowRaysIcon, ShareIcon, UsersIcon} from '@heroicons/react/24/outline';
import Feature from '@/app/about/components/Feature';

const features = [
  {
    title: 'Лесен за използване',
    description: 'CodeSnip е създаден да бъде прост и интуитивен, като ти позволява бързо и лесно да добавяш нови ' +
      'парчета код. Помага ти да спестиш време и да увеличиш своята производителност, като предоставя централно ' +
      'хранилище за всичики твои парчета код.',
    icon: CursorArrowRaysIcon,
  },
  {
    title: 'Напревен за всички',
    description: 'CodeSnip е идеален за разработчици от всички нива - от начинаещи до напреднали. Независимо дали ' +
      'работиш по личен проект или си сътрудничиш с други в екип, CodeSnip е идеалният инструмент за поддържане на ' +
      'важни и интересни парчета код организирано и достъпено.',
    icon: UsersIcon,
  },
  {
    title: 'Многофункционален',
    description: 'Платформата разполага с множество функционалности, част от които - споделяне, редактиране, ' +
      'категоризирате с етикети, търсене по ключови думи и много други.',
    icon: CogIcon,
  },
  {
    title: 'Споделянето е загриженост',
    description: 'Споделяйки твоите парчета код с колеги, приятели или по-широката общност на разработчиците, ти ' +
      'помагаш и насърчаваш на сътрудничеството и споделянето на знания.',
    icon: ShareIcon,
  },
];

export default function Features() {
  return (
    <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
      {features.map((feature, index) => (
        <Feature key={index} title={feature.title} description={feature.description} icon={feature.icon} />
      ))}
    </dl>
  )
}
