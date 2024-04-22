import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/globals'
import { SessionProvider } from "next-auth/react"

globalStyles()


export default function App({ Component,  pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}


// export default function App({
//   Component,
//   pageProps: { session, ...pageProps },
// }: AppProps) {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <SessionProvider session={session}>
//         <DefaultSeo
//           openGraph={{
//             type: 'website',
//             locale: 'pt_BR',
//             url: 'https://www.ignite-call.rocketseat.com.br',
//             siteName: 'Ignite Call',
//           }}
//         />

//         <Component {...pageProps} />
//       </SessionProvider>
//     </QueryClientProvider>
//   )
// }