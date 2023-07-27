import { useNavigate, useParams } from "react-router-dom";

const Score=()=>{
    const{score}=useParams();
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate("/");
    }
    return(<div>
    <div>Your score is : {score}</div>
    <button onClick={handleClick}>Play again </button></div>)
}
export default Score