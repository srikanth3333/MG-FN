import React from 'react'
import Table from "../components/Table";
import DatePicker from 'react-datepicker';
import {useDispatch,useSelector} from "react-redux";
import {getReports} from "../redux/searchResumes/resumesSlice";
import Moment from 'react-moment';



function SearchResumes() {


    const [skillSet,setSkillSet] = React.useState("")
    const [totalExp,setTotalExp] = React.useState("")
    const [relExp,setRelExp] = React.useState("")
    const [startDate,setStartDate] = React.useState("")
    const [endDate,setEndDate] = React.useState("")

    let dispatch = useDispatch()
    let resumes = useSelector((state) => state.resumes)


    console.log(resumes)

    React.useEffect(() => {
        dispatch(getReports({page:0,startDate:startDate,endDate:endDate,skill:skillSet,rel:relExp,total:totalExp}))
    },[])

  return (
    <>
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <label htmlFor="">Skill Set:</label>
                        <input type="text" placeholder="Skill set" className="form-control" onChange={(e) => {
                                dispatch(getReports({page:0,startDate:startDate,endDate:endDate,skill:e.target.value,rel:relExp,total:totalExp}))
                                setSkillSet(e.target.value)}
                        } />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="">Total Experience:</label>
                        <input type="number" placeholder="Total experience" className="form-control" min="1" onChange={(e) => {
                                dispatch(getReports({page:0,startDate:startDate,endDate:endDate,skill:skillSet,rel:relExp,total:e.target.value}))
                                setTotalExp(e.target.value)
                        }} />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="">Relevant Experience:</label>
                        <input type="number" placeholder="Relevant experience" className="form-control" min="1" onChange={(e) => {
                            dispatch(getReports({page:0,startDate:startDate,endDate:endDate,skill:skillSet,rel:e.target.value,total:totalExp}))
                            setRelExp(e.target.value)
                        }} />
                    </div>
                    <div className="col-lg-4" style={{ position:"relative", zIndex:"999" }}>
                        <label htmlFor="">Start Date:</label>
                        <DatePicker 
                          dateFormat='dd/MM/yyyy' 
                          placeholderText='DD/MM/YYYY' 
                          selected={startDate} 
                          className="form-control"
                          onChange={(date) => {  
                            dispatch(getReports({page:0,startDate:date,endDate:endDate,skill:skillSet,rel:relExp,total:totalExp}))
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
                            dispatch(getReports({page:0,startDate:startDate,endDate:date,skill:skillSet,rel:relExp,total:totalExp}))
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
                        name: "Timestamp",
                        label: "Time",
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
                        name: "Email Address",
                        label: "Email Address",
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
                      name: "Total Exp",
                      label: "Total Exp",
                      options: {
                          filter: true,
                          sort: true,
                      }
                    },
                    {
                      name: "Rel Exp",
                      label: "Rel Exp",
                      options: {
                          filter: true,
                          sort: true,
                      }
                    },
                    {
                      name: "Notice Period",
                      label: "Notice Period",
                      options: {
                          filter: true,
                          sort: true,
                      }
                    },
                    {
                      name: "Resume",
                      label: "Resume",
                      options: {
                          filter: true,
                          sort: true,
                          customBodyRender: (val) => {
                            return (
                              <>
                                <a href={val} target="_blank" className="text-primary">View Resume</a>
                              </>
                            )
                          }
                      }
                    },

      ]
            }
            data={resumes.data}
            lengthOfData={resumes.count}  
            paginationData={true}
            loadingState={resumes.loading}  
            paginateApi={getReports}
            currentData={{startDate:startDate,endDate:endDate,skill:skillSet,rel:relExp,total:totalExp}}
            title="Resumes List"
        />
    </>
  )
}

export default SearchResumes