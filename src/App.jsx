import { useState } from 'react'
import './App.css'
import Square from './components/Square'
import InfoGame from './components/InfoGame'
import Scores from './components/Scores'
import { TURNS, WINNERCOMBOS } from './constans/constans'
import confetti from 'canvas-confetti'
import Winner from './components/Winner'

function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })


  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    if(turnFromStorage) return turnFromStorage
    return TURNS.X;
  })
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNERCOMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }


  const updateBoard = (index) => {

    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)


    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      confetti();
    } else if (!newBoard.includes(null)) {
      setWinner(false)
    }
  }


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <>
      <InfoGame turn={turn} resetGame={resetGame} />
      <section className='game'>
        <div className='board'>
          {
            board.map((square, index) => {
              return (
                <Square winner={winner} turn={turn} key={index} index={index} updateBoard={updateBoard}>
                  {square}
                </Square>
              )
            })
          }
        </div>
      </section>
      <Scores />
      <Winner winner={winner} resetGame={resetGame} />
    </>
  )
}

export default App
