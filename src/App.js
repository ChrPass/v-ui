import logo from './logo.svg';
import MainLayout from "./Components/MainLayout/MainLayout"
import StateProvider from "./Components/StateProvider"
import Products from "./pages/Products";
import reducer, { initialState } from "./utils/reducer";
import './App.css';

function App() {
  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <MainLayout>
        <Products />
      </MainLayout>
    </StateProvider>
  );
}

export default App;
