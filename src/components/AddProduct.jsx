import styled from "styled-components";
import { Badge } from "antd";

const AddProduct = () => {
  return (
    <AddProductWrapper>
      <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"center"}}>
        <input type="checkbox" name="" id="" />
        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="picture" width={50} height={50}/>
        <div style={{display:"flex",flexDirection:"column",gap:"10px",alignItems:"start",justifyContent:"center"}}>
          <div style={{lineHeight:".5"}}>
            <p>Product description</p>
            <p>Item number:2343</p>
          </div>
          <div style={{display:"flex",gap:"20px"}}>
            <span style={{display:"flex",gap:"5px"}}>
                <b>asdjsadh</b>
                <button>123</button>
            </span>
            <span style={{display:"flex",gap:"5px",justifyContent:"center",alignItems:"center"}}>
                <b>status</b>
                <span style={{
          backgroundColor: '#52c41a',
          width:"15px",
          height:"15px",
          borderRadius:"100%"
        }}></span>
                
            </span>
          </div>
        </div>
      </div>
      <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"center"}}>
        <button style={{border:"none"}}>-</button>
        <button>1</button>
        <button style={{border:"none"}}>+</button>
      </div>
      <div>
        <h4>3245 rph.</h4>
      </div>
    </AddProductWrapper>
  );
};

export default AddProduct;

const AddProductWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
  padding: 10px;
`;
