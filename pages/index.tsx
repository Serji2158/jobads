import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import s from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={s.container}>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Wellcome page" />
      </Head>

        <p className={s.wellcomeText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, asperiores adipisci odio non magnam porro dolor neque delectus recusandae molestiae perferendis pariatur quos ab, provident, reprehenderit facilis ea. Maiores, itaque?
        </p>
        <Link href="/jobs" className={s.link} >
          Vew job list
        </Link>
    </div>
  )
}
