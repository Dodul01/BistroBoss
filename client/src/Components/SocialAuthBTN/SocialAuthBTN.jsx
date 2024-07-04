import { FaGoogle } from "react-icons/fa"
import useAuth from "../../hooks/useAuth"
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from 'react-router-dom';

const SocialAuthBTN = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignUp = () => {
        googleSignIn()
            .then(res => {
                // console.log(res.user);
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate('/')
                    })
            })
    }

    return (
        <div>
            <button onClick={handleGoogleSignUp} className='bg-transparent border border-[#BB8506] font-semibold  outline-[#bb85063d] max-w-[200px] p-3 hover:bg-opacity-90 mb-4 rounded-lg flex items-center gap-2' type='submit'><FaGoogle /> Google</button>
        </div>
    )
}

export default SocialAuthBTN