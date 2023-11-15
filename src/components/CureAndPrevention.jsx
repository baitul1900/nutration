/* eslint-disable no-undef */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';

const CureAndPrevention = () => {
    const [issues, setIssues] = useState([]);

    const [resolve, setResolve] = useState([])

    
  useEffect(() => {
    // Fetch data using Axios
    axios.get('/public/data.json')
      .then(response => {
        setIssues(response.data.issues);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  useEffect(() => {
      axios.get('/public/data.json')
        .then(reposne => {
            setResolve(reposne.data.resolve)
        })
        .catch(error => {
            console.error('Error fetching data:', error)
        })
  }, [])


    return (
        <section className='abt-sec  about-container pt-5'>
            <h3 className='text-center'> <span><img src="/src/assets/img/lineicon-left.svg" alt="" /></span>  অপুষ্টির কারণে সমস্যা ও করণীয় সমূহ   <span><img src="/src/assets/img/line-icon.svg" alt="" /></span></h3>
      
                <div className="container nutration-container">
                    <div className="row justify-content-center align-items-start">

                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <h5 className='text-end problems'> সমস্যাসমূহ : </h5>
                            <ul className='list-group text-end'>
                                {issues.map(issue => (
                                    <ul className="list-group list-group-horizontal justify-content-end" key={issue.id}>
                                        <li className="list-group-item " >{issue.description}</li>
                                        <li className="list-group-item"><img src="/src/assets/img/thik-mark.svg" className='img-fluid svg-thik' alt="" /></li>
                                    </ul>
                                ))}
                            </ul>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <img src="/src/assets/img/opusty.png" className='img-fluid' alt="image" />
                        </div>



                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <h5 className='text-start problems'>পুষ্টিতে ফিরতে করণীয় : </h5>
                            <ul className='list-group text-start'>
                                {resolve.map(issue => (
                                    <ul className="list-group list-group-horizontal justify-content-start" key={issue.id}>
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

export default CureAndPrevention;