import Player from './Player';
import Board from './Board';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Main = ({
  handleXorO,
  handleInputChange,
  handleSaveButton,
}) => {

  const playerName = useSelector((state) => state.playerName)
  const inputValue = useSelector((state) => state.inputValue)

  return (
    <main className="bg-amber-300 w-[40rem] absolute left-1/2 transform -translate-x-1/2 mt-52 rounded-lg">
      <div className="flex h-14 font-kanit font-semibold justify-evenly pt-3">
        <Player
          id="X"
          playerName={playerName.playerX}
          inputValue={inputValue.inputX}
          handleInputChange={handleInputChange}
          handleSaveButton={handleSaveButton}
        />
        <Player
          id="O"
          playerName={playerName.playerO}
          inputValue={inputValue.inputO}
          handleInputChange={handleInputChange}
          handleSaveButton={handleSaveButton}
        />
      </div>
      <Board
        handleXorO={handleXorO}
      />
    </main>
  );
};

Main.propTypes = {
  playerName: PropTypes.shape({
    playerX: PropTypes.string.isRequired,
    playerO: PropTypes.string.isRequired,
  }),
  handleInputChange: PropTypes.func,
  handleSaveButton: PropTypes.func,
  handleXorO: PropTypes.func,
};

export default Main;
