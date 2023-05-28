import { Navbar } from "../Navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
