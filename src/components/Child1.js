import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { resetMessage, setMessage } from '../redux/slices/messageSlice';

function Child1() {
    const inputRef=useRef(null);
    const dispatch =  useDispatch();

    function handleSubmit(e)
    {
        e.preventDefault();
        const inputTextValue=inputRef.current.value;
        dispatch(setMessage(inputTextValue));
    }
    function handleReset(e)
    {
      e.preventDefault();
      dispatch(resetMessage())
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' ref={inputRef} />
            <input type='submit' onClick={handleSubmit}/>
            <button onClick={handleReset}>Reset</button>
        </form>
    </div>
  )
}

export default Child1