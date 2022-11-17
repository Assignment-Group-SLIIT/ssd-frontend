import logo from './logo.svg';
import './App.scss';
import { RoutesComponent } from './routes/RoutesComponent';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <RoutesComponent />
    </>
  );
}

export default App;
