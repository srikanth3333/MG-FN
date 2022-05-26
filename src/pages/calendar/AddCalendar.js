import React from 'react';

function AddCalendar() {
  return (
      <>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="">Employee Name</label>
                            <input type="text" placeholder="Employee name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Agenda</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">From Date</label>
                            <input type="date" placeholder="employee name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">To Date</label>
                            <input type="date" placeholder="employee name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Team</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Reason</label>
                            <textarea name="" placeholder="Enter reason"className="form-control" id="" cols="10" rows="3"></textarea>
                        </div>
                        <div className="d-flex justify-content-around">
                            <button className="btn btn-outline-danger py-0 px-4">Cancel</button>
                            <button className="btn btn-primary py-1 px-4">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </>
  );
}

export default AddCalendar;
