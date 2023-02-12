import "./App.css";
import { useState } from "react";

function App() {
  const [questions, setqutions] = useState([
    {
      numb: 1,
      question: "What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language",
      ],
    },
    {
      numb: 2,
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      numb: 3,
      question: "What does PHP stand for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      numb: 4,
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      numb: 5,
      question: "What does XML stand for?",
      answer: "eXtensible Markup Language",
      options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language",
      ],
    },
  ]);
const [indexNumber,setindexNumber] = useState(0)
const [marks,setMarks] = useState(0)
const [result,setResult] = useState(false)

  const checkAns = (userSelection,correctAns) =>{
    console.log("userSelected====>", userSelection);
    console.log("correcAns====>", correctAns);

    if(userSelection == correctAns){
      setMarks(marks + 1)
    }
    if (indexNumber + 1 == questions.length) {
      setResult(true);
    }

    setindexNumber(indexNumber + 1);
  };
  // const [isOn, setIsOn] = useState(false);
      {/* <div>
          <button onClick={() => setIsOn(!isOn)}>{isOn ? "on" : "off"}</button>
          {isOn && <h1>ON</h1>}
        </div> */}

  return ( 
    <div>
      <div>

      {result ? ( <h1 className="score">Your Marks Is: {marks}</h1>) : <div>

       <h1 className="question">{questions[indexNumber].question}</h1>
       <hr/>
       <div className="bg">
                {questions[indexNumber].options.map((e, i) => {
                  return (
                    <div className="btnPrent" key={i}>
                      <br/>
                      <button className="btn"
                        onClick={() => checkAns(e, questions[indexNumber].
                          answer)}>
                        {e}
                        
                      </button>
                      <hr/>
                    </div>
                  );
                })}
              </div>
            </div>
          }
        </div>
    </div>
  )
}

export default App;
