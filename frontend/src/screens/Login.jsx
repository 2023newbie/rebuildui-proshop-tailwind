import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import useInput from '../hooks/useInput'
import { authActions } from '../store/auth-slice'

const Login = () => {
  const dispatch = useDispatch()
  const [email, changeEmail] = useInput()
  const [password, changePassword] = useInput()
  const navigate = useNavigate()

  const submitLogin = async e => {
    e.preventDefault()

    const res = await fetch('/api/users/auth', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
    })

    const credentials = await res.json()

    dispatch(authActions.setCredentials(credentials))
    navigate('/')
  }

  return (
    <div className="max-w-md mx-auto">
      <h3 className="my-4 text-3xl font-semibold text-slate-800">Login</h3>
      <form onSubmit={submitLogin}>
        <div className="flex flex-col mb-4">
          <label className="text-gray-600 mb-2" htmlFor="email">
            Email Address:
          </label>
          <input
            className="rounded-md p-2 border border-gray-300"
            id="email"
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={changeEmail}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-600 mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="rounded-md p-2 border border-gray-300"
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={changePassword}
          />
        </div>
        <button className="py-2 px-6 bg-slate-700 text-white mt-6 rounded-lg transition hover:bg-slate-800">
          Sign In
        </button>
        <p className="mt-4">
          New Customer?{' '}
          <Link className="underline" to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
