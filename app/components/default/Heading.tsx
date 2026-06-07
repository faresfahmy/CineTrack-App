import React from 'react'

export default function Heading({className,title}:{className?:string,title:string}) {
  return (
    <h1 className={className||""}>{title}</h1>
  )
}
