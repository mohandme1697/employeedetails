import { useState } from "react";
import "..//node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Create } from "./Employee Value";
export const Register=()=>
{
    const[process,setProcess]=useState({
        "empId":0,
        "empName":"",
        "empUsername":"",
        "empPassword":"",
        "empDesignation":"",
        "empExp":"",
        "empSalary":0
    })
    const track=(data)=>
    {
        const{name,value}=data.target
        setProcess(
            (old)=>
            {
                return{
                    ...old,
                    [name]:value
                }
            }
        )
    }
    const regtr=()=>

    {
        alert("welcome to Zealous GO TO BACK")
        Create(process)
        // alert("Welcome to MLM Tech"+JSON.stringify(process))
    }
    const reset=()=>
    {
        alert("Cancel....")
    }

    return(
        <>
        <div className="container-fluid mt-5 bg-secondary">
            <h1 className="text-info text-uppercase text-center font-monospace">Employee Registration Form</h1>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-0 col-sm-12 shadow-lg p-3 bg-info ">
                    <div className="form group">
                        <lable>EmployeeId</lable>
                        <input type="text" name="empId" onChange={track} value={process.empId} placeholder="Enter Employee Id" className="form-control" />
                    </div>
                    <div className="form group">
                    <lable>EmployeeName</lable>
                        <input type="text" name="empName" onChange={track} value={process.empName} placeholder="Enter the Employee Name" className="form-control" />
                    </div>
                    <div className="form group">
                    <lable>Employee Username</lable>
                        <input type="text" name="empUsername" onChange={track} value={process.empUsername} placeholder="Enter the Username" className="form-control" />
                    </div>
                    <div className="form group">
                    <lable>EmployeePassword</lable>
                        <input type="text" name="empPassword" onChange={track} value={process.empPassword} placeholder="Enter the Password" className="form-control" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <label>Employee Designation</label>
                        <select name="empDesignation" onChange={track} value={process.empDesignation} className="form-select me-5">
                            <option>Select Designation</option>
                            <option>Java FSD</option>
                            <option>Python FSD</option>
                            <option>C&C# Developer</option>
                            <option>Android Developer</option>
                            <option>Other</option>
                        </select>

                    </div>
                    <div className="form group">
                    <lable>EmployeeExperience</lable>
                        <input type="text" name="empExp" onChange={track} value={process.empExp} placeholder="EmployeeExperience" className="form-control" />
                    </div>
                    <div className="form group">
                    <lable>EmployeeSalary</lable>
                        <input type="text" name="empSalary" onChange={track} value={process.empSalary} placeholder="EmployeeSalary" className="form-control" />
                    </div>
                    <div className="row justify-content-around mt-3">
                        <button className="btn btn-outline-success col-3" ms-3 onClick={regtr}>Register</button>
                        <button className="btn btn-outline-danger col-3" me-3 onClick={reset} type="reset" value="reset">Reset</button>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}