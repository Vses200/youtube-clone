import React from 'react';
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { Box } from '@mui/material';
import {Videos,ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetail,setChannelDetail] = useState(null);
  const [videos,setVideos] = useState([]);

  console.log(channelDetail,videos);
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items));
  },[id]  )
   

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background: 'radial-gradient(circle, rgba(126,144,238,1) 29%, rgba(70,252,149,0.9868989832261029) 100%)',
        zIndex:10,
        height:'300px'}} />

      <ChannelCard channelDetail={channelDetail}  marginTop='-93px' style={{zIndex:12}}/>
      
        </Box>
        <Box display="flex" p="2">
          <Box sx={{mr:{sm:'100px'}}}/>
            <Videos videos={videos}/>
          
        </Box>
    </Box>
  )
}

export default ChannelDetail