import React from 'react'
import Table from "../components/Table";
import DatePicker from 'react-datepicker';
import {useDispatch,useSelector} from "react-redux";
import {getOnboardDetailsDate} from "../redux/onboardList/onboardListSlice";
import Moment from 'react-moment';



function OnboardList() {


    const [currentStatus, setCurrentStatus] = React.useState('')
    const [startDate,setStartDate] = React.useState("")
    const [endDate,setEndDate] = React.useState("")

    let dispatch = useDispatch()
    let onboard = useSelector((state) => state.onboardList)



    React.useEffect(() => {
        dispatch(getOnboardDetailsDate({page:0,startDate:'',endDate:'',currentStatus:''}))
    },[])

  return (
    <>
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <label htmlFor="">Current Status:</label>
                            <select className="form-select" aria-label="Default select example"
                                    onChange={(e)  => {
                                        dispatch(getOnboardDetailsDate({page:0,startDate:startDate,endDate:endDate,currentStatus:e.target.value}))
                                        setCurrentStatus(e.target.value)
                                    }}  
                                >
                                    <option selected value="">No selection</option>
                                    <option value="On-boarded">On-boarded</option>
                                    <option value="Dropped-FTE Offer In-Hand">Dropped-FTE Offer In-Hand</option>
                                    <option value="Dropped-Late Response">Dropped-Late Response</option>
                                    <option value="Dropped-Continue with existing company">Dropped-Continue with existing company</option>
                                    <option value="Dropped-Medical Issue">Dropped-Medical Issue</option>
                                    <option value="Dropped-Fake">Dropped-Fake</option>
                                    <option value="FTE">FTE</option>
                                    <option value="Awaiting for EMP ID BGC cleared yet to submit to RMG">Awaiting for EMP ID BGC cleared yet to submit to RMG</option>
                                    <option value="Dropped-Wedding BGC need to resubmit">Dropped-Wedding BGC need to resubmit</option>
                                    <option value="Dronned-Not Answered">Dronned-Not Answered</option>
                                    <option value="Waiting for candidate confirmation to EMP ID">Waiting for candidate confirmation to EMP ID</option>
                                    <option value="Dropped-Non Local">Dropped-Non Local</option>
                                    <option value="RGS ID is not active">RGS ID is not active</option>
                                    <option value="Dropped-Not Interested">Dropped-Not Interested</option>
                                    <option value="Need to source to another RMG">Need to source to another RMG</option>
                                    <option value="Dropped-High Pay Expected Waiting for RGS ID">Dropped-High Pay Expected Waiting for RGS ID</option>
                                    <option value="Dropped-Other Offer Dropped-Distance mode of Edu BGC submitted Dropped-Not releaving from current company">Dropped-Other Offer Dropped-Distance mode of Edu BGC submitted Dropped-Not releaving from current company</option>
                                    <option value="Waiting for TCS confirmation about ETE">Waiting for TCS confirmation about ETE</option>
                                    <option value="Dropped- CE Rejected">Dropped- CE Rejected</option>
                                    <option value="Awaiting for approval">Awaiting for approval</option>
                                    <option value="Documents in Progress">Documents in Progress</option>
                                    <option value="CE Initiated">CE Initiated</option>
                            </select>
                    </div>
                    <div className="col-lg-4" style={{ position:"relative", zIndex:"999" }}>
                        <label htmlFor="">Start Date:</label>
                        <DatePicker 
                          dateFormat='dd/MM/yyyy' 
                          placeholderText='DD/MM/YYYY' 
                          selected={startDate} 
                          className="form-control"
                          onChange={(date) => {  
                            dispatch(getOnboardDetailsDate({page:0,startDate:date,endDate:endDate,currentStatus:currentStatus}))
                            setStartDate(date)
                          }} 
                        />
                    </div>
                    <div className="col-lg-4" style={{ position:"relative", zIndex:"999" }}>
                        <label htmlFor="">End Date:</label>
                        <DatePicker 
                          dateFormat='dd/MM/yyyy' 
                          placeholderText='DD/MM/YYYY' 
                          selected={endDate} 
                          className="form-control"
                          onChange={(date) => {  
                            dispatch(getOnboardDetailsDate({page:0,startDate:startDate,endDate:date,currentStatus:currentStatus}))
                            setEndDate(date)
                          }} 
                        />
                    </div>
                </div>
            </div>
        </div>
        <Table 
            columns={
                [
                    {
                        name: "Candidate Name",
                        label: "Candidate Name",
                        options: {
                            filter: true,
                            sort: true,
                        }
                    },
                    {
                        name: "Contact No",
                        label: "Contact No",
                        options: {
                            filter: true,
                            sort: true,
                        }
                    },
                    {
                        name: "Skill Set",
                        label: "Skill Set",
                        options: {
                            filter: true,
                            sort: true,
                        }
                    },
                    {
                        name: "Current Status",
                        label: "Current Status",
                        options: {
                            filter: true,
                            sort: true,
                        }
                    },
                    {
                        name: "RGS ID",
                        label: "RGS ID",
                        options: {
                            filter: true,
                            sort: true,
                        }
                    },
                    {
                        name: "Tentative DOJ",
                        label: "Tentative DOJ",
                        options: {
                            filter: true,
                            sort: true,
                            customBodyRender: (val) => {
                                return (
                                    <>
                                        <Moment format="DD/MM/YYYY">{val}</Moment> <br />
                                        <Moment format="hh:mm:ss A">{val}</Moment>
                                    </>
                                )
                            }
                        }
                    },
                    {
                        name: "EMP ID",
                        label: "EMP ID",
                        options: {
                            filter: true,
                            sort: true,
                            
                        }
                    },
                    {
                        name: "DOJ",
                        label: "DOJ",
                        options: {
                            filter: true,
                            sort: true,
                            customBodyRender: (val) => {
                                return (
                                    <>
                                        <Moment format="DD/MM/YYYY">{val}</Moment> <br />
                                        <Moment format="hh:mm:ss A">{val}</Moment>
                                    </>
                                )
                            }
                        }
                    },  
                    {
                        name: "Date of source",
                        label: "Date of source",
                        options: {
                            filter: true,
                            sort: true,
                            customBodyRender: (val) => {
                                return (
                                    <>
                                        <Moment format="DD/MM/YYYY">{val}</Moment> <br />
                                        <Moment format="hh:mm:ss A">{val}</Moment>
                                    </>
                                )
                            }
                        }
                    },  
                    {
                        name: "Date of selection",
                        label: "Date of selection",
                        options: {
                            filter: true,
                            sort: true,
                            customBodyRender: (val) => {
                                return (
                                    <>
                                        <Moment format="DD/MM/YYYY">{val}</Moment> <br />
                                        <Moment format="hh:mm:ss A">{val}</Moment>
                                    </>
                                )
                              }
                        }
                    }, 
                    {
                        name: "RMG",
                        label: "RMG",
                        options: {
                            filter: true,
                            sort: true,
                        }
                    }, 
                    {
                        name: "TCS Account/ISU",
                        label: "TCS Account/ISU",
                        options: {
                            filter: true,
                            sort: true,
                        }
                    }, 
                    {
                        name: "RMG Location",
                        label: "RMG Location",
                        options: {
                            filter: true,
                            sort: true,
                        }
                    }, 
                    {
                        name: "Requirement Email from GENERAL/Known Manager",
                        label: "Requirement Email from GENERAL/Known Manager",
                        options: {
                            filter: true,
                            sort: true,
                        }
                    }, 
                    {
                        name: "TCS RATE CARD",
                        label: "TCS RATE CARD",
                        options: {
                            filter: true,
                            sort: true,
                        }
                    }, 
                    {
                        name: "Pay RATE",
                        label: "Pay RATE",
                        options: {
                            filter: true,
                            sort: true,
                        }
                    },
                    {
                        name: "TCS APPROVED RATE CARD",
                        label: "TCS APPROVED RATE CARD",
                        options: {
                            filter: true,
                            sort: true,
                        }
                    },
                    {
                        name: "Margin",
                        label: "Margin",
                        options: {
                            filter: true,
                            sort: true,
                        }
                    },
                    {
                        name: "BGC Cleared Date",
                        label: "BGC Cleared Date",
                        options: {
                            filter: true,
                            sort: true,
                            customBodyRender: (val) => {
                                return (
                                    <>
                                        <Moment format="DD/MM/YYYY">{val}</Moment> 
                                        <br />
                                        <Moment format="hh:mm:ss A">{val}</Moment>
                                    </>
                                )
                            }
                        }
                    },
                    {
                        name: "BGC SPOC",
                        label: "BGC SPOC",
                        options: {
                            filter: true,
                            sort: true,
                        }
                    },
                    {
                        name: "Location of On-board",
                        label: "Location of On-board",
                        options: {
                            filter: true,
                            sort: true,
                        }
                    },
                    {
                        name: "Recruiter Name",
                        label: "Recruiter Name",
                        options: {
                            filter: true,
                            sort: true,
                        }
                    },
                    {
                        name: "Team Lead Name",
                        label: "Team Lead Name",
                        options: {
                            filter: true,
                            sort: true,
                        }
                    },
                    {
                        name: "TOI-Spoc",
                        label: "TOI-Spoc",
                        options: {
                            filter: true,
                            sort: true,
                        }
                    },
            ]}
            data={onboard.data}
            lengthOfData={onboard.count}  
            paginationData={true}
            loadingState={onboard.loading}  
            paginateApi={getOnboardDetailsDate}
            currentData={{startDate:startDate,endDate:endDate,currentStatus:currentStatus}}
            title="Onboard List"
        />
    </>
  )
}

export default OnboardList;