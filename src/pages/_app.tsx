import "../../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "@components/templates/layout"
// import { useEffect, useState } from "react"
// import { Router } from "next/router"
// import LoadingPage from "@components/organisms/loadingPage"

function MyApp({ Component, pageProps }: AppProps) {
  // const [loading, SetLoading] = useState(false)

  // useEffect(() => {
  //   Router.events.on("routeChangeStart", () => {
  //     SetLoading(true)
  //   })

  //   Router.events.on("routeChangeComplete", () => {
  //     SetLoading(false)
  //   })

  //   Router.events.on("routeChangeError", () => {
  //     SetLoading(false)
  //   })
  // }, [])

  return (
    <Layout>
      {/* {loading ? <LoadingPage /> : <Component {...pageProps} />} */}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
