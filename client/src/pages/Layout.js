import MainLayout from "../components/layouts/MainLayout";

const Layout = ({ children, user }) => {
  return <MainLayout user={user}>{children}</MainLayout>;
};

export default Layout;
