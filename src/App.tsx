import { HashRouter, Route, Routes } from 'react-router-dom'

import Homepage from './pages/Homepage'
import Museum from './pages/Museum'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/museum" element={<Museum />} />
      </Routes>
    </HashRouter>
  )
}

export default App
