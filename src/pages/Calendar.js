import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarView } from '../components/CalendarView';

function Calendar() {
  return (
      <>
        <div className="row mb-4 align-items-center">
            <div className="col-lg-4">
                <div className="card rounded">
                    <div className="card-body p-1">
                        <div className="d-flex align-items-center justify-content-center">
                            <h6 className="me-3 mb-0">Show Agenda</h6>
                            <div className="box">
                                <div className="d-flex justify-content-evenly align-items-center">
                                    <div className="box-item text-center">
                                        <h4>All</h4>
                                    </div>
                                    <div className="box-item text-center box-item-active">
                                        <h4>Absent</h4>
                                    </div>
                                    <div className="box-item text-center">
                                        <h4>Leave</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="d-flex justify-content-end align-items-center">
                    <div class="dropdown me-4">
                        <a class="btn-dropdown dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            All Department
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div class="dropdown me-4">
                        <a class="btn-dropdown dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            All Member
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div>
                        <Link to="/addCalendar" className="text-white btn btn-primary px-4 py-1">Add Event</Link>
                    </div>
                </div>
            </div>
        </div>
        <CalendarView />
      </>
  )
}

export default Calendar;
