import React, { FC, useEffect, useState } from 'react';
import Jobcard from "./Jobcard"
import ReactPaginate from 'react-paginate';
import s from '../styles/Pagination.module.scss'
import { jobcardType } from '../types'


interface IPaginatedItems {
  joblistdata: jobcardType[];
  itemsPerPage: number;
}

const PaginatedItems:FC<IPaginatedItems> = ({ joblistdata, itemsPerPage }) => {
  const [currentItems, setCurrentItems] = useState<jobcardType[]>([])
  const [pageCount, setPageCount] = useState<number>(0)
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState<number>(0);


  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(joblistdata.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(joblistdata.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, joblistdata])


  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number; }) => {
    const newOffset = (event.selected * itemsPerPage) % joblistdata.length;
    setItemOffset(newOffset);
  };
  return (
    <>
    <Jobcard joblist={currentItems} />
    <ReactPaginate
        breakLabel="..."
        breakLinkClassName={s.pagebreak}
        nextLabel=">"
        nextLinkClassName={s.pagenext}
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        previousLinkClassName={s.pageprevious}
        containerClassName={s.pagination}
        pageLinkClassName={s.pagenum}        
        activeLinkClassName={s.active}
      />
    </>
  )
}

export default PaginatedItems;