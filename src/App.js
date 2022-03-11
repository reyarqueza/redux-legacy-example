import React from "react";
import { connect } from "react-redux";
import { fetchCoinList } from "./actions";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    const { fetchCoinList } = this.props;

    fetchCoinList();
  }

  render() {
    const { coinList } = this.props;
    console.log("coinList", coinList);
    return (
      <div className="App">
        <header>
          <h1>React Redux Thunk Example, legacy style.</h1>
        </header>
        <table border="1">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {coinList &&
              coinList.map((coin) => {
                return (
                  <tr key={coin.id}>
                    <td>{coin.name}</td>
                    <td>
                      {coin.quote && coin.quote.USD && coin.quote.USD.price}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coinList: state.coinList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCoinList: () => dispatch(fetchCoinList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
