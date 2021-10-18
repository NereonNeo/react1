import './App.css';
import { Card } from './components/Card';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Card color="#f25516 " />
        <Card color="blue" />
        <Card color="green" />
        <Card color="yellow" />
      </div>
    </div>
  );
}

export default App;
