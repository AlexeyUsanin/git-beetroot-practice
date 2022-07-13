import React from "react";
import { Spinner } from 'react-bootstrap';
import Card from "./Card";

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      loading: false
    }
  }

  makeRequest() {
    this.setState({ loading: true })

    fetch(`https://api.pexels.com/v1/search?query=${this.props.value}&per_page=12`, {
      headers: {
        Authorization: '563492ad6f9170000100000160238dad309c4839acdead7607ed24d3',
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ data, loading: false }));
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.makeRequest()
    }
  }

  render() {
    const { data, loading } = this.state;
    console.log('this.props', this.props)
    return (
      loading ? (
        <div className="spinner">
          <Spinner animation="border" />
        </div>
      ) : (
        <div className="list">{
          data.photos && data.photos.map(({ id, url, photographer, src, alt }) => (
            <Card
              key={id}
              url={url}
              photographer={photographer}
              src={src}
              alt={alt}
            />
          ))}
        </div>
      )
    )
  }
}

export default List;
