import { useEffect, useState } from "react";
import Job from "../Job/Job";


const CatragoriList = () => {
   const [job,setJob]=useState([])
   const [dataLangth,setDataLenght]=useState(4)
   useEffect(()=>{
    fetch('jobs.json')
    .then(res=>res.json())
    .then(data=>setJob(data))
   },[])
    return (
        <>
        <div className="grid grid-cols-2 mx-auto space-y-5 ml-32">
           {
            job.slice(0,dataLangth).map((job,l)=><Job key={l} job={job}></Job>)
           }
        </div>
        <div className={dataLangth===job.length && 'hidden'}><button onClick={()=>setDataLenght(job.length)} className="btn primary w-26 flex justify-center mx-auto">Show all</button></div>
        </>
    );
};

export default CatragoriList;