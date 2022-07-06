
import Heading from "./Heading";

const Greeting = ({ name, hour, children }) => {
  let greeting = '';

  if (hour >= 6 && hour <= 12) {
    greeting = 'morning';
  } else if (hour >= 12 && hour <= 18) {
    greeting = 'day';
  } else {
    greeting = 'night';
  }

  return (
    <div>
      <Heading>
        Good {greeting}, {name}
      </Heading>

      {children}

    </div>
  )
}

export default Greeting;

