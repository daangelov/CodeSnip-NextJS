"use client";

import {Field, Form, Formik} from 'formik';

export default function SignupForm() {
  return (
    <Formik
      initialValues={{
        names: '',
        email: '',
        password: '',
        passwordRepeat: '',
      }}
      onSubmit={(values) => {
        console.log('submit', values);
      }}>
      <Form className="space-y-4" method="POST">
        <label htmlFor="email" className="sr-only">Имена</label>
        <Field
          id="names"
          name="names"
          placeholder="Имена"
          type="text"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm
            p-3 text-gray-900 placeholder-gray-500 focus:border-orange-500 focus:outline-orange-500"
        />
        <label htmlFor="email" className="sr-only">Имейл</label>
        <Field
          id="email"
          name="email"
          placeholder="Имейл адрес"
          type="email"
          autoComplete="email"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm
            p-3 text-gray-900 placeholder-gray-500 focus:border-orange-500 focus:outline-orange-500"
        />
        <label htmlFor="password" className="sr-only">Парола</label>
        <Field
          id="password"
          name="password"
          placeholder="Парола"
          type="password"
          autoComplete="current-password"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm
            p-3 text-gray-900 placeholder-gray-500 focus:border-orange-500 focus:outline-orange-500"
        />
        <label htmlFor="passwordRepeat" className="sr-only">Парола</label>
        <Field
          id="passwordRepeat"
          name="passwordRepeat"
          placeholder="Повтори парола"
          type="password"
          autoComplete="current-password"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm
            p-3 text-gray-900 placeholder-gray-500 focus:border-orange-500 focus:outline-orange-500"
        />

        <button type="submit"
                className="w-full rounded-md bg-orange-600 px-3.5 py-2.5
                  text-white shadow-sm
                  hover:bg-orange-500
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-orange-600">
          Регистрация
        </button>
      </Form>
    </Formik>
  )
}
