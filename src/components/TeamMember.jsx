import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TeamMember = () => {

    const teamMembers = [
        {
          imgSrc: '/src/assets/img/team-member.jpg',
          name: 'John Doe',
          designation: 'Web Developer'
        },
        {
          imgSrc: '/src/assets/img/team-member.jpg',
          name: 'Jane Smith',
          designation: 'UI/UX Designer'
        },
        {
            imgSrc: '/src/assets/img/team-member.jpg',
            name: 'Jane Smith',
            designation: ' Designer'
          },
          {
            imgSrc: '/src/assets/img/team-member.jpg',
            name: 'Jane Smith',
            designation: ' Designer'
          },
          {
            imgSrc: '/src/assets/img/team-member.jpg',
            name: 'Jane Smith',
            designation: ' Designer'
          },
          {
            imgSrc: '/src/assets/img/team-member.jpg',
            name: 'Jane Smith',
            designation: ' Designer'
          },
        // Add more team members as needed
      ];


      const options = {
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      };
    



    return (
      <div className='container about-container'>
      <h3 className='text-center'>
        <span><img src="/src/assets/img/lineicon-left.svg" alt="" /></span>
        আমাদের স্বেচ্ছাসেবী
        <span><img src="/src/assets/img/line-icon.svg" alt="" /></span>
      </h3>
      <div className="row g-0">
        <div className="col">
        <OwlCarousel className='owl-theme' {...options}>
      {teamMembers.map((member, index) => (
        <div key={index} className='item'>
          <div className='team-member'>
            <img src={member.imgSrc} alt={`Team Member ${index + 1}`} className='img-fluid team-images'/>
            <div className='overlay'>
              <h5>{member.name}</h5>
              <p>{member.designation}</p>
            </div>
          </div>
        </div>
      ))}
    </OwlCarousel>
        </div>
      </div>
    </div>
    );
};

export default TeamMember;