import React, {InputHTMLAttributes} from 'react';
import {useField} from 'formik';
import Show from '@/components/common/Show';

interface TextFieldProps {
  id?: string,
  name: string,
}

export default function TextField({...props}: TextFieldProps & InputHTMLAttributes<HTMLInputElement>) {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className="sr-only">
        {props.placeholder}
      </label>
      <input
        {...field}
        {...props}
        className="mt-1 block w-full rounded-md border border-gray-300
         shadow-sm p-3 text-gray-900 placeholder-gray-500
         focus:border-orange-500 focus:outline-orange-500"
      />
      <Show when={meta.touched && meta.error}>
        <div className="error">{meta.error}</div>
      </Show>
    </>
  )
}
