const Register = () => {
  return (
    <div className="max-w-md mx-auto">
      <h3 className="my-4 text-3xl font-semibold text-slate-800">Login</h3>
      <form>
        <div className="flex flex-col mb-4">
          <label className="text-gray-600 mb-2" htmlFor="email">Email Address:</label>
          <input className="rounded-md p-2 border border-gray-300" id="email" type="text" placeholder="Enter email"/>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-600 mb-2" htmlFor="password">Password:</label>
          <input className="rounded-md p-2 border border-gray-300" id="password" type="password" placeholder="Enter password"/>
        </div>
        <button className="py-2 px-6 bg-slate-700 text-white mt-6 rounded-lg transition hover:bg-slate-800">Sign In</button>
      </form>
    </div>
  )
}

export default Register