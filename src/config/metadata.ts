const url = 'https://www.codesnip.bg';
const defaultTitle = 'CodeSnip';
const defaultDescription = 'Никога не забравяй кода си вкъщи! Навсякъде и по всяко време. Лесеният начин за запазване, споделяне и използване на парчета код.';

export const defaultMetadata = {
  title: {
    default: defaultTitle,
    template: `%s | ${defaultTitle}`,
  },
  description: defaultDescription,
  themeColor: '#ffffff',
  alternates: {
    canonical: url,
  },
  keywords: 'код, снипет, code, snippet, edit, create, share',
  authors: [{name: 'Dragomir Angelov'}],
  icons: {
    icon: [
      {sizes: '16x16', url: '/favicon-16x16.png'},
      {sizes: '32x32', url: '/favicon-32x32.png'},
    ],
    apple: {sizes: '180x180', url: '/apple-touch-icon.png'},
  },
  manifest: 'manifest.json',
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    type: 'website',
    url: url,
    images: ['/images/icon.svg'],
    locale: 'BG',
    siteName: 'CodeSnip',
  },
  twitter: {
    card: 'summary',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/images/icon.svg'],
  },
}
