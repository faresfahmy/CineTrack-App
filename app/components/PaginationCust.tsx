"use client";
import React from 'react'
import { useState } from 'react'
import {
  Pagination,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationContent
} from "@/components/ui/pagination"
export default function PaginationCustom({ page, onPageChange, pagesCount }: { page: number, onPageChange: (pageNew: number) => void, pagesCount: number }) {
  const [countPage, setCounttPage] = useState<number[]>([page, page+1, page+2])
  function handlePagePlus() {
    setCounttPage([countPage[0] + 1, countPage[1] + 1, countPage[2] + 1])
    onPageChange(page + 1)
  }
  function handlePageMinus() {
    setCounttPage([countPage[0] - 1, countPage[1] - 1, countPage[2] - 1])
    onPageChange(page - 1)
  }
  return (
    <Pagination>
      <PaginationContent>
        {page == 1 ? null : (
          <PaginationItem className='text-gray-200 text-1xl mr-3 cursor-pointer'>
            <PaginationPrevious onClick={() => handlePageMinus()} />
          </PaginationItem>
        )
        }

        {countPage.map((page) => (
          <PaginationItem key={page} className={'bg-rose-700 px-2 py-2 rounded-4xl text-rose-200 cursor-pointer'}>
            <PaginationLink onClick={() => {
              onPageChange(page)
            }}>{page}</PaginationLink>
          </PaginationItem>
        )
        )
        }
        {/* {
          pagesCount === page ? null : (
            <PaginationItem className={' text-gray-200'}>
              <PaginationLink onClick={() => {
                onPageChange(pagesCount)
                setCounttPage([pagesCount - 2, pagesCount - 1, pagesCount])
              }}>{pagesCount}</PaginationLink>
            </PaginationItem>
          )
        } */}

        {pagesCount === page ? null : (
          <PaginationItem className='text-gray-200 text-1xl ml-3 cursor-pointer'>
            <PaginationNext onClick={() => handlePagePlus()} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}
