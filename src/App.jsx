import { useState } from 'react'
import './App.css';

function App() {
    const [texto, setTexto] = useState([])

    const handleChange = (event) => {
      setTexto(event.target.value);
    }

    return (
        <div className='dib'>
          <div>
            <input type="text" onChange={handleChange} value={texto} />
          </div>
          <h3>Su Texto</h3>
          <p>
            {texto}
          </p>
        </div>
    );
}

export default App;
