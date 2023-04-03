import Link from 'next/link';
import {ROUTES} from '~/config/routes';

export default function Home() {
  return (
    <div className="px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Code. Save. Use. Share.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Никога не забравяй кода си вкъщи! Навсякъде и по всяко време. Лесеният начин за запазване, споделяне и
            използване на парчета код.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href={ROUTES.Login.href}
                  className="rounded-md bg-orange-600 px-3.5 py-1.5 text-base font-semibold leading-7
                  text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-offset-2 focus-visible:outline-orange-600">
              Започни сега
            </Link>
            <Link href={ROUTES.About.href} className="text-base font-semibold leading-7 text-gray-900">
              Научи повече <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
