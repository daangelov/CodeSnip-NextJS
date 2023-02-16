import {UsersIcon, CursorArrowRaysIcon, ShareIcon, CogIcon} from '@heroicons/react/24/outline';

export function About() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl font-semibold leading-8 tracking-tight text-orange-600">
            CodeSnip
          </h1>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Най-добрият инструмент за лесно съхраняване, организиране и споделяне на често използвани парчета код.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Дипломна работа | ФМИ
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div
                  className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                  <CursorArrowRaysIcon className="h-6 w-6 text-white" />
                </div>
                Лесен за използване
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                CodeSnip е създаден да бъде прост и интуитивен, като ти позволява бързо и лесно да добавяш нови парчета
                код. Помага ти да спестиш време и да увеличиш своята производителност, като предоставя централно
                хранилище за всичики твои парчета код.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div
                  className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                  <UsersIcon className="h-6 w-6 text-white" />
                </div>
                Напревен за всички
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                CodeSnip е идеален за разработчици от всички нива - от начинаещи до напреднали.
                Независимо дали работиш по личен проект или си сътрудничиш с други в екип, CodeSnip е идеалният
                инструмент за поддържане на важни и интересни парчета код организирано и достъпено.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div
                  className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                  <CogIcon className="h-6 w-6 text-white" />
                </div>
                Многофункционален
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Платформата разполага с множество функционалности, част от които - споделяне, редактиране,
                категоризирате с етикети, търсене по ключови думи и много други.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div
                  className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                  <ShareIcon className="h-6 w-6 text-white" />
                </div>
                Споделянето е загриженост
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Споделяйки твоите парчета код с колеги, приятели или по-широката общност на разработчиците,
                ти помагаш и насърчаваш на сътрудничеството и споделянето на знания.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
