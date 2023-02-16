"use client";

import {usePathname} from 'next/navigation'

export default function CommonHead({title, description}: {
  title: string,
  description: string,
}) {
  const currentUrl = `https://www.codesnip.bg${usePathname()}`;

  return (
    <>
      <title>{`${title} | CodeSnip`}</title>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

      <meta name="theme-color" content="#ff0000" />

      <link rel="canonical" href={currentUrl} />

      <meta name="description" content={description} />
      <meta name="keywords" content="код, снипет, code, snippet, edit, create, share" />
      <meta name="author" content="Dragomir Angelov" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content="/images/icon.svg" />
      <meta property="og:locale" content="BG" />
      <meta property="og:site_name" content="CodeSnip" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content="/images/icon.svg" />
    </>
  )
}
