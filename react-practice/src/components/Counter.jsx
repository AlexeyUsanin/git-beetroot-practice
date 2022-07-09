import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    // this.count = 0;
    this.state = {
      count: 0,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log('event', event);

    this.setState(state => {
      return { count: ++state.count }
    })
  }

  render() {
    const { title } = this.props;
    const { count } = this.state;
    console.log('count', count);
    return (
      <div>
        <h3>{title}</h3>
        <button type='button' onClick={(e) => this.handleClick(e)}>Click</button>
        <span>{count}</span>
      </div>
    )
  }
}

export default Counter;