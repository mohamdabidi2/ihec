import React from 'react'
import './chapGest.css'
import ChapGestData from '../../../Data/ChapGestData';
import GestCard from './GestCard';

export default function chapGest() {
  const element = ChapGestData.map(Gest => {
    return (
      <GestCard 
      url={Gest.url}
      id={Gest.id}
      name={Gest.name}
      />
    )
  })
  return (
<>

    <div className='chapContainer'>
        {element}
    </div>
    </>
  );
}
