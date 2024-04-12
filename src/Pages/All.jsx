import React from 'react';
import { Link } from 'react-router-dom';

function FullStack() {
  return (
    <div>
      <Link className="card-link "to="/FullstackDev">
      <div className="card " style={{ width: '18rem' }}>
        <img className="card-img-top" src="https://miro.medium.com/v2/resize:fit:800/1*iLa3E1yYHoYhOloCqQv36Q.png" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Full stack</h5>
          <p className="card-text">A full-stack developer helps build and maintain both the front-end and the back-end of a website.</p>
      </div>
      </div>
      </Link>
      
    </div>
  );
}

function CyberSecurity() {
  return (
    <div>
       <Link  className="card-link "to="/cybersecurity">
       <div className="card " style={{ width: '18rem' }}>
        <img className="card-img-top" src="https://6663efc8bb.clvaw-cdnwnd.com/dd9f2c9a65e08d0763028ae8eeadaab9/200001606-806bb806bc/shutterstock_1916424809.jpeg?ph=6663efc8bb" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">CYBER SECURITY</h5>
          <p className="card-text">Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks</p>
                 </div>
      </div>
       </Link>
      
    </div>
  );
}

function DataScience() {
  return (
    <div>
       <Link className="card-link "to="/datascience">
       <div className="card " style={{ width: '18rem' }}>
        <img className="card-img-top" src="https://www.naukri.com/campus/career-guidance/wp-content/uploads/2023/11/what-is-data-science.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">DATA SCIENCE</h5>
          <p className="card-text">Data science combines math and statistics, specialized programming, advanced analytics, artificial intelligence (AI) and machine learning</p>
          
        </div>
      </div>
       </Link>
      
    </div>
  );
}

export default function All() {
  return (
    <div className='card-each'>
      <FullStack />
      <CyberSecurity />
      <DataScience />
    </div>
  );
}
