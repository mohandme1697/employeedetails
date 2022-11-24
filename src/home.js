import { useEffect, useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { FetchExact, list, remove } from "./Employee Value"
import { Register } from "./empolyeeregister"
import { Reading } from "./Read"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Update } from "./update"

export const Homepage=()=>
{
    const[temparray,setTemparray]=useState([])
    const[createView,setCreateView]=useState(false)
    const[readView,setReadView]=useState(false)
    const[updateview,setUpdateView]=useState(false)
    const[obj,setObj]=useState({})
    const[Pos,setPos]=useState(0)
    
    const result=()=>
    {
        setTemparray(list)
    }
    useEffect(()=>
    {
       result()
    })

    return(
        <>
        <div className="Container mt-5">
            {(createView)?
            <>
            <Register/>
            <button className="btn btn-outline-secondary" onClick={
                ()=>
                {
                    setCreateView(false)
                }
            }>
                Back
            </button>
            </>
            :
            (readView)?
            <>
            <Reading who={Pos}/>
            <button className="btn btn-outline-secondary" onClick={
                ()=>
                {
                    setReadView(false)
                }
            }>
                Back
            </button>
            </>
            :
            (updateview)?
            <>
            <Update who={Pos} mention={obj}/>
            <button className="btn btn-outline-secondary" onClick={
                ()=>
                {
                    setUpdateView(false)
                }
            }>
                Back
            </button>
            </>
            :
            <>
            <button className="btn btn-outline-success" onClick={
                ()=>
                {
                    setCreateView(true)
                }
            }>
                Create a new User
            </button>
            
            <div className="row justify-content-center">
                <div className="table-responsive-md">
                    <table className="col-lg-8 col-md-10 col-sm-12 table table-striped p-4 shadow rounded">
                        <thead>
                            <tr>
                                <th>Employee Id</th>
                                <th>Employee Name</th>
                                <th>Employee Username</th>
                                <th>Employee Password</th>
                                <th>Employee Designation</th>
                                <th>Employee Experience</th>
                                <th>Employee Salary</th>
                                <th>Actions</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                temparray.map((ele,ind)=>
                                (
                                    <tr>
                                        <td>{ele.empId}</td>
                                        <td>{ele.empName}</td>
                                        <td>{ele.empUsername}</td>
                                        <td>{ele.empPassword}</td>
                                        <td>{ele.empDesignation}</td>
                                        <td>{ele.empExp}</td>
                                        <td>{ele.empSalary}</td>
                                    
                                    <td>
                                    <button className="btn btn-outline-info" onClick={
                                         ()=>
                                         {
                                             setReadView(true)
                                             setPos(ind)
                                         }
                                    }>
                                        Read <i class="bi bi-book"></i>
                                    </button>
                                    <button className="btn btn-outline-info" onClick={
                                         ()=>
                                         {
                                            setUpdateView(true)
                                            setPos(ind)
                                            const temp=FetchExact(ele.empName);
                                             setObj(temp)
                                         }
                                    }>
                                        Update
                                    </button>
                                    <button className="btn btn-outline-info" onClick={
                                         ()=>
                                         {
                                            setTemparray(remove(ind))
                                         }
                                    }>
                                        Delete
                                    </button>

                                </td>
                                </tr>
 
                                
                                ))
                            }
                        </tbody>

                    </table>

                </div>

            </div>
            </>
           
            }
           
        </div>
        </>
    );
}