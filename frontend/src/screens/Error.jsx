import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <div>You type wrong url</div>
      <Link className='underline' to='/'>Go back to home page</Link>
    </div>
  )
}

export default Error