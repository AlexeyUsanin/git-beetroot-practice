
import Heading from "./Heading";

const Greeting = ({ name, hour, children, show }) => {
  let greeting = '';

  if (hour >= 6 && hour <= 12) {
    greeting = 'morning';
  } else if (hour >= 12 && hour <= 18) {
    greeting = 'day';
  } else {
    greeting = 'night';
  }

  console.log('hour', hour)
  return (
    <div>
      {show ? (
        <Heading>
          Good {greeting}, {name}
        </Heading>
      ) : (
        <p>Nothing to show</p>
      )}

      {children}

    </div>
  )
}

export default Greeting;

