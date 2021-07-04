import "./App.css";
import { connect } from "react-redux";
import { incrementCounter } from "./redux/actions";

function App({ countUp, myCount }) {
  return (
    <div className="App">
      <button onClick={countUp}>{myCount}</button>
    </div>
  );
}

const mapStateToProps = (state) => ({ myCount: state.count });
const mapDispatchToProps = { countUp: incrementCounter };

export default connect(mapStateToProps, mapDispatchToProps)(App);
