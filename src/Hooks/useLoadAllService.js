import { useEffect, useState } from "react";


const useLoadAllService=()=>{

    const [services, setServices]=useState([]);
    useEffect(()=>{

        fetch('http://localhost:5000/service/all')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setServices(data)
        })


    },[]);

    return{
        services, 
        setServices
    }
  
}


export default useLoadAllService;