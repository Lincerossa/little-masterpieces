import { Link } from "react-router-dom";


const Homepage = () => (
  <div className="w-screen h-screen bg-indigo-500 flex items-center justify-center">
    <Link to="/museum" className="rounded-md p-4 bg-white shadow-md hover:shadow-lg transition-shadow"><span className="font-sans">Visit the museum</span></Link>
  </div>
)

export default Homepage