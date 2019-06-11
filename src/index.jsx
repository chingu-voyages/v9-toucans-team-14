import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import App from './components/app.jsx';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <App />,
    root);
}

// const Banner = () => {
//   return (
//     <div>
//       This is a banner
//     </div>
//   );
// };

// const banner = document.getElementById('banner');
// if (banner) {
//   ReactDOM.render(<Banner />, banner);
// }

// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

// const root = document.getElementById('root');
// if (root) {
//   ReactDOM.render(<Hello name="Emilie" />, root);
// }



