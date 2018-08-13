import React, { Component } from 'react';

let ctx;

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.state = {};
  }

  componentDidMount() {
    ctx = this.canvas.current.getContext('2d');
  }

  draw(event) {
    ctx.strokeStyle = 'black';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 5;
    ctx.lineTo(event.pageX, event.pageY);
    event.preventDefault();
    ctx.stroke();
  }

  render() {
    return (
      <canvas
        ref={this.canvas}
        width={600}
        height={600}
        onMouseMove={(e) => this.draw(e)}
        style={{
          border: '2px solid black',
        }}
      />
    );
  }
}

export default Canvas;
