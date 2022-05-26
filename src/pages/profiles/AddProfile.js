import React from 'react'

function AddProfile() {
  return (
    <section className="profiles">
            <div className="container">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div>
                        <h5>Add Profile</h5>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className='bg-white mt-4 p-4'>
                    <form className="row justify-content-between">
                        <div className="col-lg-6">
                            <label htmlFor="">Vendor Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-lg-6">
                                <label htmlFor="">Notice Period</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Immediate
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked /> 
                                    <label class="form-check-label" for="flexCheckChecked">
                                        15 Days
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked /> 
                                    <label class="form-check-label" for="flexCheckChecked">
                                        30 Days
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked /> 
                                    <label class="form-check-label" for="flexCheckChecked">
                                        45 days
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked /> 
                                    <label class="form-check-label" for="flexCheckChecked">
                                        60 Days
                                    </label>
                                </div>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">Candidate Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-lg-6">
                            {/* <label htmlFor="">Telephonic Round Date</label> */}
                            {/* <input type="text" className="form-control" /> */}
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">Contact No</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">Telephonic Round Date</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">Email ID</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">Expected CTC</label>
                            <div className="d-flex flex-wrap">
                                <select class="form-select w-50" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <select class="form-select w-50" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">Candidate Skill set </label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">Resume</label>
                            <input type="file" className="form-control" />
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">Total Exp </label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">RMG SPOC Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">Relevant Exp </label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">RMG Email ID</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">Current Company </label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">Date of submission</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">Current Work Loaction </label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-lg-6">
                            {/* <label htmlFor="">Vendor Name</label> */}
                            {/* <input type="text" className="form-control" /> */}
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">Preffered Work Location  </label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex flex-wrap justify-content-center">
                                <button className=" btn btn-outline-secondary py-1">
                                    Cancel
                                </button>
                                <button className="btn btn-primary py-1 ms-5">
                                    Upload
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">Gap(If any)</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        </section>
  )
}

export default AddProfile