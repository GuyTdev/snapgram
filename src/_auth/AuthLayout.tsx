import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {!isAuthenticated ? (
        <>
          <section className='flex flex-1 justify-center items-center flex-col py-10'>
            <Outlet />
          </section>
          <img className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat" src='assets/images/side-img.svg' alt='side-img'/>
        </>
      ) : (
        <>
          <Navigate to="/" />
        </>
      )}
    </>
  );
};

export default AuthLayout;
