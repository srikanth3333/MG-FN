import React from 'react'

function Search() {
  return (
      <section className="search">
        <div className="container">
          <div>
              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                      Advance Search
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                      <div className="row align-items-center">
                          <div className="col-lg-2">
                            <label>Enter keywords</label>
                          </div>
                          <div className="col-lg-10">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-lg-2">
                            <label>All Keywords</label>
                          </div>
                          <div className="col-lg-10">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-lg-2">
                            <label>Total Experience</label>
                          </div>
                          <div className="col-lg-10">
                            <div className="d-flex flex-wrap">
                                <select class="form-select w-50" aria-label="Default select example">
                                    <option selected>from</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <select class="form-select w-50" aria-label="Default select example">
                                    <option selected>to</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <label>Annual CTC</label>
                          </div>
                          <div className="col-lg-10">
                            <div className="d-flex flex-wrap">
                              <input type="text" className="form-control w-50" placeholder="from" />
                              <input type="text" className="form-control w-50" placeholder="to" />
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <label>Current Location</label>
                          </div>
                          <div className="col-lg-10">
                            <input type="text" className="form-control" />
                            <div className="my-2">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                  Preferred Location is Same as Above
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                  Show only those candidates matches exactly ith preferred location
                                </label>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item mt-3">
                  <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                      Employment Details
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                        <div className="row align-items-center">
                            <div className="col-lg-2">
                              <label>Functional Area</label>
                            </div>
                            <div className="col-lg-10">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="col-lg-2">
                              <label>Industry</label>
                            </div>
                            <div className="col-lg-10">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="col-lg-2">
                              <label>Exclude Employer</label>
                            </div>
                            <div className="col-lg-10">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="col-lg-2">
                              <label>Notice Period</label>
                            </div>
                            <div className="col-lg-10">
                              <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item mt-3">
                  <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                      Educational Details
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
                        <div className="row align-items-center">
                            <div className="col-lg-2">
                              <label>UG Qualification</label>
                            </div>
                            <div className="col-lg-10">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="col-lg-2">
                              <label>Institute Name</label>
                            </div>
                            <div className="col-lg-10">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="col-lg-2">
                              <label>Education Type</label>
                            </div>
                            <div className="col-lg-10">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="col-lg-2">
                              <label>Year of Graduation</label>
                            </div>
                            <div className="col-lg-10">
                              <div className="d-flex flex-wrap">
                                <input type="text" className="form-control w-50" placeholder="from" />
                                <input type="text" className="form-control w-50" placeholder="to" />
                              </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item mt-3">
                  <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                      Display Details
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                    <div class="accordion-body">
                        <div className="row align-items-center">
                            <div className="col-lg-2">
                              <label>Show </label>
                            </div>
                            <div className="col-lg-10">
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                  All Candidates
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <label>Show Candidates Only with </label>
                            </div>
                            <div className="col-lg-10">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="col-lg-2">
                              <label>Show Candidate Seeking</label>
                            </div>
                            <div className="col-lg-10">
                                <div className="d-flex flex-wrap">
                                    <select class="form-select w-50" aria-label="Default select example">
                                        <option selected>Job Type</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <select class="form-select w-50" aria-label="Default select example">
                                        <option selected>Employee Type</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-2">
                              <label>Resume per page</label>
                            </div>
                            <div className="col-lg-10">
                                <select class="form-select w-50" aria-label="Default select example">
                                  <option selected>Choose</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-lg-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                      Save current details forms as your default search page
                                    </label>
                                  </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-center">
                  <button class="btn btn-primary px-4 py-2">Search</button>
              </div>
          </div>
        </div>
      </section>
  )
}

export default Search