import { HashRouter, Route, Routes } from "react-router-dom";
import Museum from './pages/Museum'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path='/'
          element={<Homepage />}
        />
        <Route
          path='/museum'
          element={<Museum />}
        />
      </Routes>
  </HashRouter>
  )

}

export default App