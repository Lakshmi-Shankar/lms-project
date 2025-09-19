const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-gray-900 text-white">
      <h1 className="text-lg font-bold">LMS</h1>
      <div className="space-x-4">
        <a href="/" className="hover:text-blue-400">Home</a>
        <a href="/dashboard" className="hover:text-blue-400">Dashboard</a>
      </div>
    </nav>
  );
};

export default Navbar;
