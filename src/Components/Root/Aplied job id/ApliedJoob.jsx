import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getAplicationstore } from "../../../Utility/localStore";


const ApliedJoob = () => {
    const aplied =useLoaderData()
    useEffect(()=>{
        const storeJobId=getAplicationstore()
    },[])
    return (
        <div>
            <h1>aplied id</h1>
        </div>
    );
};

export default ApliedJoob;