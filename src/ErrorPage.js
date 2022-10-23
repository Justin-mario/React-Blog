import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="not-found">
        <h2>Sorry</h2>
        <p>Page not found</p>
        <Link to="/">Back to homepage</Link>
    </div>
  )
}

export default ErrorPage