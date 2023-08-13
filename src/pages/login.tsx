import Image from 'next/image';
import Link from 'next/link';
import {signIn} from "next-auth/react"
import {CodeBracketIcon} from '@heroicons/react/24/outline';
import {type GetServerSideProps} from "next";

import {getServerAuthSession} from "~/server/auth";
import LoginForm from '~/components/pages/login/LoginForm';
import {ROUTES} from '~/config/routes';

Login.metadata = {
  title: 'Вход',
  description: 'Регистрирай се и влез в платформта за да започнеш да я използваш',
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerAuthSession(context);

  if (session) {
    return {
      redirect: {
        destination: ROUTES.Home.href,
        permanent: false,
      }
    }
  }

  return {
    props: {
      session,
    },
  }
}

export default function Login() {
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <CodeBracketIcon className="text-orange-600 h-16 w-16 mx-auto" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Влез в своя акаунт
          </h2>
        </div>

        <LoginForm />

        <p className="mt-1">
          {'Нямаш акаунт? '}
          <Link href={ROUTES.Signup.href} className="text-orange-500">Регистрирай се</Link>.
        </p>

        <div className="space-y-2 mt-5">
          <button type="button"
                  onClick={() => void signIn('github')}
                  className="flex justify-center items-center gap-2
                  w-full rounded-md bg-slate-700 px-3.5 py-2.5
                  text-white shadow-sm
                  hover:bg-slate-800
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-stale-700">
            <Image src="/images/github-mark-white.svg" alt="Github Icon" width={18} height={18} />
            Вход с GitHub
          </button>

          <button onClick={() => void signIn()}>Press</button>

          <button type="button"
                  className="w-full rounded-md px-3.5 py-2
                    border-2 border-slate-700
                    hover:bg-slate-100
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-stale-700"
          >
            Вход с Susi
          </button>
        </div>
      </div>
    </div>
  )
}
