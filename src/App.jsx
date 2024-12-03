import Header from './componets/Header.jsx'
import Meals from './componets/Menu.jsx';
import { CartContextProvider } from './store/cartContext.jsx';

function App() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <Meals />        
       </CartContextProvider>
    </>
  );
}

export default App;
