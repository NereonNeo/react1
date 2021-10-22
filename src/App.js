import {useState,useEffect} from 'react'
import './App.css';
import { Card } from './components/Card';
function App() {
  const [state,setState] = useState(1);
  useEffect(() => {
    console.log('Ishladi');
  }, [])
  
  return (
    <div className='App'>
      <div className="container">
        <Card
          color="blue"
          text="Yakub Bobur Amirxon"
          radius="10px"
          img='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/a376f042-1454-48ba-ba3f-74bb65102703.jpg'
        />
        <Card
          color="red"
          text=" Yakub Bobur AmirxonYakub Bobur AmirxonYakub Bobur AmirxonYakub Bobur Amirxon"
          radius="50px"
          img='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/5e934dc3-6f66-4745-bac1-6fbde0d4f871.jpg'
        />
        <button onClick={()=> setState('Yakub')}>
          Change {state}
        </button>

      </div>
    </div>
  );
}

export default App;
