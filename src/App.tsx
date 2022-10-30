import { BrowserRouter, Route, Routes } from "react-router-dom";

import Page from "./layout/Page";
import Explore from "./pages/explore/Explore";
import Home from "./pages/home/Home";
import UserDetails from "./pages/users/UserDetails";
import Tweets from "./pages/users/Tweets";

import LoginPage from "./pages/login/LoginPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path='home' element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path=":userId" element={<UserDetails />}>
            <Route index element={<Tweets />} />
          </Route>
        </Route>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
