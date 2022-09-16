// src/pages/_app.tsx
import { ChakraProvider } from '@chakra-ui/react';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { withTRPC } from '@trpc/next';
import { SessionProvider } from 'next-auth/react';
import { NextIntlProvider } from 'next-intl';
import type { AppType } from 'next/dist/shared/lib/utils';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import superjson from 'superjson';
import type { AppRouter } from '../server/router';
import '../styles/globals.scss';
import '../components/SplashScreen/SplashScreen.scss';
import SplashScreen from '@/components/SplashScreen/SplashScreen';
import { useStore } from '@/store';
import Head from 'next/head';
import { GetServerSidePropsContext } from 'next';

const removeLocaleFromUrl: (
  url: string,
  locale: string | undefined
) => string = (url, locale) => {
  console.log(url);
  return url === `/${locale}` ? '/' : url?.replace(`/${locale}`, '');
};

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();

  const setLoading = useStore((state) => state.setLoading);

  // useEffect(() => {
  //   const handleStart = (url: string) =>
  //     removeLocaleFromUrl(url, router?.locale) !== router.asPath &&
  //     setLoading(true);
  //   const handleComplete = (url: string) =>
  //     removeLocaleFromUrl(url, router?.locale) === router.asPath &&
  //     setLoading(false);

  //   router.events.on('routeChangeStart', handleStart);
  //   router.events.on('routeChangeComplete', handleComplete);
  //   router.events.on('routeChangeError', handleComplete);

  //   return () => {
  //     router.events.off('routeChangeStart', handleStart);
  //     router.events.off('routeChangeComplete', handleComplete);
  //     router.events.off('routeChangeError', handleComplete);
  //   };
  // });
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
          integrity='sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
      </Head>
      <SessionProvider session={session}>
        <ChakraProvider>
          <NextIntlProvider messages={pageProps.messages}>
            <SplashScreen />
            <Component {...pageProps} />
          </NextIntlProvider>
        </ChakraProvider>
      </SessionProvider>
    </>
  );
};

const getBaseUrl = () => {
  if (typeof window !== 'undefined') return ''; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config() {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({ url }),
      ],
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
