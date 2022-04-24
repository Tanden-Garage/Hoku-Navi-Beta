import "../styles/globals.css"
import { ThemeProvider } from "next-themes"

import type { AppPropsWithLayout } from "next/app"

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
