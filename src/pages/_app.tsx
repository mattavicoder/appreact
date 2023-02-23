import { type AppType, AppProps } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

import { api } from "~/utils/api";

import "~/styles/globals.css";
import GeneralLayout from "~/components/layouts/GeneralLayout";


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp: AppType<{session: Session | null}> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session}>
      <GeneralLayout>
      {getLayout(<Component {...pageProps} />)}
      </GeneralLayout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
