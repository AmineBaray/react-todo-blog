import { useState, useEffect } from "react";

function useFetch (url) {
    const [data, setData] = useState(null);
    const [Pending, setPending] = useState(true);
    const [error , setError] = useState(null);

useEffect(()=>{
    setTimeout(()=>{
      fetch(url)
        .then(res => {
          if(!res.ok){
              throw Error("Could not fetch the data for that resource check the URL !")
          }
          return res.json();
        })
        .then(data =>{
          setData(data);
          setPending(false);
          setError(null);
        })
        .catch(err => {
            setPending(false);
            setError(err.message);
        })
    },1000);
    
  },[url]);
  return {data , Pending , error};
}
export default useFetch