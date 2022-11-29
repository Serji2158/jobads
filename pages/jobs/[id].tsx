import Head from 'next/head'
import JobcardDetails from '../../components/JobcardDetails'
import { mocdata } from '../../data'
import {jobcardType} from '../../types'
import s from '../../styles/JobcardDetails.module.css'

export const getStaticPaths = async () => {
  // const response = await fetch(
  //   "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu",
  //   )
  // const data = await response.json();

  const data = mocdata;
console.log(data);
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
  // const response = await fetch(
  //   "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu",
  //   )
  // const data = await response.json();
  // console.log(data);

  const data = mocdata;
  const job = data.filter((item) => item.id === id)[0]
  console.log(job); 

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