import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNotes } from '../redux/slices/noteSlice';

function ListNotes() {
    const notes=useSelector(state=>state.noteReducer.notes);
    const dispatch=useDispatch();
  return (
    <div>
        {
             notes.map((note)=>
             {
                return (<div style={{border:"2px solid grey",borderRadius:"10px",margin:"0.5rem"}}>
                        {note.id}
                       <h2>{note.title}</h2> 
                        <h3>{note.desc}</h3>
                        <button onClick={()=>dispatch(deleteNotes(note.id))}>delete</button>
                </div>)
     
             })
        }
       

    </div>
  )
}

export default ListNotes;