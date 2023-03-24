import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeLayout } from "./parts";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<HomeLayout />}> */}
            <Route path="/" element={<HomeLayout />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
