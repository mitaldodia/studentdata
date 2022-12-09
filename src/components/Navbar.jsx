
import { FaUserCircle } from "react-icons/fa";
export const Navbar = () => {
    
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#!">Student Informations</a>
                   

                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <div className="porfile-detail">
                            <FaUserCircle/>
                        </div>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}
