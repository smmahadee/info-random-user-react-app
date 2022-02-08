import { userInfoAction } from './store/index';
import { useDispatch } from "react-redux";

function App() {
  const dispatch  = useDispatch();
  return (
    <div className='App'>
      <h1>hello world</h1>
    </div>
  );
}

export default App;
