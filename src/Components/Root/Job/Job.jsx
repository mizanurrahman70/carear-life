import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
  
    const {id, logo, job_title, company_name, remote_or_onsite,
        location,
        job_description,salary

    } = job
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {job_title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{company_name}</p>
                <p>{
                    job_description
                }</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{
                        location
                    }</div>
                    <div className="badge badge-outline">salary <span>{salary}</span></div>
                </div>
            
               <div>
               <Link to={`/job/${id}`}><button className="btn btn-primary">More delatels</button></Link>
               </div>
            </div>
        </div>
    );
};

export default Job;