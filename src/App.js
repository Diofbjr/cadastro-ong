

import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    // AuthProvider: é um componente funcional que contém o conteúdo que estava no App.tsx, e passamos o children, 
    //ou seja, tudo que fica dentro desse provider será repassado no children
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer autoClose={3000} />
        <Routes/>
      </BrowserRouter>
    </AuthProvider>
    //BrowserRouter: é um componente responsável por informar a nossa aplicação que teremos um roteamento de componentes
  );
}

export default App;
