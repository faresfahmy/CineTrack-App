"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function RatingComponent({rate,label,className}:{rate:number,label?:string,className?:string}) {

  return (
    <Box className={className||''} sx={{ '& > legend': { mt: 2 } }}>
      {label && <Typography component="legend">{label}</Typography>}
      <Rating
        name="simple-controlled"
        value={rate}
      />
    </Box>
  );
}