import Head from 'next/head'
import s from '../../styles/Jobcard.module.css'
import { mocdata } from "../../data"
import PaginatedItems from '../../components/PaginatedItems'
import { FC } from 'react'
import { jobcardType } from '../../types'



export const getStaticProps = async () => {
  // const response = await fetch(
  //   "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu",
  //   )
  // const data = await response.json();
  // console.log(data);
  // if (!data) {
  //   return {
  //     notFound: true
  //   }
  // }

  const data = mocdata
  
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