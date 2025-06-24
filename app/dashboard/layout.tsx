import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <>
        <nav className=" bg-gray-200 text-black py-4 px-5 flex justify-between items-center">
          <h3>Logo</h3>
          <ul className="flex items-center gap-8">
            <li>home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </nav>
      <div className="flex">
        <div className="h-screen text-black bg-gray-200 w-[15vw] text-2xl">
          <ul className="pt-5 flex flex-col gap-5 px-3">
            <h2 className="text-xl font-bold mb-4">Sidebar</h2>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div>{props.children}</div>
      </div>
      
    </>
  );
};

export default DashboardLayout;
