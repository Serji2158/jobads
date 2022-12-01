import Image from 'next/image'
import Link from 'next/link'
import { FC } from "react"
import Circle from './Circle'
import Googlemap from './Map'
import { ArrowBack, Bookmark, Location, Share, Star } from './svg'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import s from '../styles/JobcardDetails.module.scss'
import { jobcardType } from '../types'

dayjs.extend(relativeTime)

type JobcardDetailsProps = {
jobdetaile: jobcardType
}

const JobcardDetails:FC<JobcardDetailsProps> = ({ jobdetaile }) => {

  const jobdescription = jobdetaile.description.split("\n ")[1]
  const responsobilities = jobdetaile.description.split("\n ")[4]
  const benefits = (jobdetaile.description.split("\n\t ")[1]).split(".", 3)
  const location = jobdetaile.location
  const salary = jobdetaile.salary;
  const optimizedSalary = salary.replaceAll("k", " 000")
  const postedDate = dayjs(jobdetaile.createdAt).fromNow()
  
  return (
    <>
    <div className={s.wrapper}>
      <div className={s.details}>
        <div className={s.head}>
          <h2 className={s.titleLable}>Job Details</h2>
          <div className={s.frames}>
            <button className={s.btnIcon}>
              <Bookmark className={s.bookmarkIcon} />
              <Star className={s.starIcon} />              
            </button>
            <span className={s.frameText}>Save to my list</span>
            <button className={s.btnIcon}>
              <Share className={s.shareIcon}/>
            </button>
            <span className={s.frameText}>Share</span>
          </div>          
        </div>
        <button className={s.btn1}>Apply now</button>
        <section className={s.description}>
          <div className={s.titleHead}>
            <h1 className={s.title}>{jobdetaile.title}</h1>
            <div className={s.middle}>
              <div className={s.paymentCondition}>
              <span className={s.salary}>	
                &#8364; {optimizedSalary}
              </span>
              <span className={s.brutto}>Brutto, per year</span>
              </div>
              <div className={s.dateinfo}>
              <p className={s.postedDate}>Posted {postedDate}</p>
              </div>
            </div>
          </div>
          <p className={s.postedDateDescktop}>Posted {postedDate}</p>
          <section className={s.jobDescription}>{jobdescription}</section>
          <h3 className={s.sectionTitle}>Responsobilities</h3>
          <section className={s.jobDescription}>{responsobilities}</section>
          <h3 className={s.sectionTitle}>Compensation & Benefits:</h3>
          <section className={s.benefits}>
            Our physicians enjoy a wide range of benefits, including:
            <ul className={s.benefitsList}>
              {benefits.map(benefit => (
                <li className={s.benefitsBullet} key={benefit}>{benefit}</li>
              ))}              
            </ul>
          </section>          
        </section>   
        <button className={s.btn2}>Apply now</button>
        <h2 className={s.addinfoTitle}>Additional info</h2>
        <section className={s.addinfoSection}>Employment type
          <ul className={s.jobtypeList}>
            {jobdetaile.employment_type.map((type) => (
              <li className={s.jobtypeItem} key={type}>{type}</li>
            ))}
          </ul>          
        </section>
        <section className={s.addinfoSection}>Benefits          
          <ul className={s.benefitList}>
            {jobdetaile.benefits.map((benefit) => (
              <li className={s.benefitItem} key={benefit}>{benefit}</li>
            ))}
          </ul>          
        </section>
        <h2 className={s.addinfoTitle}>Attached images</h2>
        <ul className={s.imagesList}>
          {jobdetaile.pictures.map((picture) => (
            <li className={s.image} key={picture}>
              <Image src={picture} width={200} height={116} objectFit="cover" alt="photo"/>              
            </li>
            ))}          
        </ul>        
      </div>
      <div className={s.contacts}>
        <h2 className={s.contactsTitle}>Contacts</h2>
          <div className={s.top}>
          <Circle backgroundColor="#202336" top="-2vh" left="-10vh" /> 
          <address className={s.contactsDesc}>
            <p className={s.contactName}>Department name. <br />
              {jobdetaile.name}</p>
            <div className={s.Location}>
              <Location />
              <p className={s.address}>{jobdetaile.address}</p>
            </div>
            <ul className={s.contactsList}>
              <li className={s.tel}><a href={`tel:${jobdetaile.phone}`}>{jobdetaile.phone}</a></li>
              <li className={s.mail}><a href={`mailto:${jobdetaile.email}`}>{jobdetaile.email}</a></li>              
            </ul>
          </address>
        </div>
        <div className={s.bottom}>
          <Googlemap location={location} />
        </div>
      </div> 
    </div>
    <Link href="/jobs" >
        <div className={s.btnReturn}>
          <ArrowBack />
          <span>RETURN TO JOB BOARD</span>
        </div>          
      </Link> 
    </>
  )
}

export default JobcardDetails