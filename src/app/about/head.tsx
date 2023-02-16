import CommonHead from '@/components/head/CommonHead'

export default function Head() {
  const description = 'Накратко за проекта';
  const title = 'За Проекта';

  return <CommonHead title={title} description={description} />
}
