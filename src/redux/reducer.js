import { initialBoard } from '../CalculateWinner';

export const initialState = {
  playerMove: initialBoard,
  gameTurn: true,
  winner: '',
  playerName: {
    playerX: '',
    playerO: '',
  },
  inputValue: {
    inputX: '',
    inputO: '',
  },
  logData: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLAYER_MOVE': {
      return { ...state, playerMove: action.payload };
    }
    case 'SET_GAME_TURN': {
      return { ...state, gameTurn: action.payload };
    }
    case 'SET_WINNER': {
      return { ...state, winner: action.payload };
    }
    case 'SET_PLAYER_NAME': {
      const id = action.payload;
      return {
        ...state,
        playerName: {
          ...state.playerName,
          [id === 'X' ? 'playerX' : 'playerO']:
            id === 'X' ? state.inputValue.inputX : state.inputValue.inputO,
        },
      };
    }
    case 'SET_INPUT_VALUE': {
      const { id, value } = action.payload;
      return {
        ...state,
        inputValue: {
          ...state.inputValue,
          [id === 'X' ? 'inputX' : 'inputO']: value,
        },
      };
    }
    case 'SET_LOG_DATA': {
      const { row, col } = action.payload;
      const newboard = state.playerMove;
      if (newboard[row][col] === 'X') {
        return { ...state, logData: [...state.logData, `X: ${row}, ${col}`] };
      }
      return { ...state, logData: [...state.logData, `O: ${row}, ${col}`] };
    }
    case 'CLEAR_LOG': {
      return {...state, logData: []}
    }
    default:
      return state;
  }
};
