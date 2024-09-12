// import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect,useState } from 'react'
import MediaCard from '../component/Card'
import {useParams} from 'react-router-dom'

const Singleproduct = () => {
  
    const [item,setitem]= useState()

const param = useParams()

useEffect(()=>{
    axios(`https://fakestoreapi.com/products/${param.id}`)
    .then((res)=>setitem(res.data))
    .catch((err)=>console.log(err)
    );
    
},[])

console.log(item);

  return (
    <>
    <Typography className="text-center m-5" variant='h3'>
      Product
    </Typography>
    <Box className='container d-flex justify-content-around flex-wrap '>
   { item ? 
   
        <MediaCard key={item.id} src={item.image}  title={item.title} text={item.description} Price={item.price} id={item.id}  btn ={false}/>
    : <CircularProgress sx={{fontSize : "3rem"}} />
}

</Box>
    </>
    
  )
}


export default Singleproduct