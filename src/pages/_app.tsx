import {type AppProps} from "next/app";
import {type Session} from "next-auth";
import {type NextPage} from "next";
import {type PageMeta} from "~/components/layout/Meta";

import {SessionProvider} from "next-auth/react";

import Layout from "~/components/layout/Layout";

import "~/styles/globals.css";

interface MyAppProps extends AppProps {
  Component: NextPage & {
    metadata?: PageMeta;
  },
  pageProps: { session: Session | null },
}

const MyApp = ({Component, pageProps: {session, ...pageProps}}: MyAppProps) => {
  const pageMeta = Component.metadata;

  return (
    <SessionProvider session={session}>
      <Layout pageMeta={pageMeta}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default MyApp;
