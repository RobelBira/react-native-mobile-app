import { useState,useEffect } from "react";

import axios from "axios";


const useFetch=(endpoint,query)=>{
  const [data,setData]=useState([])
  const [isLoading,setIsLoading]=useState(false)
  const [error,setError]= useState(null)
  
  
  
  
  
  // const axios = require('axios');
const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  headers: {
    'X-RapidAPI-Key': 'ef282b4fddmsh2af7c733a5b2a28p138757jsna05e2f063688',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  },
  params: {...query},
};

const fetchData= async ()=>{
  setIsLoading(true)
  try {
    const response = await axios.request(options);
    setData(response.data.data);
    setIsLoading(false)
  } catch (error) {
    setError(error);
    alert('there is an error')
  }finally{
    setIsLoading(false)
  }
}


useEffect(()=>{
  fetchData()
},[])

const refetch =()=>{
  setIsLoading(true)
  fetchData()
}
return {data,isLoading,error,refetch}
};


export default useFetch


