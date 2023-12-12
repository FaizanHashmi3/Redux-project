import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNotes, resetNotes } from '../redux/slices/noteSlice';

function CreateNotes() {
    const [title,setTitle]=useState('');
    const [desc,setDesc]=useState('');
    const dispatch=useDispatch();
    function handleSubmit(e)
    {
        e.preventDefault();
        dispatch(addNotes({
            id:nanoid(5),
            title,
            desc,
        }))
      

    }
   
    function handleReset(e)
    {
      e.preventDefault();
      dispatch(resetNotes());
     
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type='text' onChange={(e)=>setTitle(e.target.value)}/>
        <br/>
        <input type='text' onChange={(e)=>setDesc(e.target.value)}/><br/>
        <input type='submit' onClick={handleSubmit}/>
        <button onClick={handleReset}>ResetAll</button>
        </form>
        
    </div>
  )
}

export default CreateNotes;