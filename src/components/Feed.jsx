
import { useState,useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import {Sidebar, Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {

  const [selectedCategory,setSelectedCategory] = useState('New');
  const [videos,setVideos] = useState([]);
  useEffect(()=> {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>setVideos(data.items));
  },[selectedCategory]);

  return (
    <Stack sx={{ flexDirection: {sx:
    "column", md:"row"}}}>
    
    <Box sx={{height:{md:'94vh'}}}>
      
      <Sidebar 
        selectedCategory = {selectedCategory}
        setSelectedCategory = {setSelectedCategory}
        />
      
    </Box>

    <Box p={2}  sx={{ height:'94vh',flex:2,overflowY:'scroll'}}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
        {selectedCategory} <span style={{
          color:'#F31503'
        }}> videos</span>
      </Typography>

      <Videos videos={videos} />
      <Typography className='copyright' textAlign='center'  variant='body2' sx={{mt:1.5,mb:1.5, color:"#fff"}}>
        Copyright 2022 Vishesh Media
      </Typography>
    </Box>

    

    </Stack>
    
  );
}

export default Feed