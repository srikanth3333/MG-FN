import React from 'react';
import { Link } from 'react-router-dom';

function ForgetPassword() {
  return (
      <section className="login">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                  <img src="Image2.svg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6">
                  <h2>Forgot Password ?</h2>
                  <form className="pe-5">
                    <div className="form-group">
                      <h6 className="mb-4">We have sent an OTP to your Email ID </h6>
                      <label htmlFor="">Please enter OTP</label>
                      <input type="number" className="form-control" placeholder="Please enter OTP" />
                    </div>
                    <div className="form-group d-grid gap-2 col-9">
                      <button className="btn btn-primary">Submit</button>
                    </div>
                    <div className="" style={{width:'75%'}}>
                      <p>Don’t receive OTP? <Link className="blue-a" to="/">Resend OTP</Link></p>
                      <p>Did you remembered your password/ <Link className="blue-a" to="/">Try logging in</Link></p>
                    </div>
                  </form>
              </div>
            </div>
          </div>
      </section>
  );
}

export default ForgetPassword;
