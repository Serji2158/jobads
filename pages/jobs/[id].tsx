import Head from 'next/head'
import JobcardDetails from '../../components/JobcardDetails'
// import { mocdata } from '../../data'
import {jobcardType} from '../../types'
import s from '../../styles/JobcardDetails.module.scss'

const BASE_URL = "https://api.json-generator.com/templates/ZM1r0eic3XEy/data"
const TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN;

export const getStaticPaths = async () => {
 
  const response = await fetch(BASE_URL,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
  const data = await response.json();

  // const data = mocdata;

  const paths = data.map((item) => {
    return {
      params: {id: item.id}
    }
  })
  console.log(paths);
  
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: { params: { id: any } }) => {
  console.log(context);
  const id  = context.params.id;

  const response = await fetch(BASE_URL,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
  
  const data = await response.json();
 

  // const data = mocdata;
  const job = data.filter((item) => item.id === id)[0]


  return {
    props: { job }
  }
}

type Props = {
  job: jobcardType
}

const Job =({job}:Props) => {
  return (
    <div className={s.container}>
      <Head>
        <title>Jobs List</title>
        <meta name="description" content="" />        
      </Head>
     <JobcardDetails jobdetaile={job} />
    </div>
  )
}

export default Job