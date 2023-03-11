import {CodeBracketIcon} from '@heroicons/react/24/outline';
import SignupForm from '@/app/signup/components/SignupForm';

export function Signup() {
  return (
    <div className="flex flex-col min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <CodeBracketIcon className="text-orange-600 h-16 w-16 mx-auto" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Регистрирай се
          </h2>
        </div>

        <SignupForm />
      </div>
    </div>
  )
}
