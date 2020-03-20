import React from 'react';

import marco from '../image/marco.png'; // Tell webpack this JS file uses this image
import melania from '../image/melania.png'; // Tell webpack this JS file uses this image

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="level container">
          <div className="level-left">
            <div className="level-item">
              <h1 className="title is-size-1-desktop is-size-2-touch">
                <span className="background_color">#savethedate</span>
              </h1>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <figure className="image is-96x96">
                <img className="is-rounded" src={marco} alt="marco" />
              </figure>

              <figure className="image is-96x96">
                <img className="is-rounded" src={melania} alt="melania" />
              </figure>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header; // Don’t forget to use export default!