import '../assets/css/styles.css'
import { CircleUserRound } from "lucide-react"
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <div className='h-24 w-screen bg-green-400 flex flex-row items-center '>
                <div className='h-14 w-52  ml-7 flex flex-row justify-center items-center'>
                    <h1 className='sm:text-2xl md:text-3xl whitespace-nowrap'>My Portfolio</h1>
                </div>
                <div className='h-14 w-44  flex flex-row justify-center items-center ml-auto'>
                    <Link to={'/'}>
                        <h1 className='sm:text-1xl md:text-2xl whitespace-nowrap'>Home</h1>
                    </Link>
                </div>
                <div className='h-14 w-44 flex flex-row justify-center items-center'>
                    <Link to={'/contact'}>
                        <h1 href='' className='sm:text-1xl md:text-2xl whitespace-nowrap'>Contact</h1>
                    </Link>
                </div>
                <div className='h-14 w-44 flex flex-row justify-center items-center'>
                    <Link to={'/projects'}>
                        <h1 href='' className='sm:text-1xl md:text-2xl whitespace-nowrap'>Projects</h1>
                    </Link>
                </div>
                <div className='h-14 w-44 flex flex-row justify-center items-center'>
                    <CircleUserRound />
                </div>
            </div>
        </>
    );
}

export default Navbar;