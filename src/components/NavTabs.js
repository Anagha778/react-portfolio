import React from 'react';

function NavTabs(props) {
  const tabs = ['About Me', 'Portfolio', 'Contact', 'Resume'];
  return (
    <header className="flex-row px-1">
      <h1>Anagha</h1>
      <nav>
      <ul className="flex-row">
        {tabs.map(tab => (
          <li 
          className={`mx-2 ${tab === tabs[0] && `navActive`}`}
          key={tab}
          >
            <a
              href={'#' + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={props.currentPage === tab && 'navActive'}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
      </nav>
    </header>
  );
}

export default NavTabs;