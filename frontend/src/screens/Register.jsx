import { useState } from 'react'
import useInput from '../hooks/useInput'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authActions } from '../store/auth-slice'

const Register = () => {
  const [name, changeName] = useInput()
  const [email, changeEmail] = useInput()
  const [password, changePassword] = useInput()
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const submitRegister = async e => {
    e.preventDefault()

    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })

      if (!res.ok) {
        throw new Error('Invalid email or password')
      }

      const credentials = await res.json()

      dispatch(authActions.setCredentials(credentials))
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h3 className="my-4 text-3xl font-semibold text-slate-800">Register</h3>

      {error.length > 0 && (
        <p className="text-red-500 p-2 rounded border border-red-500 mb-4">
          {error}
        </p>
      )}

      <form onSubmit={submitRegister}>
        <div className="flex flex-col mb-4">
          <label className="text-gray-600 mb-2" htmlFor="name">
            Your Name:
          </label>
          <input
            className="rounded-md p-2 border border-gray-300"
            id="name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={changeName}
          />
        </div>
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
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
