import { useEffect, useState } from 'react';
import './App.css';
import CustomInput from './CustomInput'

function App() {

  const [textSearch, setTextSearch] = useState('Hello anh em')

  useEffect(() => {
    console.log(textSearch)
  })

  return (
    <div className="App" style={{ paddingTop: '15px' }}>
      <CustomInput
        value={textSearch}
        onChange={(text) => setTextSearch(text)}
      />
      <hr></hr>
      <h3>{textSearch}</h3>
    </div>
  );
}

export default App;
