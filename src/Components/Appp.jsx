import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./Join";
import Chat from "./Chat";

function App() {
  return (
    <Router>
      <Route exact path="/" element={<Join/>} />
      <Route path="/chat" element={<Chat/>} />
    </Router>
  );
}

export default App;
