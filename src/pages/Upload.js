import {useState} from 'react'
import { useNavigate } from "react-router-dom";


function Upload() {

    const [selectedFile, setSelectedFile] = useState();
    const [selectedFileOnboard, setSelectedOnboard] = useState();
    let history = useNavigate();


	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

    const changeHandlerOnboard = (event) => {
		setSelectedOnboard(event.target.files[0]);
	};

	const handleSubmission = () => {
        const formData = new FormData();
		formData.append('excel', selectedFile);
		fetch('http://localhost:7000/api/uploadResumesExcel',{method: 'POST',body: formData,})
			.then((response) => response.json())
			.then((result) => {
				
                alert("Excel Upload Succesfully")
                history("/searchResumes")

			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

    const handleSubmissionOnboard = () => {
        const formData = new FormData();
		formData.append('excel', selectedFileOnboard);
		fetch('http://localhost:7000/api/uploadOnboardExcel',{method: 'POST',body: formData,})
			.then((response) => response.json())
			.then((result) => {
				
                alert("Excel Upload Succesfully")
                history("/onboardList")
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};


  return (
    <section className="upload">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <label htmlFor="">Resumes Excel upload</label>
                    <input type="file" className="form-control" onChange={changeHandler} />
                    <button className="btn btn-primary p-2" onClick={handleSubmission}>upload</button>
                </div>
                <div className="col-lg-6">
                    <label htmlFor="">Onboard Excel upload</label>
                    <input type="file" className="form-control" onChange={changeHandlerOnboard} />
                    <button className="btn btn-secondary p-2" onClick={handleSubmissionOnboard}>upload</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Upload