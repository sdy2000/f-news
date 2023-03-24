import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { HomeLayout } from "./parts";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
