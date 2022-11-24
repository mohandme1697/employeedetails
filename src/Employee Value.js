let EmployeeValue=[
    {
        "empId":1,
        "empName":"Mohan",
        "empUsername":"mohan1697",
        "empPassword":"mohandme1@",
        "empDesignation":"Python Developer",
        "empExp":"1",
        "empSalary":250000
    },
    {
        "empId":2,
        "empName":"Priya",
        "empUsername":"Mons1201",
        "empPassword":"mon$121",
        "empDesignation":"Java Developer",
        "empExp":"3",
        "empSalary":240000
    },{
        "empId":3,
        "empName":"Mani",
        "empUsername":"Mani1298",
        "empPassword":"Mani4567",
        "empDesignation":"Android Developer",
        "empExp":"2",
        "empSalary":240000
    }
]

export const Create=(data)=>
{
    EmployeeValue.push(data)
}

export const list=()=>
{
  return  EmployeeValue;
}

export const read=(index)=>
{
    return EmployeeValue[index];
}

export const FetchExact=(name)=>
{
    const temp=EmployeeValue.filter((element)=>
    {
        return element.empName===name;
    })
    return temp[0];
}

export const alter=(data,place)=>
{
    EmployeeValue[place]=data;
}