import { useNavigate, useParams } from 'react-router-dom';
import { addEmployee, getEmployeeById } from '../service/localstorage';
import { useForm } from './../hooks/useForm';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import { editEmployee } from './../service/localstorage';

export const EmployeeForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [showAlert, setshowAlert] = useState(false);
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        name: '',
        email: '',
        address: '',
        phone: ''
    });

    useEffect(() => {
        if (id) {
            const employee = getEmployeeById(id);
            setForm(employee);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        id ? editEmployee(id, inputValues) : addEmployee({ id: uuid(), ...inputValues });
        resetForm();
        setshowAlert(true);
        setTimeout(() => {
            setshowAlert(false);
        }, 1500);
    };

    return (
        <div>

            <div className="d-flex my-5 justify-content-between">
                <button type="button" className="" onClick={() => navigate(-1)}>Go Back</button>
                <h1 className="text-center">{id ? "Edit" : "Add new"} Employee</h1>
                <div />
            </div>

            <div className="cards">
                <form onSubmit={handleSubmit}>
                    <div className="">
                        <label className="form-label mt-2" htmlFor="inputValid">Name</label> <br />
                        <input
                            name="name"
                            type="text"
                            value={inputValues.name}
                            onChange={handleInputChange}
                            className=""
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Email</label> <br />
                        <input
                            name="email"
                            type="email"
                            value={inputValues.email}
                            onChange={handleInputChange}
                            className=""
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Address</label> <br />
                        <input
                            type="text"
                            name="address"
                            value={inputValues.address}
                            onChange={handleInputChange}
                            className=""n
                            id="inputValid"
                          
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Phone</label> <br />
                        <input
                            name="phone"
                            type="number"
                            value={inputValues.phone}
                            onChange={handleInputChange}
                            className=""
                            id="inputValid"
                        />
                    </div>


                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" onClick={()=>navigate(-1)} className="btn btn-outline-primary btn-block">{id ? "Edit" : "Add"} Employee</button>
                    </div>
                </form>
            </div>

            {
                showAlert && (
                    <div className="px-5">
                        <div className="alert alert-success">
                            <strong>Well done!</strong> {id ? "edited" : "added a new"} Employee.
                        </div>
                    </div>
                )
            }

        </div >
    )
}
