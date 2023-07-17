import React from 'react'
import xSvg from '../assets/icon-x.svg'
import oSvg from '../assets/icon-o.svg'
import restartSvg from '../assets/icon-restart.svg'
import { TURNS } from '../constans/constans'

const InfoGame = ({ turn, resetGame }) => {
  return (
    <div className='infoGame'>
      <div className="icons">
        <img src={xSvg} alt="" />
        <img src={oSvg} alt="" />
      </div>
      <div className="turns">
        <div className='turnsContainer'>
          <img src={
            turn === TURNS.X ? xSvg : oSvg
          } alt="" />
          <p>TURN</p>
        </div>
      </div>
      <div className="reset">
        <button onClick={resetGame}>
          <img src={restartSvg} alt="" />
        </button>
      </div>
    </div>
  )
}

export default InfoGame