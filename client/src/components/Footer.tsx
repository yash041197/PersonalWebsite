const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-12 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <a href="/" className="inline-block mb-4 md:mb-0">
              <h1 className="text-2xl font-bold">avenues.life</h1>
            </a>
          </div>
          
          <div>
            <p>&copy; {currentYear} Avenues. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
