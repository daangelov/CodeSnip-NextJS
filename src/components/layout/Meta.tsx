import Head from 'next/head'
import {usePathname} from 'next/navigation';

const url = 'https://www.codesnip.bg';
const defaultTitle = 'CodeSnip';
const defaultDescription = 'Никога не забравяй кода си вкъщи! Навсякъде и по всяко време. Лесеният начин за запазване, споделяне и използване на парчета код.';

export type PageMeta = {
  title: string,
  description: string,
} | undefined;

export default function Meta({pageMeta}: { pageMeta: PageMeta }) {
  const pathname = usePathname() || '';

  const title = pageMeta?.title ? `${pageMeta.title} | ${defaultTitle}` : defaultTitle;
  const description = pageMeta?.description || defaultDescription;

  return (
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="theme-color" content="#ffffff" />
      <link rel="canonical" href={`${url}/${pathname}`} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="код, снипет, code, snippet, edit, create, share" />
      <meta name="author" content="Dragomir Angelov" />
      <link rel="manifest" href="/manifest.json" />

      <meta property="og:url" content={`${url}/${pathname}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/icon.svg" />
      <meta property="og:locale" content="BG" />
      <meta property="og:sitename" content="CodeSnip" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/icon.svg" />
    </Head>
  )
}

