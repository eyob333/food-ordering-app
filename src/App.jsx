import Header from './componets/Header.jsx'
import Meals from './componets/Menu.jsx';
import { CartContextProvider } from './store/cartContext.jsx';
import Cart from './componets/Cart.jsx';
import {UserProgressContextProvider} from './store/userProgressContext.jsx';
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />      
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
