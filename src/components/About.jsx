import React from 'react';

let About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built with ReactJS.</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a>
        </li>
      </ul>
    </div>
  );
};

export default About;
