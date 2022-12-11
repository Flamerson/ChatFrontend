import './App.css';

import Main from './pages/main/index';
import Login from './pages/login';

function App() {

  var user = "loged"

  return (
    <div>
      {user === "loged"?
      <Main />
      :
      <Login />
      }
    </div>
  );
}

export default App;
