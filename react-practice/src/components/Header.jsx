import { Container } from 'react-bootstrap';
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Navigation />
      </Container>
    </header>
  )
}

export default Header;
