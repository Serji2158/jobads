import Head from 'next/head'
import s from '../../styles/Jobcard.module.scss'
// import { mocdata } from "../../data"
import PaginatedItems from '../../components/PaginatedItems'
import { FC } from 'react'
import { jobcardType } from '../../types'

declare const process : {
  env: {
    NEXT_PUBLIC_BASE_URL: string
    NEXT_PUBLIC_BEARER_TOKEN: string
  }
}

// export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN;

export const getStaticProps = async () => {
  
  const response = await fetch("https://api.json-generator.com/templates/ZM1r0eic3XEy/data",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })

  const data = await response.json();
  console.log(data);
  if (!data) {
    return {
      notFound: true
    }
  }

  // const data = mocdata
  
  return {
    props: { jobads: data }
  }
}

type JobcardDetailsProps = {
  jobads: jobcardType[];
}
const Home: FC<JobcardDetailsProps> = ({ jobads }) => {

  return (
    <div className={s.container}>
      <Head>
        <title>Jobs List</title>
        <meta name="description" content="" />
      </Head>
      <PaginatedItems
        joblistdata={jobads}
        itemsPerPage={4}
      />
    </div>
  )
}

export default Home