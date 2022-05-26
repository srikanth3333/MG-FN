import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import BoxSelect from '../components/BoxSelect';
import AreaChart from '../components/charts/AreaChart';
import BarChart from '../components/charts/BarChart';

const progressList = [
    {
        title:"Total Profiles",
        color:"#9B56FB",
        progress:"76",
        increased:"22"
    },
    {
        title:"Shortlisted Profiles",
        color:"#1FD86B",
        progress:"32",
        increased:"3.90"
    },
    {
        title:"Rejected Profiles",
        color:"#FF4D4F",
        progress:"2",
        increased:"3.90"
    },
    {
        title:"Upcoming Interviews",
        color:"#FEA05A",
        progress:"4",
        increased:"22.13"
    },
]

function Home() {


  

  return (
      <>
            <section className="progress-bars">
                <div className="container">
                    <div className="row">
                        {progressList.map((item) => (
                            <div className="col-lg-3">
                                    <div className="card shadow border-0">
                                        <div className="card-body p-3">
                                            <h6>{item.title}</h6>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <h5 className="progress-num" style={{color: item.color}}>{item.progress}</h5>
                                                </div>
                                                <div style={{height:70,width:70}}>
                                                    <CircularProgressbar value={item.progress} text={`${item.progress}%`} 
                                                        styles={buildStyles({
                                                            textSize: '25px',
                                                            pathTransitionDuration: 0.5,
                                                            pathColor: item.color,
                                                            textColor: item.color,
                                                            trailColor: '#d6d6d6',
                                                            backgroundColor: '#3e98c7',
                                                          })}
                                                    
                                                    />
                                                </div>
                                            </div>
                                            <p className="light">Average increase by {item.increased}%</p>
                                        </div>
                                    </div>
                                </div>
                        ))}
                    </div>
                    <div className="mt-4 row">
                        <div className="col-lg-8">
                            <div className="card bg-white shadow-sm border-0">
                                <div className="card-body p-3 text-center">
                                    <AreaChart />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-6">
                                    <div className="card card bg-white shadow-sm border-0">
                                        <div className="card-body p-3">
                                            <h6>Upcoming Interviews</h6>
                                            <div className="card-box">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <p>Jordan kemly</p>
                                                        <p className="light">UI/UX Designer</p>
                                                    </div>
                                                    <div>
                                                        <p>20/12/2021</p>
                                                        <p>10:00 AM</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-box">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <p>Jordan kemly</p>
                                                        <p className="light">UI/UX Designer</p>
                                                    </div>
                                                    <div>
                                                        <p>20/12/2021</p>
                                                        <p>10:00 AM</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-box">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <p>Jordan kemly</p>
                                                        <p className="light">UI/UX Designer</p>
                                                    </div>
                                                    <div>
                                                        <p>20/12/2021</p>
                                                        <p>10:00 AM</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3 text-center">
                                                <button className="btn btn-primary px-3 py-1">View All</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card card bg-white shadow-sm border-0">
                                        <div className="card-body p-3">
                                            <h6>Upcoming Documentation</h6>
                                            <div className="card-box">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <p>Jordan kemly</p>
                                                        <p className="light">UI/UX Designer</p>
                                                    </div>
                                                    <div>
                                                        <p>20/12/2021</p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-box">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <p>Jordan kemly</p>
                                                        <p className="light">UI/UX Designer</p>
                                                    </div>
                                                    <div>
                                                        <p>20/12/2021</p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-box">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <p>Jordan kemly</p>
                                                        <p className="light">UI/UX Designer</p>
                                                    </div>
                                                    <div>
                                                        <p>20/12/2021</p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3 text-center">
                                                <button className="btn btn-primary px-3 py-1">View All</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box shadow">
                                <div className="d-flex align-items-center">
                                    <BoxSelect />                               
                                </div>
                            </div>
                            <div className="card bg-white shadow-sm border-0">
                                <div className="card-body p-3 text-center">
                                    <BarChart />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
      </>
  );
}

export default Home;
