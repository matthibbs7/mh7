import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../chakra/theme'
import Layout from '@/layout/Layout'
import { Analytics } from '@vercel/analytics/react';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
      <Component {...pageProps} />
      <Analytics />
      </Layout>
    </ChakraProvider>
  )
}
