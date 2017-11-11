import React, { Component } from 'react';
import hljs from 'highlight.js';

class Highlight extends Component {
  componentDidMount() {
    hljs.highlightBlock(this.instance);
  }

  componentDidUpdate() {
    hljs.highlightBlock(this.instance);
  }

  render() {
    const { children, className, style } = this.props;
    return (
      <div>
        <pre>
          <code
            ref={(instance) => { this.instance = instance; }}
            className={className}
            style={style}
          >
            {children}
          </code>
        </pre>
      </div>
    );
  }
}

export default Highlight;
