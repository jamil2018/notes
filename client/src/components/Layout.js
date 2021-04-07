import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="font-montserrat text-gray-700 bg-gray-100 md:container md:mx-auto max-h-screen">
      <div className="grid md:grid-cols-6">
        <div className="col-span-1 min-h-screen py-8 bg-white">
          <Navbar />
        </div>
        <div className="col-span-5 pt-8 px-4 bg-gray-100">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
