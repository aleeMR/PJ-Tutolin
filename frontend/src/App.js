import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from "./AppRouter";
import AuthProvider from "./auth/AuthProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
