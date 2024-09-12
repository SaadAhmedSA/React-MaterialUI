import { Box, CircularProgress, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect,useState } from 'react'
import MediaCard from '../component/Card'

const Product = () => {

    const [data,setdata] = useState(null)

useEffect(()=>{
    axios("https://fakestoreapi.com/products")
    .then((res)=>setdata(res.data))
    .catch((err)=>console.log(err)
    );
    console.log(data);
    
},[])


  return (
    <>
    <Typography className="text-center m-5" variant='h3'>
      Product
    </Typography>
    <Box className='container d-flex justify-content-around flex-wrap '>
   { data ? data.map((item)=>{
    return(
        <MediaCard key={item.id} src={item.image}  title={item.title} text={item.description} Price={item.price} id={item.id}/>
    )
   }): <CircularProgress sx={{fontSize : "3rem"}} />}

</Box>
    </>
    
  )
}

export default Product