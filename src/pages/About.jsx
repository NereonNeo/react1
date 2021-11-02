import { useSelector } from 'react-redux';

const About = () => {
  const state = useSelector((state) => state.app.todos);
  return (
    <div>
      <h1>About us Page</h1>
      {state.map((s) => {
        return <p>{s}</p>;
      })}
    </div>
  );
};

export default About;
