import React from 'react'
import Heading from './default/Heading'
import { v4 as  ui4} from 'uuid'
export default function ProductionCompanies({detailsProductionCompanies,title,className}:{detailsProductionCompanies:any,title?:string,className?:string}) {
    return (
        <div>
            {detailsProductionCompanies?.length ?
                (<div className={`${className||''} relative w-full mt-16`}>
                    <Heading className='text-rose-400 text-2xl font-semibold' title={title||''}/>
                    <div className='flex gap-5  w-full relative overflow-x-auto scroll mt-7'>
                        {detailsProductionCompanies.map((company: any) => {
                            return company?.logo_path ? (
                                <div key={ui4()} className='flex flex-col gap-1 items-center mt-1 py-5'>
                                    <div className={`w-[100px] h-[50px] bg-gray-500 rounded-2xl p-3`}>
                                        <img src={`https://image.tmdb.org/t/p/original/${company?.logo_path}`} className='object-contain w-full h-full' alt={company.name} />
                                    </div>
                                    <h5 className='font-semibold text-gray-400 text-[10px] text-center w-[100px] text-center'>{company?.name}</h5>
                                </div>
                            ) : null
                        }
                        )}
                    </div>

                </div>)
                : null
            }
        </div>
    )
}
