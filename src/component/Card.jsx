import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";



export default function MediaCard({src,text,title,Price,id ,btn=true}) {
    const navigate = useNavigate()
    function single(){
     navigate(`/singleproduct/${id}`)
    }
  return (
    <Card sx={{ maxWidth: 300 ,marginTop:5  }}>
      <CardMedia 
        sx = {{height :"250px",width :"250px" }}
        image={src}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title.slice(0,70)}...
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {text.slice(0,150)}...
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          $ :{Price}
        </Typography>
      </CardContent>
      <CardActions>
        {btn ?       <Button variant="contained" onClick={single}>Show More</Button>:null
}

       
      </CardActions>
    </Card>
  );
}
