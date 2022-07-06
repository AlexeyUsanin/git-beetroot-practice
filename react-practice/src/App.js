import './App.css';
import Greeting from './components/Greeting';
import Heading from './components/Heading';

const time = new Date().getHours();

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Petro" hour={time}>
          <Heading>
            Heading
          </Heading>
        </Greeting>
      </header>


    </div>
  );
}

export default App;
