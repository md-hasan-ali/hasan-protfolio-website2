import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetail = () => {
    const { projectId } = useParams();
    const [projectDetails, setProjectDetails] = useState([]);
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjectDetails(data))
    }, [])

    const matchProduct = projectDetails.find(project => project?.id === projectId);
    console.log(matchProduct)

    return (
        <div className='mt-5 pt-5'>
            <div className="container">
                <div className="section-title text-center">
                    <h2 className='pb-5'>Projects Details </h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="project-image">
                            <img className='w-100 mb-3' src={matchProduct?.image1} alt="" />
                            <img className='w-100 mb-3' src={matchProduct?.image2} alt="" />
                            <img className='w-100 mb-3' src={matchProduct?.image3} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2><strong>Project Name: </strong>{matchProduct?.name}</h2>
                        <p><strong>Description 1 </strong>{matchProduct?.description}</p>
                        <p><strong>Description 2 </strong>{matchProduct?.description}</p>
                        <p><strong>Description 3 </strong>{matchProduct?.description}</p>
                        <button onClick={() => window.open(matchProduct?.liveWebsite)} className='btn btn-primary ms-2'>Live Website</button>
                        <button onClick={() => window.open(matchProduct?.clientSide)} className='btn btn-success ms-2'>Client Side Code</button>
                        <button onClick={() => window.open(matchProduct?.serverSide)} className='btn btn-danger ms-2'>Server Side Code</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;