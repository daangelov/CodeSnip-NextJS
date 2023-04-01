import '@/styles/globals.css'

import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {ROUTES} from '@/config/routes';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="h-screen w-screen">
      <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-5xl font-semibold text-orange-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
            Страницата не е намерена
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            За съжаление не успяхме да намерим страницата, която търсиш.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => router.back()}
              className="text-base font-semibold leading-7 text-gray-900"
            >
              <span aria-hidden="true">←</span> Назад
            </button>
            <Link
              href={ROUTES.Home.href}
              className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
              hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-orange-600"
            >
              Начало
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
