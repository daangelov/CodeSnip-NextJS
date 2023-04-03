import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div className="border-t border-slate-900/5 py-10">
        <p className="text-center text-sm leading-6 text-slate-500">
          © 2023 CodeSnip - Дипломна работа
        </p>
        <p className="text-center text-sm leading-6 text-slate-500">
          ФМИ | Софийски университет &quot;Св. Климент Охридски&quot;
        </p>
        <div
          className="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          <Link href="https://github.com/daangelov" target="_black" rel="noopener noreferrer">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  )
}
