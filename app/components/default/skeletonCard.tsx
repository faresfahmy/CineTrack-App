"use client"

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
export default function skeletonCard({items=4,className}:{items:number,className?:string}) {
  return (
    <>
    {Array.from(new Array(items)).map((_,index)=>(
            <Grid key={index} container wrap="nowrap" className='flex justify-center'>
        <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
            <Skeleton variant="rectangular" width={190} height={250} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
        </Box>
    </Grid>
    
    ))
    }
    </>
  );
}
