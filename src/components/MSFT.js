import React,{useState} from 'react';
import Card from 'react-card-component';
import axios from 'axios';

function MSFT() {
    const [data,setData]=useState([]);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '184f13f6c3msh81ae48e298919a3p16bc7ejsna4a53e091038',
            'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
        }
    };
    
    fetch('https://yh-finance.p.rapidapi.com/stock/v3/get-historical-data?symbol=AMRN&region=US', options)
        .then(response => response.json())
        .then(response => 
            console.log(response)
            //setData(response);
            )
        .catch(err => console.error(err));
    

  return (
    <>
        
                
    </>
  )
}


export default MSFT