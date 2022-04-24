import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./components/Loader/Loader";
import Counter from "./components/Counter/Counter"
import CounterValue from "./components/CounterValue/CounterValue";

const maxCount = 1000;

const App = () => {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    let getData = async () => {
      const response = await axios.get(
        `https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/Sajan.json`
      );
      try {
        let value = response.data;
        if (value) setCount(value);
        else setCount(1);
      } catch (error) {
        alert(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (flag) {
      setLoading(true);
      let saveData = async () => {
        const response = await axios.put(
          `https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json`,
          {
            sajan: count,
          }
        );
        try {
          let value = response.data;
    
          setLoading(false);
        } catch (error) {
          alert(error);
          console.error("Error!", error);
          setLoading(false);
        }
      };
      saveData();
    } else setFlag(true);
  }, [count]);

  const handleChange = (event) => {
    let inputValue = event.target.value;
    if (inputValue === "") inputValue = 0;
    inputValue = parseInt(inputValue);
    if (inputValue > maxCount) return;
    setCount(inputValue);
  };

  const handleDecCount = () => {
    setCount(count - 1);
  };
  const handleIncCount = () => {
    if (count >= maxCount) return;
    setCount(count + 1);
  };

  return (
    <div className="App">
      <div className="Artboard">
        {loading && <Loader />}
        <Counter
          count={count}
          handleChange={handleChange}
          handleDecCount={handleDecCount}
          handleIncCount={handleIncCount}
        />
        <CounterValue count={count} />
      </div>
    </div>
  );
};

export default App;
