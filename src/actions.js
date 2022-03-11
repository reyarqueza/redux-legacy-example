export const GET_COIN_LISTING = "GET_COIN_LISTING";

export function getCoinListing(coinList) {
  return {
    type: GET_COIN_LISTING,
    coinList,
  };
}

export function fetchCoinList() {
  return (dispatch) => {
    fetch("/api.json")
      .then((response) => response.json())
      .then((json) => {
        window.setTimeout(function () {
          dispatch(getCoinListing(json));
        }, 1000);
      });
  };
}
