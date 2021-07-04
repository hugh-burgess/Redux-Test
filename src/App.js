import "./App.css";
import { connect } from "react-redux";
import { takeAction } from "./redux/actions";

function App({ countUp, myCount }) {
  return (
    <div className="App">
      <button onClick={countUp}>{myCount}</button>
    </div>
  );
}

const mapStateToProps = (state) => ({ myCount: state.count });
const mapDispatchToProps = { countUp: takeAction };

export default connect(mapStateToProps, mapDispatchToProps)(App);
