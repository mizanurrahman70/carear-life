import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveApplication } from "../../../Utility/localStore";

const JobDtl = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(jobItem => jobItem.id === idInt); // Changed the variable name in the .find() callback
    const { logo, job_title, company_name, remote_or_onsite, location, job_description, salary } = job;
  const btnHandle=()=>{
    saveApplication(id)
    toast('You have aplied sucessfuly')
  }
    return (
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{job_title}</h2>
                <p className="text-2xl">{company_name}</p>
                <p>{job_description}</p>
                <div className="card-actions justify-end">
                    <button onClick={btnHandle} className="btn btn-primary">Accept</button>
                 <Link to='/'>  <button className="btn btn-ghost">Deny</button></Link>
                <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default JobDtl;
