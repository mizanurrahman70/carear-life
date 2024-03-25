import { json } from "react-router-dom"

const getAplicationstore=()=>{
    const storeedAplication=localStorage.getItem('job');
    if(storeedAplication){
        return json.parse(storeedAplication)
    }
    else{
        return []
    }
}
const saveApplication =id=>{
    const storeedAplication=getAplicationstore()
    const exsist=storeedAplication.find(jobId=>jobId===id)
    if(!exsist){
        storeedAplication.push(id)
        localStorage.setItem('job',JSON.stringify(storeedAplication))
    }

}
export{saveApplication,getAplicationstore}