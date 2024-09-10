/**
 * Layout component to wrap the application.
 */
import './layout.css';
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../../lib/store";

const Layout = () => {
  const showBackBtn = useSelector((state: IRootState) => state.layout.showBackBtn);

  return (
    <div>
      <h1>Layout</h1>
      <Outlet />
    </div>
  );
};

export default Layout;