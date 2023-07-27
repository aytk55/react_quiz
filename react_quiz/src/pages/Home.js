import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const difficulties = ["easy", "medium", "hard"];
  const amounts = ["1","2","3","4","5","6","7","8","9","10"];
  const [amount,setAmount] = useState(null);
  const [difficulty, setDifficulty] = useState('');
  const navigate=useNavigate();
  const handleDiffChange = (e) => {
    if (e.target.id === "1") {
      setDifficulty(e.target.value);
      
    } else if (e.target.id === "2") {
      setAmount(e.target.value);
      
    }
  }
  useEffect(() => {
    console.log(difficulty);
    console.log(amount);
  }, [amount,difficulty]);
  
const nextPage=()=>{
    if(amount && difficulty){
    navigate(`/quiz/${amount}/${difficulty}`);}
}

  return (
    <div><h1>Please choose a difficulty</h1>
      <section onChange={handleDiffChange}>
        {difficulties.map((difficult, index) => (
          <div key={`difficulty-${index}`}>
            <input id="1" type="radio" name="difficulty" value={difficult} /> {difficult}
          </div>
        ))}
      </section><h1>Please choose amount</h1>
      <section onChange={handleDiffChange}>
        {amounts.map((amount, index) => (
          <div key={`amount-${index}`}>
            <input id="2" type="radio" name="amount" value={amount} /> {amount}
          </div>
        ))}
      </section>
      <button onClick={nextPage}>Star Quiz</button>
    </div>
  );
}

export default Home;






