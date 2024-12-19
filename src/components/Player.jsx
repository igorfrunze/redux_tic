import PropTypes from 'prop-types';


function Player({
  id,
  inputValue,
  playerName,
  handleInputChange,
  handleSaveButton,
}) {


  return (
    <div className="flex gap-3 mt-4 justify-center ">
      {playerName ? (
        <>
          <span className="text-center text-gray-600">{playerName}</span>
          <span>{id}</span>
          <button
            className="rounded-md border border-slate-600 px-4 text-center text-sm mb-1 transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800"
            onClick={() => handleSaveButton(id)}
          >
            Edit
          </button>
        </>
      ) : (
        <>
          <input
            id={id}
            className="h-6 w-36 rounded-lg bg-amber-200 text-zinc-400 pl-3 focus:outline-none "
            placeholder="Enter your name"
            type="text"
            value={inputValue}
            onChange={(e) => handleInputChange(e, id)}
            onKeyDown={(e) => e.key === 'Enter' && handleSaveButton(id)}
          />
          <span>{id}</span>
          <button
            className="rounded-md border border-slate-600 px-4 text-center text-sm mb-1 transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800"
            onClick={() => handleSaveButton(id)}
          >
            Save
          </button>
        </>
      )}
    </div>
  );
}

Player.propTypes = {
  id: PropTypes.string,
  playerName: PropTypes.string,
  inputValue: PropTypes.string,
  handleInputChange: PropTypes.func,
  handleSaveButton: PropTypes.func,
};

export default Player;
