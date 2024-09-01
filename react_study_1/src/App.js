import './App.css';
import Hello from './Hello';

function App() {
  const name = "Kevin"
  const user = {
    name: name,
    age: 10
  }
  return (
    <div className="App">
      <h1 style={{
        color: "black"
      }}>{user.name}</h1>
      <h1 style={{
        color: "black"
      }}>{user.age}</h1>
      <Hello/>
    </div>
  );
}

export default App;