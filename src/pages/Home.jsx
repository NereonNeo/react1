import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../redux/actions';

const Home = () => {
  const [state, setstate] = useState('');
  const [store, setStore] = useState([]);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Welcome to Pizza</h1>
      <input
        placeholder="Task name"
        value={state}
        onChange={(e) => setstate(e.target.value)}
      />
      <button onClick={() => setStore((prev) => [...prev, state])}>Add</button>
      {store.map((e) => (
        <p>{e}</p>
      ))}
    </div>
  );
};

export default Home;
