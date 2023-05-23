import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
const {createUser}=useContext(AuthContext)
const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [success,setSuccess]=useState('')

    const handleRegister=event=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const photo=form.photo.value;

        if (password.length < 6) {
          setError('password should at least 6 charecter');
          return;
        }
        setError('');
createUser(email,password)
.then(result=>{
  const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
        setSuccess("User Registration Successfully Please Log In")
        form.reset();
})
.catch(error=>{
  console.log(error);
})
form.reset();





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
                <input name='name' type="text" placeholder="Your Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder=" Your email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder=" Your password" className="input input-bordered" required/>
                
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
              {user?<div className='text-success py-3'>{success}</div> : <div className='text-danger py-3'>{error}</div>}
            
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;