import { GET_COIN_LISTING } from "./actions";

export default function reducer(
  state = {
    version: 1,
  },
  action
) {
  switch (action.type) {
    case GET_COIN_LISTING:
      const coinList = Object.values(action.coinList.data);

      return {
        ...state,
        coinList,
      };
      break;

    default:
      return state;
  }
}
