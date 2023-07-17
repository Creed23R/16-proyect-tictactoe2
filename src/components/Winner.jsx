import React from 'react'
import Square from './Square'

const Winner = ({ winner, resetGame }) => {

    return (
        winner != null && (
            <section className='winnerModal'>
                <div className='text'>
                    <h2>
                        {
                            winner === false
                                ? 'EMPATE'
                                : 'Ganó: '
                        }
                    </h2>
                    <header className='win'>
                        {winner === false ? (
                            <Square>🤣</Square>
                        )
                            : (winner && <Square>{winner}</Square>)}
                    </header>
                    <footer>
                        <button className='quit' onClick={resetGame}>Salir</button>
                        <button className='next' onClick={resetGame}>Siguiente Ronda</button>
                    </footer>
                </div>
            </section>
        )
    )
}

export default Winner