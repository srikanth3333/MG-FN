import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import {getUser,verifyOtp} from "../../redux/auth/userSlice"

function Login() {

  const [email,setEmail] = useState('')
  const [otp,setOtp] = useState('')

  let user = useSelector(state => state.auth)

  let dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault()
    if(!email) {
      return alert("Below fields cannot be empty")
    }
    dispatch(getUser({email:email}))
  }

  const handleOtp = (e) => {
    e.preventDefault()
    
    if(!otp) {
      return alert("Below fields cannot be empty")
    }
    dispatch(verifyOtp({email:user.email,otp:otp}))
  }

  return (
      <section className="login">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                  <img src="Image.svg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6">
                  <h2>Welcome!</h2>
                  {
                  user.otpView == true
                  ?
                  <form onSubmit={handleOtp}>
                      <div className="form-group">
                        <label htmlFor="">Enter Otp</label>
                        <input type="text" value={otp} className="form-control m-0" placeholder="Enter your otp" onChange={(e) => setOtp(e.target.value)} />
                      </div>
                      <div className="form-group d-grid gap-2 col-9">
                        <button type="submit" disabled={user.loading} className="btn btn-primary">
                          {
                            user.loading
                            ?
                              <span class="spinner-border spinner-border-lg" role="status" aria-hidden="true"></span>
                            :
                              'Sign In'
                          }
                        </button>
                      </div>
                  </form>
                  :
                  <form onSubmit={handleLogin}>
                      <div className="form-group">
                        <label htmlFor="">Email Address</label>
                        <input type="text" value={email} className="form-control m-0" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div className="form-group d-grid gap-2 col-9">
                        <button type="submit" disabled={user.loading} className="btn btn-primary">
                          {
                            user.loading
                            ?
                              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            :
                              'Sign In'
                          }
                        </button>
                      </div>
                  </form>
                }
              </div>
            </div>
          </div>
      </section>
  );
}

export default Login;
