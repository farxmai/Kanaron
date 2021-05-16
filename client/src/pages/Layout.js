import React from "react";
import { withRouter } from "react-router";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout = ({ children, user, history }) => {
  const path = history.location.pathname;
  const isMasterPage = path.indexOf("master") !== -1;
  return (
    <div>
      <Header user={user} />
      <main className="content">
        <div className={isMasterPage || "container"}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default withRouter(Layout);
