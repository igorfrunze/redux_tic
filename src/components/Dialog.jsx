import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setGameTurn, clearLog } from '../redux/actions';

const Dialog = ({ resetBoard }) => {
  const dialogRef = useRef(null);
  const dispatch = useDispatch();
  const winner = useSelector((state) => state.winner);
  const playerName = useSelector((state) => state.playerName);
  const logData = useSelector((state) => state.logData);

  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute(open)
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && dialogRef.current?.hasAttribute('open')) {
        resetBoard();
        dialogRef.current.close();
        dispatch(setGameTurn(true));
        dispatch(clearLog());
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  if (winner || logData.length === 9) {
    toggleDialog();
  }

  const playerWinner = winner === 'X' ? playerName.playerX : playerName.playerO;

  return (
    <>
      {logData.length === 9 && !winner ? (
        <dialog
          className="bg-amber-300 relative w-[500px] h-[500px] mt-64 rounded-lg z-20"
          ref={dialogRef}
        >
          <div className="flex flex-col text-center mt-36">
            <h1 className="text-slate-500 text-5xl flex flex-col gap-4 mb-24">
              Draw!!!
            </h1>
            <form>
              <button
                className="rounded-md border border-slate-600 px-4 py-2 text-center text-sm mb-1 transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800"
                onClick={(e) => {
                  e.preventDefault();
                  resetBoard();
                  if (dialogRef.current) {
                    dialogRef.current.close();
                    dispatch(setGameTurn(true));
                    dispatch(clearLog());
                  }
                }}
              >
                RESET
              </button>
            </form>
          </div>
        </dialog>
      ) : (
        <dialog
          className="bg-amber-300 relative w-[500px] h-[500px] mt-64 rounded-lg z-20"
          ref={dialogRef}
        >
          <div className="flex flex-col text-center mt-36">
            <h1 className="text-slate-500 text-5xl flex flex-col gap-4 mb-24">
              Congratulations!!! <br />
              <span>You Won</span>
              {playerWinner ? (
                <span>{playerWinner}</span>
              ) : (
                <span>{winner}</span>
              )}
            </h1>
            <form>
              <button
                className="rounded-md border border-slate-600 px-4 py-2 text-center text-sm mb-1 transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800"
                onClick={(e) => {
                  e.preventDefault();
                  resetBoard();
                  if (dialogRef.current) {
                    dialogRef.current.close();
                    dispatch(setGameTurn(true));
                    dispatch(clearLog());
                  }
                }}
              >
                RESET
              </button>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
};

Dialog.propTypes = {
  resetBoard: PropTypes.func,
};

export default Dialog;
