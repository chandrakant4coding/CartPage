import styled from "styled-components";

const CartTotal = () => {
  return (
    <CartTotalWrapper>
      <div className="upperSection">
      <header style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Cart Payment:</header>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}><span>payment one</span> <span>20</span></div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}><span>payment two</span> <span>20</span></div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}><span>payment three</span> <span>20</span></div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <input type="text" />
        <p>coupon</p>
      </div>

      </div>
      <div className="lowerSection">
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <span>Total:</span>
          <span>13377 rph.</span>
        </div>
       <button style={{width:"100%",padding:"10px",backgroundColor:"green",color:"#fff",border:"none",borderRadius:"10px"}}>Proceed for payment</button>
      </div>
    </CartTotalWrapper>
  );
};

export default CartTotal;

const CartTotalWrapper = styled.div`
box-sizing: border-box;
  width: 300px;
  height: 400px;
  box-shadow: 0 5px 5px grey;
  .upperSection {
    box-sizing: border-box;
    background-color: #fff;
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* align-items: center; */
    /* justify-content: center; */
    padding: 20px;
  }
  .lowerSection {
    box-sizing: border-box;
    background-color: #fdf6bf;
    width: 100%;
    height: 40%;
    padding: 20px;
    display:flex;
    flex-direction: column;
    gap:20px;
    justify-content: center;
    /* align-items: center; */
  }
`;
