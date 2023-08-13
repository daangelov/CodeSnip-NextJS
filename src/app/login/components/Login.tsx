import Link from 'next/link';
import {CodeBracketIcon} from '@heroicons/react/24/outline';
import {redirect} from "next/navigation";
import LoginWithSusiButton from "~/app/login/components/LoginButtons/LoginWithSusiButton";
import LoginWithGithubButton from "~/app/login/components/LoginButtons/LoginWithGithubButton";
import {getServerAuthSession} from "~/config/auth";

import {ROUTES} from '~/config/routes';
import LoginForm from '~/app/login/components/LoginForm';

export async function Login() {
  const session = await getServerAuthSession();

  if (session) {
    redirect('/');
  }

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
          <LoginWithGithubButton />
          <LoginWithSusiButton />
        </div>
      </div>
    </div>
  )
}
