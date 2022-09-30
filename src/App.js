import { useState, useEffect } from "react";
import FormattedTime from "./Components/FormattedTime/FormattedTime";
import Button from './Components/Button/Button';
import Container from "./Components/Container/Container";

const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 10))
  };

  const stop = () => {
    clearInterval(timer);
    setTimer();
  }

  const reset = () => {
    setTime(0);
    setTimer(null);
  }

  useEffect(() => {
    return () => {
       if(timer) clearInterval(timer);
    };
  }, []);


  // reset usuwa wartość
  return (
    <Container>
      <FormattedTime time={time} />
        <Button value={start}>start</Button>
        <Button value={stop}>stop</Button>
        <Button value={reset}>reset</Button>
    </Container>
  );
};

export default App;
