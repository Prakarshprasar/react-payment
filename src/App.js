import logo from './logo.svg';
import './App.css';
import Voucher from './components/voucher';

function App() {
  return (
    <div className="App">

      <Voucher color={"rgb(255,165,0)"} date={"28/10/2020"} btntext={"Case Study"} txt1={"Amazon Gift Pay"} dextop={"Dextop - Mobile"} clogo={"https://www.freeiconspng.com/uploads/amazon-icon-6.png"}/>
      
      <Voucher color={"rgb(245,245,245)"} date={"17 Sep 2020"} btntext={"Case Study"} txt1={"Apple Gift Payment"} dextop={"MacOs - Mobile"} clogo={"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"}/>

    </div>
  );
}

export default App;
