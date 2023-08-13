'use client';

import Image from 'next/image';
import {signIn} from 'next-auth/react';

export default function LoginWithGithubButton() {
  return (
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
  );
}
