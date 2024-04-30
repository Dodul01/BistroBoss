import { useContext } from 'react';
import bgImage from '../../assets/Images/others/authentication.png';
import authenticationImg from '../../assets/Images/others/authentication2.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProviders';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (e) => {
        const email = e.target.email.value;
        const password = e.target.password.value;

        e.preventDefault();

        signInUser(email, password)
            .then(response => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sign In Successfully",
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, {replace: true});
            })
            .catch(error => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `${error}`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })

        e.target.reset();
    }


    return (
        <div className='relative'>
            <Helmet>
                <title>BistroBoss - SignIn</title>
            </Helmet>
            <div className='absolute top-0 left-0'>
                <img className='w-[100vw] h-[100vh]' src={bgImage} alt="" />
            </div>

            <div className='absolute top-0 left-0 w-full h-[100vh]'>
                <div className='flex items-center justify-center flex-row-reverse h-full w-full p-2'>
                    <form onSubmit={handleSignIn} className='lg:min-w-[400px] lg:mr-10'>
                        <h1 className='text-3xl font-bold text-center mb-8'>Sign In</h1>

                        <div>
                            {/* Name */}
                            <div className='mb-4'>
                                <label className='font-semibold'>Email</label>
                                <div className="relative w-full mt-2">
                                    <input type="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#bb85063d] outline-[#bb85063d] block w-full p-4 " placeholder="Your Name" required />
                                </div>
                            </div>

                            {/* Password */}
                            <div className='mb-4'>
                                <label className='font-semibold'>Password</label>
                                <div className="relative w-full mt-2">
                                    <input type="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#bb85063d] outline-[#bb85063d] block w-full p-4 " placeholder="Password" required />
                                </div>
                            </div>

                            <button className='bg-[#BB8506] text-white font-semibold p-3 hover:bg-opacity-90 mb-4 w-full rounded-lg' type='submit'>Sign Up</button>

                            <div>
                                <p className='font-semibold'>Don't have an account? <Link className='text-[#BB8506] underline' to='/signUp'>Sign Up</Link></p>
                            </div>
                        </div>
                    </form>
                    <div>
                        <img src={authenticationImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn