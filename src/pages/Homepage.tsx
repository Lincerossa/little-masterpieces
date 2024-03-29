import { Link } from 'react-router-dom'

const Homepage = () => (
  <div className="w-screen h-screen bg-indigo-900 flex items-center justify-center">
    <Link
      to="/museum"
      className="rounded-md p-4 bg-orange-600 shadow-md hover:shadow-lg transition-shadow uppercase text-white sm:text-xl md:text-5xl tracking-wider"
    >
      the museum
    </Link>
  </div>
)

export default Homepage
