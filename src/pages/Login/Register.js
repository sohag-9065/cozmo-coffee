import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext'; 
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import SocialLogin from './SocialLogin';

const Register = () => {

    const { user, createUser, updateName } = useContext(AuthContext);
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const [loadingUser, setLoadingUser] = useState(false);
    const [socialLoginClick, setSocialLoginClick] = useState(false);

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    useEffect(() => {
        if( user) { 
            navigate(from, { replace: true }); 
        }
    },[user, from, navigate]);

    if (loadingUser) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        const { name, email, password  } = data;
 
        setLoadingUser(true)
        // 1.Create User 
        createUser(email, password)
            .then(result => { 
                console.log(" create ", result);
                //2. Update Name
                updateName(name)
                .then(() => {
                    toast.success('Name Updated', { autoClose: 1000 });
                    setLoadingUser(false); 
                })
                .catch(error => {
                    toast.error(error.message)
                    console.log(error.message)
                })

            })
            .catch(error => {
                console.log(error);
                setLoadingUser(false);
            });
        reset();
         
    };

    return (
        <div className="hero min-h-[90vh] bg-amber-500">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-80 lg:min-w-[450px] shadow-2xl bg-amber-500">
                    <div className="card-body bg-base-200 text-black rounded-md">
                        <h1 className='text-2xl text-center font-semibold'>Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="form-control ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered mb-1 w-full"
                                placeholder='Full Name'
                                {...register("name",
                                    {
                                        required: "Full Name is required",
                                    }
                                )}
                            />
                            {errors.name?.type === 'required' && <p role="alert">{errors.name?.message}</p>}
                             
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered mb-1 w-full"
                                placeholder='Email'
                                {...register("email",
                                    {
                                        required: "Email Address is required",
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: "Provide a valid email"
                                        }
                                    }
                                )}
                                aria-invalid={
                                    errors.email ? "true" : "false"
                                }
                            />
                            {errors.email?.type === 'required' && <p role="alert">{errors.email?.message}</p>}
                            {errors.email?.type === 'pattern' && <p role="alert">{errors.email?.message}</p>}

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input
                                type="password"
                                autoComplete='username'
                                className="input input-bordered mb-3"
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

                             
                            <input type="submit" className='btn mt-6' value="Sign Up" />
                        </form>
                        <p className='text-xs'>Already have an account? <Link to="/login" className=' text-secondary cursor-pointer'>Please Login</Link></p>
 
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

export default Register;