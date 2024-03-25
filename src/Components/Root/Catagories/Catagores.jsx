import CatragoriList from "../Catragori List/CatragoriList";



const Catagores = () => {
    return (
        <>
        <div className="w-full mx-aut0 flex flex-col item-center text-center jusify-center">
            <h1 className="text-3xl ">Job Category List</h1>
            <p className="w-full"> Explore thousands of job opportunities with all <br />the information you need. Its your future</p>
           
        </div>
        <div>
           <CatragoriList></CatragoriList>
        </div>
        </>
    
    );
};

export default Catagores;