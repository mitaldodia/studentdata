import { EmployeeItem } from './EmployeeItem';
import { useEffect, useState } from 'react';
import { getListEmployees } from './../service/localstorage';
import { useNavigate } from 'react-router-dom';

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        setEmployees(getListEmployees());
    }, []);
    const navigate = useNavigate();
    return (
        <div>
            <button className="btn add-btn" onClick={() => navigate("/create-employee")}>
            Add new Student
            </button>
            <h1 className="my-5 text-center">Students Data</h1>

            {
                employees.length > 0 ? (
                    <div className="cards">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map(employee => <EmployeeItem employee={employee} key={employee.id} setEmployees={setEmployees} />)
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h3 className="text-center"><b>ADD</b> Students</h3>
                )
            }

        </div>
    )
}
