import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import AddProduct from './components/AddProduct';
import CartTotal from './components/CartTotal';


function App() {
  return (
    <AppWrapper >
      <div style={{backgroundColor:"#fff",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingRight:"20px",paddingBottom:"20px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",borderBottom:".5px solid #bdbdbd"}}>
  <div style={{display:"flex",gap:"10px",justifyContent:"center",alignItems:"center"}}><input type="checkbox" name="" id="" />
  <p>Items detail</p>
  </div>

<div style={{display:"flex",gap:"10px",justifyContent:"center",alignItems:"center"}}>
  djfjkshkhsdkfsjkdf X
</div>
</div>
<AddProduct/>
<AddProduct/>
<AddProduct/>
<AddProduct/>
      </div>
      <div style={{display:"flex",justifyContent:"center",height:"auto"}}>
<CartTotal/>
      </div>   
    </AppWrapper>
  );
}

export default App;

const AppWrapper=styled.div`
display: grid;
grid-template-columns:1fr 400px;
padding:30px;

`
