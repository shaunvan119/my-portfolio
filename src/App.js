import React from 'react';
import './App.css';
import ProfilePicture from '../src/assets/profile.jpeg'; // Replace with your profile picture path


const App = () => {
  // Customize this data with your website information
  const portfolioItems = [
    {
      title: 'Home Experts',
      description: 'Modern client website, built with. ',
      image: require('./assets/portfolioOne.png'),
    },

    {
      title: 'Website 1',
      description: 'Description of your website 1',
      image: require('./assets/portfolioOne.png'),
    },
    {
      title: 'Website 1',
      description: 'Description of your website 1',
      image: require('./assets/portfolioOne.png'),
    },
    {
      title: 'Website 1',
      description: 'Description of your website 1',
      image: require('./assets/portfolioOne.png'),
    },
    {
      title: 'Website 1',
      description: 'Description of your website 1',
      image: require('./assets/portfolioOne.png'),
    },
    {
      title: 'Website 1',
      description: 'Description of your website 1',
      image: require('./assets/portfolioOne.png'),
    },
    // Add more items for other websites
  ];

  return (
    <div className="main-wrapper">
      <header>
        <img className="profile-picture" src={ProfilePicture} alt="Your Name" />
        <h1 className="name">Shaun Van Amersfoort</h1>
        <h2 className="description">Front-end developer</h2>
      </header>
      <section className="portfolio-section">
        {portfolioItems.map((item, index) => (
          <div className="portfolio-item" key={index}>
          <div className="image-container">
            <img src={item.image} alt={item.title} />
          </div>  
          <div className="info-container">
            <h3 className='web-des'>{item.title}</h3>
            <p className='web-des'>{item.description}</p>
          </div>  
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
