import Image from 'next/image'
import Link from 'next/link'
import { Bookmark, Location, StarDark } from './svg'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import {jobcardType} from "../types"
import s from '../styles/Jobcard.module.scss'

dayjs.extend(relativeTime)


type Props = {
  joblist: jobcardType[];
}

const Jobcard = ({ joblist }: Props) => {

  return (
      <ul className={s.listWrapper}>
        {joblist && joblist.map(jobitem => (
          <li className={s.cardWrapper} key={jobitem.id}>
            <Link href={`/jobs/${jobitem.id}`} className={s.link}>
              <div className={s.logo}>
                <Image
                  src="/hospital.png"
                  alt="picture of logo"
                  width={80}
                  height={80}
                  className={s.image}
                />
                <div className={s.desc}>
                  <h2 className={s.title}>{jobitem.title}</h2>
                  <p className={s.subTitle}>Department name •  {jobitem.name}</p>
                  <div className={s.location}>
                    <Location className={s.locationIcon}/>                    
                    <p className={s.city}>{jobitem.address}</p>
                  </div>
                </div>
              </div>
              <div className={s.info}>             
                <div className={s.rating}>
                  <StarDark className={s.starIcon}/>
                  <StarDark className={s.starIcon}/>
                  <StarDark className={s.starIcon}/>
                  <StarDark className={s.starIcon}/>
                  <StarDark className={s.starIcon}/>
                </div>
                <div className={s.right}>
                  <Bookmark className={s.bookmarkIcon}/>
                  <p className={s.date}>Posted {dayjs(jobitem.createdAt).fromNow()}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul> 
  )
};

  export default Jobcard;