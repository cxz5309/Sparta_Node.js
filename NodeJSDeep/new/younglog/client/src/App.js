import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

function App() {
  const callApi = async () => {
    axios.get('/api').then((res)=>
    {
      console.log(res.data);
    })
  }

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="App">
      test
    </div>
  );
}

export default App;
