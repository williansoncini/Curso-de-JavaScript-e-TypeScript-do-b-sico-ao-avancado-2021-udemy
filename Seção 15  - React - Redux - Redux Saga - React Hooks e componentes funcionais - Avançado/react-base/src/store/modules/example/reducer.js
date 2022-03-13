import * as types from '../types';

const initalState = {
  botaoClicado: false,
};

// eslint-disable-next-line default-param-last
export default function (state = initalState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO: {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    default:
      return state;
  }
}
