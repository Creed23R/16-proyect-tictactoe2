
import React from 'react'
import xOutline from '../assets/icon-x-outline.svg'
import oOutline from '../assets/icon-o-outline.svg'
import { TURNS } from '../constans/constans'

const Square = ({ winner, turn, updateBoard, index, children }) => {

  const handleClick = () => {
    updateBoard(index);
  }

  const vacio = !children && !winner;

  return (
    <div className='square' onClick={handleClick}>
      <div className='icon'>
        {vacio &&
          <img className='outline' src={
            turn === TURNS.X ? xOutline :
              oOutline
          } alt="" />}
        <img src={children} alt="" />
      </div>
    </div>
  )
}

export default Square