import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import List from "../components/List";

class Homepage extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  handleChange(event) {
    console.log('event', event)
    this.setState({ value: event.target.value });
  }

  render() {
      return (
        <Container>
          <h1>Homepage</h1>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Search Photos</Form.Label>
              <Form.Control value={this.state.value} onChange={(event) => this.handleChange(event)} type="text" placeholder="Type something..." />
            </Form.Group>
          </Form>

        {/* <form>
          <Input label="Search" name="search" value={this.state.value} onChange={(event) => this.handleChange(event)} />
        </form> */}
        <List value={this.state.value} />
      </Container>
    )
  }
}

export default Homepage;
