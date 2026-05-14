import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MainLayoutPage = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default MainLayoutPage;
