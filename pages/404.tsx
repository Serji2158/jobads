import Link from "next/link"
import Head from "next/head"
import React from "react"
import { useEffect } from "react"
import { useRouter } from "next/router"

import s from "../styles/404.module.scss"


const Error = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }, [router])
  
  return (
    <div className={s.container}>
      <Head>
        <title>Error Page</title>
        <meta name="description" content="Error page" />
      </Head>
        <h1 className={s.title}>404</h1>
          <h2 className={s.text}>
        Something went wrong...!
        </h2>
      </div>    
  )
}


export default Error