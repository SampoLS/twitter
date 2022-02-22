import { memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./layout/Page";
import Explore from "./pages/explore/Explore";
import Home from "./pages/home/Home";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="home" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default memo(App);
