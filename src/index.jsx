import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

const Hello = ({ name }) => {
  return (
    <div>
      Hello,
      {name}
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="Emilie" />, root);
}

const Banner = () => {
  return (
    <div>
      Banner
    </div>
  );
};

const banner = document.getElementById('banner');
if (banner) {
  ReactDOM.render(<Banner />, banner);
}
