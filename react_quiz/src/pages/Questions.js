import { useState,useEffect } from "react"

import { useNavigate, useParams } from "react-router-dom";

const Questions=()=>{
    const[questionn,setQuestion]=useState('');
    const[count,setCount]=useState(0);
    const[score,setScore]=useState(0);
    const{amount,difficulty}=useParams();
    const navigate=useNavigate();

    const shuffleArray=(array)=>{
        return [...array].sort(()=>Math.random-0.5)
    }
const handleAnswer=(e)=>{
    if(e.target.value===questionn[count].correct_answer){
        setScore(score+300);
    }
    console.log(score);
    console.log(questionn[count].correct_answer);
    setCount(count+1);
    
}
const getQuestions = async () => {
    const response = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`
    );
      
    const questions = await response.json();
    const formatted= questions.results.map((dt=>({
        ...dt,
        answers:shuffleArray([...dt.incorrect_answers,dt.correct_answer])
    })));
    setQuestion(formatted);
    console.log(questionn);
   
};
useEffect(() => {
    getQuestions();
    
  }, [amount, difficulty]);

  if (count >= questionn.length) {
    navigate(`/scoree/${score}`);
  }


    return(<div>
        <h1>{questionn[count]?.question}</h1>
        {questionn[count]?.answers?.map((answer,i)=>(
        <button onClick={handleAnswer} key={i} value={answer}>{answer}</button>))}
        </div>)
}
export default Questions