import { HashRouter, Route, Routes } from "react-router-dom";
import { Home, NewsDetails } from "./pages";
import { HomeLayout } from "./parts";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/news/:slug" element={<NewsDetails />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
