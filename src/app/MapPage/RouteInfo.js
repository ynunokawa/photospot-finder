// Copyright (c) 2016 Yusuke Nunokawa (https://ynunokawa.github.io)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from 'react';

class RouteInfo extends React.Component {
  constructor (props) {
      super(props);
  }

  render () {
    let visibility = 'block';
    if (this.props.route === false) {
      visibility = 'none';
    }

    return (
      <div className="route-info" style={{ display: visibility }}>
        <p>{this.props.destination} まで</p>
        <h3>{this.props.time} 分　|　{this.props.distance} km</h3>
      </div>
    );
  }
}

RouteInfo.propTypes = {
  route: React.PropTypes.bool,
  time: React.PropTypes.number,
  distance: React.PropTypes.number,
  destination: React.PropTypes.string
};

RouteInfo.displayName = 'RouteInfo';

export default RouteInfo;