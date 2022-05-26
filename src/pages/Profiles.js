import React from 'react'
import { Link } from 'react-router-dom'

function Profiles() {
  return (
    <>
        <section className="profiles">
            <div className="container">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div>
                        <h5>My Profiles</h5>
                    </div>
                    <div>
                        <Link to="/addProfile" className="btn text-white btn-primary py-1">Add Candidate</Link>
                    </div>
                </div>
                <div className='bg-white mt-4'>
                    <table class="table table-bordered table-hover table-responsive">
                        <thead className="bg-primary">
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Skill Set</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Expected CTC</th>
                                <th scope="col">Telephonic</th>
                                <th scope="col">Round Date</th>
                                <th scope="col">Submission Date</th>
                                <th scope="col">Resume</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Abhi</td>
                                <td>Test</td>
                                <td>+91 9898989089</td>
                                <td>test@gmail.com</td>
                                <td>3.5</td>
                                <td>25/09/2022</td>
                                <td>25/09/2022</td>
                                <td>25/09/2022</td>
                                
                                <td>test.com</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Abhi</td>
                                <td>Test</td>
                                <td>+91 9898989089</td>
                                <td>test@gmail.com</td>
                                <td>3.5</td>
                                <td>25/09/2022</td>
                                <td>25/09/2022</td>
                                <td>25/09/2022</td>
                                
                                <td>test.com</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Abhi</td>
                                <td>Test</td>
                                <td>+91 9898989089</td>
                                <td>test@gmail.com</td>
                                <td>3.5</td>
                                <td>25/09/2022</td>
                                <td>25/09/2022</td>
                                
                                <td>25/09/2022</td>
                                <td>test.com</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Abhi</td>
                                <td>Test</td>
                                <td>+91 9898989089</td>
                                <td>test@gmail.com</td>
                                <td>3.5</td>
                                <td>25/09/2022</td>
                                <td>25/09/2022</td>
                                <td>25/09/2022</td>
                                
                                <td>test.com</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Abhi</td>
                                <td>Test</td>
                                <td>+91 9898989089</td>
                                <td>test@gmail.com</td>
                                <td>3.5</td>
                                <td>25/09/2022</td>
                                <td>25/09/2022</td>
                                <td>25/09/2022</td>
                                
                                <td>test.com</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Abhi</td>
                                <td>Test</td>
                                <td>+91 9898989089</td>
                                <td>test@gmail.com</td>
                                <td>3.5</td>
                                <td>25/09/2022</td>
                                <td>25/09/2022</td>
                                <td>25/09/2022</td>
                                
                                <td>test.com</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-end px-3">
                        <nav aria-label="...">
                            <ul class="pagination">
                                <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                </li>
                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                <li class="page-item" aria-current="page">
                                <a class="page-link" href="#">2</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Profiles