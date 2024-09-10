/**
 * Layout component to wrap the application.
 */
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../../lib/store";

const Layout = () => {
  const showBackBtn = useSelector((state: IRootState) => state.layout.showBackBtn);

  return (
    <div className='flex h-screen w-screen'>
      <div className={`w-full h-full my-auto mx-auto ${showBackBtn ? 'lg:w-[856px] friend-details-box-height' : 'md:w-[714px] friends-list-box-height'}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;