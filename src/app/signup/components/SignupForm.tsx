"use client";

import {Form, Formik} from 'formik';
import {signIn} from 'next-auth/react';
import * as Yup from 'yup';

import TextField from '~/components/form/TextField';

export default function SignupForm() {
  return (
    <Formik
      initialValues={{names: '', email: '', password: '', passwordRepeat: ''}}
      validationSchema={Yup.object({
        names: Yup.string().max(24, 'Максимум 24 символа').required('Полето е задължително'),
        email: Yup.string().email('Невалиден Email адрес').required('Полето е задължително'),
        password: Yup.string().required('Полето е задължително'),
        passwordRepeat: Yup.string().oneOf([Yup.ref('password')], 'Паролите не съвпадат')
          .required('Полето е задължително'),
      })}
      onSubmit={async (values) => {
        await signIn('credentials', undefined, {...values})
        console.log('submit', values);
      }}>
      <Form className="space-y-4" method="POST">
        <TextField name="names" type="text" placeholder="Имена" required />
        <TextField name="email" type="email" placeholder="Имейл адрес" autoComplete="email" required />
        <TextField name="password" type="password" placeholder="Парола" autoComplete="current-password" required />
        <TextField
          name="passwordRepeat"
          type="password"
          placeholder="Повтори парола"
          autoComplete="current-password"
          required
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
