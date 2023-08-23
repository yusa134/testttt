import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import CreateTask from './page/CreateTask';



function App() {

  return (
	<>
		<Router>
      <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/create-task" element={<CreateTask />} />
      </Routes>
    </Router>
	</>
  );
}

export default App;
