import { useState } from 'react'

function App() {
  const [favColor, setFavColor] = useState('Purple')
  const [favFood, setFavFood] = useState('Tacos')

  setTimeout(() => {
    setFavColor("Green");
  }, 5000)

  setTimeout(() => {
    setFavFood("Rice");

  }, 5000)
  return (
    <div className="App">
    <p>My favorite Color is { favColor }</p>
    <p>My favorite food is { favFood }</p>
    </div>
  );
}

export default App;
