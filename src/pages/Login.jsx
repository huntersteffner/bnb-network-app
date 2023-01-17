import Link from 'next/link'

const Login = () => {
  return (
    <>
      <form className="form-control container mx-auto flex flex-col">
        <h1>Login</h1>
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl">Email Address</p>
          <input type="text" className="input input-bordered input-ghost" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl">Password</p>
          <input type="password" className="input input-bordered input-ghost" />
        </div>

        <button
          type="submit"
          className="btn btn-secondary mt-3 mx-auto md:w-1/2"
        >
          Login
        </button>
      </form>
      <div className="flex justify-center items-center space-x-3 mt-3">
        <h2 className="text-2xl">Not a member?</h2>
        <Link href="/SignUp">
          <button className="btn btn-accent">Click Here</button>
        </Link>
      </div>
    </>
  )
}

export default Login
