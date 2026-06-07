import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import React from 'react'
import {GiCancel} from "react-icons/gi"
export default function DialogVideo({open,handleClose,videos,title}:{open:boolean, handleClose:()=>void,videos:any[],title:string}) {
        const officialTrailer = videos?.length ? videos?.find((video: any) => video.type == "Trailer" && video.site == "YouTube") || videos?.find((video: any) => video.type == "Trailer") : null;
  return (
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                role="alertdialog"
                className='w-full p-0'
            >
                <DialogContent className=' relative p-0'>
                    <GiCancel onClick={handleClose} className=' bg-transparent text-2xl text-white absolute left-1 top-1 rounded-2xl cursor-pointer'/>
                    <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${officialTrailer?.key}?autoplay=${open?1:0}`} title={title||''}></iframe>
                </DialogContent>
            </Dialog>
  )
}
