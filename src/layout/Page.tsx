import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Layout from "./Layout";
import Catorgries from "./left/components/Catogries";
import Left from "./left/Left";
import Center from "./center/Center";
import Right from "./right/Right";
import Post from "./left/components/Post";
import User from "./left/components/User";
import Logo from "./left/components/Logo";
import Search from "./right/Search";
import WhatHappens from "./right/WhatHappens";

export default function Page() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <Layout>
      <Left>
        <Logo />
        <Catorgries />
        <Post />
        <User />
      </Left>
      <Center>
        <Outlet />
      </Center>
      <Right>
        <Search />
        <WhatHappens />
      </Right>
    </Layout>
  );
}
