import Features from '~/app/about/components/Features';

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
          <Features />
        </div>
      </div>
    </div>
  )
}
