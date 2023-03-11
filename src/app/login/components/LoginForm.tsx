"use client";

import {Form, Formik} from 'formik';
import TextField from '@/components/form/TextField';

export default function LoginForm() {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={(values) => {
        console.log('submit', values);
      }}>
      <Form className="space-y-4" method="POST">
        <TextField name="email" type="email" placeholder="Имейл адрес" autoComplete="email" required />
        <TextField name="password" type="password" placeholder="Парола" autoComplete="current-password" required />

        <button type="submit"
                className="w-full rounded-md bg-orange-600 px-3.5 py-2.5
                  text-white shadow-sm
                  hover:bg-orange-500
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-orange-600">
          Вход
        </button>
      </Form>
    </Formik>
  )
}
