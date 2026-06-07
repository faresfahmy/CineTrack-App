import React from 'react'

export default function Empty({title,className}:{title:string,className?:string}) {
  return (
    <div className={`${className||''} flex items-center justify-center`}>
        <h1 className="text-gray-200 text-2xl">{title}</h1>
    </div>
  )
}
