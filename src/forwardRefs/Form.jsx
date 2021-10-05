import React, { useRef, useState, useEffect } from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  // Hooks
  const [message, setMessage] = useState('');
  // -- side effects
  useEffect(() => {
    nameInputRef.current.focus();
  }, []);
  // -- refs
  const nameInputRef = useRef();
  const selectInputRef = useRef();

  const buttonOneRef = useRef();
  const buttonTwoRef = useRef();

  const handleOnChange = (num) => {
    const newStr = selectInputRef.current.value
      .split('')
      .map((letter, index) => {
        if (index < num) {
          return letter.toUpperCase();
        } else {
          return letter;
        }
      })
      .join('');

    console.log(newStr);
  };

  const getClickedButton = (e) => {
    if (e.target === buttonOneRef.current) {
      buttonOneRef.current.innerText = 'Wohoo';
      buttonTwoRef.current.innerText = 'Damnnn';
    } else {
      buttonOneRef.current.innerText = 'Damnnn';
      buttonTwoRef.current.innerText = 'Wohoo';
    }
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor='Name'>Name</label>
          <Input ref={nameInputRef} />
        </div>

        <select
          name='city'
          id='city'
          ref={selectInputRef}
          onChange={() => handleOnChange(4)}
        >
          <option value='kaunas'>Kaunas</option>
          <option value='vilnius'>Vilnius</option>
          <option value='klaipeda'>Klaipėda</option>
        </select>
      </form>

      <div>
        <Button text='Click me' action={getClickedButton} ref={buttonOneRef} />
        <Button
          text='No, click me'
          action={getClickedButton}
          ref={buttonTwoRef}
        />
        <Button text='Sup!' action={() => alert('SUP!!!')} />
      </div>
    </>
  );
};

export default Form;
