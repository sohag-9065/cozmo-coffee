import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {

    const [userEmail, setUserEmail] = useState('');
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const { user, signin, resetPassword, loadingUser } = useContext(AuthContext);
    const [socialLoginClick, setSocialLoginClick] = useState(false);

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);

    if (loadingUser) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        const { email, password } = data;
        // sign in user with email and pass 
        signin(email, password)
            .then(result => {
                toast.success('Login Success!', { autoClose: 1000 });
                // navigate(from, { replace: true });
            })
            .catch(error => toast.error(error.message));
        reset();
    };

    //Reset Pass
    const handleReset = () => {
        // console.log("OnClick: ", userEmail);
        resetPassword(userEmail)
            .then(() => {
                toast.success('Reset link has been sent, please check email', { autoClose: 1000 })
            })
            .catch(error => toast.error(error.message));
        reset();
    }

    return (
        <div className="hero min-h-[80vh] bg-primary">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-80  lg:min-w-[450px] shadow-2xl bg-primary">
                    <div className="card-body bg-base-200 text-black rounded-md">
                        <h1 className='text-2xl text-center font-semibold'>Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="form-control  ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered mb-1 w-full"
                                placeholder='Email'
                                {...register("email",
                                    {
                                        onChange: (event) => { setUserEmail(event.target.value) },
                                        required: "Email Address is required",
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: "Provide a valid email"
                                        }
                                    }
                                )}
                            />
                            {errors.email?.type === 'required' && <p role="alert">{errors.email?.message}</p>}
                            {errors.email?.type === 'pattern' && <p role="alert">{errors.email?.message}</p>}

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input
                                type="password"
                                autoComplete='username'
                                className="input input-bordered mb-1"
                                placeholder='Password'
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Must be 6 charecters or longer",
                                    }
                                }
                                )}
                            />

                            {errors.password?.type === 'required' && <p role="alert">{errors.password?.message}</p>}
                            {errors.password?.type === 'minLength' && <p role="alert">{errors.password?.message}</p>}


                            <input type="submit" className='btn mt-6' value="Login" />
                        </form>

                        <div className='space-y-1'>
                            <button
                                onClick={handleReset}
                                className='text-xs hover:underline text-gray-400'
                            >
                                Forgot password?
                            </button>
                        </div>
                        <p className='text-xs'>New to Cozmo Coffee? <Link to="/register" className=' text-secondary cursor-pointer'>Create new account</Link></p>
 
                        <div className="divider mb-0">OR</div>

                        <SocialLogin 
                        from={from}
                        socialLoginClick={socialLoginClick}
                         setSocialLoginClick={setSocialLoginClick}
                        ></SocialLogin>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;