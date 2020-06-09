import React from "react";
import "../layout/style/layoutpage.scss";

// Components
import { Header } from "./Header";
import { Footer } from "./Footer";
import { NavBar } from "../../Components/nav/NavBar";

interface Props {
  children: any;
}

export const PageLayout = (props: Props) => (
  <div className={"page"}>
    <div className={"top-bar"}>
      <Header />
      <NavBar />
    </div>
    <main className={"main"} role="main">
      {props.children}
    </main>
    <Footer />
  </div>
);
