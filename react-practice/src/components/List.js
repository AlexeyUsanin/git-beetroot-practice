import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    // this.makeRequest()
  }


  makeRequest() {
    fetch('https://api.pexels.com/v1/search?query=people', {
      headers: {
        Authorization: '563492ad6f9170000100000160238dad309c4839acdead7607ed24d3',
      }
    })
  }

  componentDidMount() {
    this.makeRequest()
  }

  render() {
    return (
      <ul>



      </ul>
    )
  }
}

export default List;
