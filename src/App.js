import logo from './logo.svg';
import './App.css';
import MenuKontak from './page/MenuKontak';
import MenuProduct from './page/MenuProduct';
import MenuTentangkami from './page/MenuTentangKami';
import MenuUtama from './page/MenuUtama';


function App() {
  return (
    <div >
      <h1>Ini Halaman Untuk Header</h1>
      <MenuUtama />
      <MenuProduct />
      <MenuKontak />
      <MenuTentangkami />
      <h1>Ini Halaman Untuk Footer</h1>
    </div>
  );
}

export default App;
