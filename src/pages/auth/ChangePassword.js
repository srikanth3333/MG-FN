import React from 'react';
import { Link } from 'react-router-dom';

function ChangePassword() {
  return (
      <section className="login">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                  <img src="Image3.svg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6">
                  <h2>Change Password</h2>
                  <form className="pe-5">
                    <div className="form-group">
                      <label htmlFor="">New Password</label>
                      <input type="password" className="form-control" placeholder="enter password" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Confirm Password</label>
                      <input type="password" className="form-control" placeholder="confirm password" />
                    </div>
                    <div className="d-flex justify-content-between" style={{width:'75%'}}>
                        <Link to="/" className="btn btn-outline-primary d-block" style={{width:'48%'}}>Cancel</Link>
                        <button className="btn btn-primary d-block" style={{width:'48%'}}>Submit</button>
                    </div>
                  </form>
              </div>
            </div>
          </div>
      </section>
  );
}

export default ChangePassword;
