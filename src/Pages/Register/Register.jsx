import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister=event=>{
        event.preventDefault()
        form=event.target;

    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Register now!</h1>
              <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name='name' type="email" placeholder="Your Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder=" Your email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder=" Your password" className="input input-bordered" />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input name='photo' type="text" placeholder="Give Photo Url" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Already Have An Account? <Link to='/login'>LogIn</Link></a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
      
            
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;