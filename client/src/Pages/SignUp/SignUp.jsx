import { useContext } from 'react';
import bgImage from '../../assets/Images/others/authentication.png';
import authenticationImg from '../../assets/Images/others/authentication2.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProviders';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialAuthBTN from '../../Components/SocialAuthBTN/SocialAuthBTN';


const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleSignUp = (e) => {
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photoURL.value;
    e.preventDefault();

    // Password strength validation
    if (password.length < 8) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Password must be at least 8 characters long.",
        showConfirmButton: false,
        timer: 5000
      })
      return;
    }

    createUser(email, password)
      .then(res => {
        const user = res.user;
        updateUserProfile(name, photo)
          .then(() => {
            // save user to DB
            const userInfo = {
              name, photo, email
            }

            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sign Up Sucessfully.",
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/menu')
                }
              })
          })
          .catch((error) => {
            console.log(error);
          })
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${error}`,
          showConfirmButton: false,
          timer: 5000
        })
      })

    e.target.reset();
  }


  return (
    <div className='relative'>
      <Helmet>
        <title>BistroBoss - Sign Up</title>
      </Helmet>

      <div className='absolute top-0 left-0'>
        <img className='w-[100vw] h-[100vh]' src={bgImage} alt="" />
      </div>

      <div className='absolute top-0 left-0 w-full h-[100vh]'>
        <div className='flex items-center justify-center h-full w-full p-2'>
          <div>
            <form onSubmit={handleSignUp} className='lg:min-w-[400px] lg:mr-10'>
              <h1 className='text-3xl font-bold text-center mb-8'>Sign Up</h1>

              <div>
                {/* Name */}
                <div className='mb-4'>
                  <label className='font-semibold'>Name</label>
                  <div className="relative w-full mt-2">
                    <input type="text" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#bb85063d] outline-[#bb85063d] block w-full p-4 " placeholder="Your Name" required />
                  </div>
                </div>

                {/* Photo URL */}
                <div className='mb-4'>
                  <label className='font-semibold'>Photo URL</label>
                  <div className="relative w-full mt-2">
                    <input type="text" name='photoURL' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#bb85063d] outline-[#bb85063d] block w-full p-4 " placeholder="Your Photo URL" required />
                  </div>
                </div>

                {/* Email */}
                <div className='mb-4'>
                  <label className='font-semibold'>Email</label>
                  <div className="relative w-full mt-2">
                    <input type="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#bb85063d] outline-[#bb85063d] block w-full p-4 " placeholder="Your Email" required />
                  </div>
                </div>

                {/* Password */}
                <div className='mb-4'>
                  <label className='font-semibold'>Password</label>
                  <div className="relative w-full mt-2">
                    <input type="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#bb85063d] outline-[#bb85063d] block w-full p-4 " placeholder="Password" required />
                  </div>
                </div>

                <button className='bg-[#BB8506] text-white font-semibold  outline-[#bb85063d] p-3 hover:bg-opacity-90 mb-4 w-full rounded-lg' type='submit'>Sign Up</button>

              </div>
            </form>
            <SocialAuthBTN />
            <div>
              <p className='font-semibold'>Already heve an account? <Link className='text-[#BB8506] underline' to='/signIn'>Login</Link></p>
            </div>
          </div>
          <div>
            <img src={authenticationImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp