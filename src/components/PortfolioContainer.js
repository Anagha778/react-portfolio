import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function PortfolioContainer() {
  const [currentPage, handlePageChange] = useState('AboutMe');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    switch(currentPage)
    {
      case 'Portfolio':
        return <Portfolio/>;
      case 'Resume':
        return <Resume/>;
      case 'Contact':
        return <Contact/>;
      default:
        return <AboutMe/>;
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage(currentPage)
        }
      </div>
      </main>
      <footer>
      <div>
        <i className="fa logo">&#xf09b;</i>
        <i className="fa logo">&#xf08c;</i>
        <i className="fa logo">&#xf16c;</i>
      </div>
        </footer>
    </div>
  );
}

export default PortfolioContainer;
