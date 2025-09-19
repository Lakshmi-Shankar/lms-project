import Navbar from "./NavBar";
import Footer from "./Footer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
