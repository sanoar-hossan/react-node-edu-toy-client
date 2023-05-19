import React, { useContext } from 'react';
import google from '../../../src/assets/images/google-signin-button.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

const {signIn,googleSignin}=useContext(AuthContext);

const handleGoogle=event=>{
  event.preventDefault();
  googleSignin();

  
}


    const handleLogin=event=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;

        signIn(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user);
        })
        .catch(error=>{
          console.log(error);
        })


        

    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
        <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Are You New? <Link to='/register'>Register</Link></a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

        <img className='py-4' onClick={handleGoogle} src={google} alt="" />
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;