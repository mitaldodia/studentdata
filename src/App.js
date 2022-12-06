import { EmployeeList } from "./components";
import { Navbar } from "./components";
import { EmployeeForm } from "./components";
import { Route, Routes } from "react-router-dom";
import '../src/styles/index.css'

export const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/create-employee" element={<EmployeeForm />} />
          <Route path="/edit-employee/:id" element={<EmployeeForm />} />
        </Routes>
      </div>
    </div>
  );
};
