import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
//No _app é onde serão direcionadas a pages, ou seja todas as pages serão carregadas dentro do _app
//O global styles fica aqui, pois não é ideal colocar css no _document
globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}  />
}
