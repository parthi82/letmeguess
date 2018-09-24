import React, { Component } from 'react';

let ctx;

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.isDrawing = false;
    this.canvas = React.createRef();
    this.state = {};
  }

  componentDidMount() {
    ctx = this.canvas.current.getContext('2d');
  }

  getX(event) {
		if (event.pageX === undefined) {
			return event.targetTouches[0].pageX - this.canvas.offsetLeft;
		}
		else {
			return event.pageX - this.canvas.offsetLeft;
		}
  }
  
  getY(event) {
		if (event.pageY === undefined) {
			return event.targetTouches[0].pageY - this.canvas.offsetTop;
		}
		else {
			return event.pageY - this.canvas.offsetTop;
		}
  }
  
  start(event) {
    this.isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(this.getX(event), this.getY(event));
    event.preventDefault();
  }

  end(event) {
		if (this.isDrawing) {
			ctx.stroke();
			ctx.closePath();
			this.isDrawing = false;
		}
		event.preventDefault();
	}

  draw(event) {
    if (this.isDrawing) {
      ctx.strokeStyle = 'black';
      ctx.lineJoin = 'round';
      ctx.lineWidth = 5;
      ctx.lineTo(event.pageX, event.pageY);
      event.preventDefault();
      ctx.stroke();
    }
  }

  render() {
    return (
      <canvas
        ref={this.canvas}
        width={600}
        height={600}
        onMouseUp={(e) => this.end(e)}
        onMouseDown={(e) => this.start(e)}
        onMouseMove={(e) => this.draw(e)}
        style={{
          border: '2px solid black',
        }}
      />
    );
  }
}

export default Canvas;
