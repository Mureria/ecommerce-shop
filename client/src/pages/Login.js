import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }


  const showToastAlert = (err) => {
    toast.error(`Error: ${err}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/auth/login', {
        email:email,
        password:password,
    }
    )
    .then((response) => {
        console.log(response.data)
        toast.success('User Logged in Successfully', {
          onClose: () => navigate('/'), // Navigate to the homepage after the toast is closed
        });
    } 
    )
    .catch((err) => {
        console.log(err);
        console.log(err.response);
        // alert(err.response.data)
        showToastAlert(err.response.data)
    })
}

  return (
   <>
      <div className="flex min-h-full flex-1 flex-row  gap-10 justify-center px-6 py-12 md:mt-16 lg:px-8">
        <div className=''>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
              Sign In
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-5" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='Email'
                    autoComplete="email"
                    value={email}
                    onChange={handleEmail}
                    className="block w-full md:w-[400px] border-b bg-inherit px-3 py-1.5  shadow-sm placeholder:text-gray-400 placeholder:text-xs md:placeholder:text-sm outline-none  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                </div>
                <div className="mt">
                  <input
                    id="password"
                    name="password"
                    placeholder='Password'
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={handlePassword}
                    className="block w-full md:w-[400px] border-b px-3 py-1.5 shadow-sm placeholder:text-gray-400 placeholder:text-xs md:placeholder:text-sm bg-inherit outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full md:w-[400px] justify-center rounded-md bg-blue-600 px-3 py-2 md:py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Log in
                </button>
              </div>
              <div className="text-sm">
                    <a href="#forgot" className="font-semibold text-blue-600 hover:text-blue-500">
                      Forgot password?
                    </a>
                  </div>
            </form>
          </div>
        </div>
        <div className='hidden md:flex items-baseline'>
          <img className='h-[400px]  object-cover object-center' src="https://img.freepik.com/free-vector/login-concept-illustration_114360-757.jpg?t=st=1714091128~exp=1714094728~hmac=89b540649f2a9ef8666c1c030e715e7d490dd776873ad49996e8b5ac3ce6c82f&w=740" alt="" />
        </div>
      </div>
       
    </>
  )
}

export default Login