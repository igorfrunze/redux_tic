import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Board = ({ handleXorO }) => {
  const playerMove = useSelector((state) => state.playerMove);
  return (
    <div className="mt-6 mb-6 flex justify-center">
      <ul className="flex flex-col gap-3">
        {playerMove.map((row, rowIdx) => (
          <li key={rowIdx}>
            <ul className="grid grid-cols-3 gap-3 justify-center items-center text-center">
              {row.map((playerSymbol, colIdx) => (
                <li
                  key={colIdx}
                  className="w-40 h-40 bg-amber-500 flex justify-center text-center font "
                >
                  <button
                    onClick={() => handleXorO(rowIdx, colIdx)}
                    className="text-9xl cursor-pointer w-full h-full"
                  >
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

Board.propTypes = {
  handleXorO: PropTypes.func,
};

export default Board;
