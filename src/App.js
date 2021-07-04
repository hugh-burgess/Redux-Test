import "./App.css";
import { connect } from "react-redux";
import { takeAction } from "./redux/actions";

function App({ makeItHappen, myCount }) {
  return (
    <div className="App">
      <button onClick={makeItHappen}>{myCount}</button>
    </div>
  );
}

const mapStateToProps = (state) => ({ myCount: state.count });
const mapDispatchToProps = { makeItHappen: takeAction };

export default connect(mapStateToProps, mapDispatchToProps)(App);
