import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useAuth0 } from "@auth0/auth0-react";


function Navbar() {

    const [showMenu, setShowMenu] = useState(false);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };
    
    const signInOnClick = () => {
        loginWithRedirect();
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const clicked = () => {
        setShowMenu(!showMenu);
    }

    return (
        <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
                <div className='flex items-center flex-shrink-0 text-white mr-6'>
                    <Link to='/' className='font-semibold text-xl tracking-tight'>Home</Link>
                </div>
                <div className='block'>
                    <button onClick={toggleMenu} className='flex items-center px-3 py-2 text-teal-200 border rounded border-teal-400 hover:text-white hover:border-white'>
                        <i className='fas fa-bars'></i>
                    </button>
                </div>
                { showMenu ? (
                <div className='w-full block flex-grow items-center'>
                    <div className="text-sm lg:flex-grow">
                        <button className='p-3 m-5 bg-teal-400 justify-center'>
                            <div>
                                <Link to='/' className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>Home</Link>
                            </div>

                        </button>
                        <Button className='p-3 m-5 bg-teal-400 justify-center'>
                        <div>
                            <Link to='/about' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                             text-teal-200 hover:text-white mr-4'>
                                About
                            </Link>
                        </div>

                        </Button>
                    
                        <Button className="p-3 m-5 bg-teal-400 justify-center">
                            <div>
                                <Link to='/contact' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 
                                text-teal-200 hover:text-white mr-4'>
                                    Contact
                                </Link>
                            </div>
                        </Button>

                        <Button className='p-3 m-5 bg-teal-400 justify-center'>
                            <div>
                                <Link to='/dashboard' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                                text-teal-200 hover:text-white mr-4'>
                                    Dashboard
                                </Link>
                            </div>

                        </Button>
                        { !isAuthenticated ?
                        <Button className="p-3 m-5 bg-teal-400 justify-center">
                            <div>
                                <Link to="/" onClick={ signInOnClick } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 
                                text-teal-200 hover:text-white mr-4'>
                                    Sign In
                                </Link>
                            </div>
                        </Button>
                        :
                        <Button className="p-3 m-5 bg-teal-400 justify-center">
                            <div>
                                <Link to="/" onClick={ signOutOnClick } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 
                                text-teal-200 hover:text-white mr-4'>
                                    Sign Out
                                </Link>
                            </div>
                        </Button>
                        }
                    </div>
                </div>
                ) : (
                <></>
                ) }
            </nav>
    )  
}

export default Navbar;