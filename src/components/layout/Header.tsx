"use client";

import {useState} from 'react'
import Link from 'next/link'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {Dialog} from '@headlessui/react'

import {ROUTES} from '~/config/routes'

const routes = [
  ROUTES.Home,
  ROUTES.About,
  ROUTES.Login,
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header>
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href={ROUTES.Home.href} className="-m-1.5 p-1.5">
              <span className="font-bold text-3xl text-orange-500">&lt;CodeSnip /&gt;</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {routes.map(route => (
              <Link key={route.name} href={route.href}
                    className="text-sm font-semibold leading-6 text-gray-900 uppercase">
                {route.name}
              </Link>
            ))}
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <Link href={ROUTES.Home.href} className="-m-1.5 p-1.5">
                <span className="font-bold text-3xl text-orange-500">&lt;CodeSnip /&gt;</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6">
                <div className="space-y-2 py-6 divide-y divide-gray-500/10">
                  {routes.map(route => (
                    <a key={route.name} href={route.href}
                       className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                      {route.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </header>
  )
}
