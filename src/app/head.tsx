import CommonHead from '@/components/head/CommonHead'

export default function Head() {
  const title = 'CodeSnip';
  const description = 'Никога не забравяй кода си вкъщи! Навсякъде и по всяко време. Лесеният начин за запазване, споделяне и използване на парчета код.';

  return <CommonHead title={title} description={description} />
}
