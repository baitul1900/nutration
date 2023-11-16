import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CurePreventionOtipusti = () => {

    const [issue , setIssues] = useState([]);

    const [resolve, setResolve] = useState([]);


    useEffect(()=> {

        // Fetch data using Axios
        axios.get('/public/data.json')
        .then(response => {
            setIssues(response.data.issueOtiPusti);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, [])

    useEffect(()=> {

        // Fetch data using Axios
        axios.get('/public/data.json')
        .then(response => {
            setResolve(response.data.resolveOtipusti);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, [])



    return (
        <section className='abt-sec  about-container pt-5'>
            <h3 className='text-center'> <span><img src="/src/assets/img/lineicon-left.svg" alt="" /></span> অতিপুষ্টির কারণে সমস্যা ও করণীয় সমূহ  <span><img src="/src/assets/img/line-icon.svg" alt="" /></span></h3>
      
                <div className="container nutration-container">
                    <div className="row justify-content-center align-items-center">

                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <h5 className='text-end problems'> সমস্যাসমূহ : </h5>
                            <ul className='list-group text-end'>
                                {issue.map((issues,i) => (
                                    <ul className="list-group list-group-horizontal justify-content-sm-start justify-content-md-start justify-content-end" key={i}>
                                        <li className="list-group-item d-none d-md-block d-sm-block"><img src="/src/assets/img/thik-mark.svg" className='img-fluid svg-thik' alt="" /></li>
                                        <li className="list-group-item " >{issues.content}</li>
                                        <li className="list-group-item d-block d-sm-none d-md-none"><img src="/src/assets/img/thik-mark.svg" className='img-fluid svg-thik' alt="" /></li>
                                    </ul>
                                ))}
                            </ul>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <img src="/src/assets/img/otipusty.png" className='img-fluid' alt="image" />
                        </div>



                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <h5 className='text-start problems'>পুষ্টিতে ফিরতে করণীয় : </h5>
                            <ul className='list-group text-start'>
                                {resolve.map((issue, i) => (
                                    <ul className="list-group list-group-horizontal justify-content-start" key={i}>
                                        <li className="list-group-item image-list"><img src="/src/assets/img/thik-mark.svg" className='img-fluid svg-thik' alt="" /></li>
                                        <li className="list-group-item " >{issue.content}</li>
                                    </ul>
                                ))}
                            </ul>
                        </div>            


                    </div>
                    
                </div>
        </section>   
    );
};

export default CurePreventionOtipusti;