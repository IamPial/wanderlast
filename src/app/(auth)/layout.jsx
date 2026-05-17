import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AuthLayoutPage = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default AuthLayoutPage;
