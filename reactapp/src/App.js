import logo from './logo.svg';
import './App.css';

function App() {

  const [name,setName] = useState('');
  setName(e.target.value);
}

const handleSubmit = (e) => {
  e.preventDefault();
  setGreeting(`Hello,$(name)`);
}
  return (
    <div className="App">
      <div className="contents">
        <h3>Hey!!! Greeting</h3>
        <form onSubmit={handleSubmit} data-testid="form">
          <label data-testid="label">Enter name :</label>
          <input type="text" value={name} onChange={handleChange}/>
          <button type="submit"
    </div>
  );
}

export default App;
