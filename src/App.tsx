import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostJobsScreen from "./postJob";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/postJobs" element={<PostJobsScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
