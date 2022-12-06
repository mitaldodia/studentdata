import React from 'react'
import { removeEmployee } from '../service/localstorage';
import { getListEmployees } from '../service/localstorage';
import { useNavigate } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';


export const EmployeeItem = ({ employee, setEmployees }) => {
    const { id, name, email, address, phone } = employee;
    const navigate = useNavigate();

    const deleteEmployee = () => {
        removeEmployee(id);
        setEmployees(getListEmployees());
        
        window.confirm('Sure about deleting it ?')
    }

    return (
        <tr className="table-responsive">
           
            <th>{name}</th>
            <td>{email}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>
                <div className="d-flex gap-3">
                    <span type="button" className="badge bg-success" onClick={() => navigate(`/edit-employee/${id}`)}><FiEdit/></span>
                    <span type="button" className="badge bg-danger" onClick={() => deleteEmployee()}><MdDelete/></span>
                </div>
            </td>
        </tr>
    )
}
