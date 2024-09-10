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
      <div className={showBackBtn ? '' : 'w-full h-full my-auto mx-auto md:w-[70%] md:h-[60%] lg:w-[50%] xl:w-[40%]'}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;