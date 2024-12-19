import { useDispatch, useSelector } from 'react-redux';
import Log from './Log';
import Main from './Main';
import { calculateWinner } from '../CalculateWinner';
import { initialBoard } from '../CalculateWinner';
import Dialog from './Dialog';
import {
  setInputValue,
  setPlayerName,
  setPlayerMove,
  setGameTurn,
  setLogData,
  setWinner,
} from '../redux/actions';

const TicTacToe = () => {
  const dispatch = useDispatch();

  function handleInputChange(e, id) {
    dispatch(setInputValue(id, e.target.value));
  }

  const handleSaveButton = (id) => {
    dispatch(setPlayerName(id));
  };

  const playerMove = useSelector((state) => state.playerMove);
  const gameTurn = useSelector((state) => state.gameTurn);

  function handleXorO(row, col) {
    const newBoard = playerMove.map((row) => [...row]);
    if (newBoard[row][col] === null) {
      if (gameTurn) {
        newBoard[row][col] = 'X';
        dispatch(setPlayerMove(newBoard));
        dispatch(setLogData(row, col));
        dispatch(setGameTurn(false));
      } else {
        newBoard[row][col] = 'O';
        dispatch(setPlayerMove(newBoard));
        dispatch(setLogData(row, col));
        dispatch(setGameTurn(true));
      }
    }
    const flatBoard = newBoard.flat();
    dispatch(setWinner(calculateWinner(flatBoard)));
  }

  function resetBoard() {
    dispatch(setPlayerMove(initialBoard));
    dispatch(setWinner(''));
  }

  return (
    <section className="bg-amber-200 h-lvh relative">
      <h1 className="font-kanit font-extrabold text-6xl drop-shadow-xl text-cyan-700 absolute left-1/2 transform -translate-x-1/2 mt-6">
        Tic-Tac-Toe
      </h1>
      <img
        className="absolute left-1/2 transform -translate-x-1/2 mt-20 bg-contain w-[100px] height-[100px]"
        src="/tic-tac-toe.png"
        alt="tic-tac-toe image"
      />
      <Main
        handleXorO={handleXorO}
        handleInputChange={handleInputChange}
        handleSaveButton={handleSaveButton}
      />
      <Log />
      <Dialog resetBoard={resetBoard} />
    </section>
  );
};

export default TicTacToe;
