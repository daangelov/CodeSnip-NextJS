import CommonHead from '@/components/head/CommonHead'

export default function Head() {
  const description = 'Регистрирай се и влез в платформта за да започнеш да я използваш';
  const title = 'Вход';

  return <CommonHead title={title} description={description} />
}
