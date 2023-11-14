import React, { useState } from "react";
import Header from "../components/Header";
import { Auth, userCollaction } from "../firebase/firebase";

function ProfilePage(props) {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "Musun deer mungun ayag ter yu we",
      options: [, "Ger", "Nar", "Sar"],
      correctAnswer: "Sar",
    },
    {
      question: "mongol heden aimg tai we ",
      options: ["21", "34", "23", "55"],
      correctAnswer: "21",
    },
   
  ];

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleAnswerClick = (selectedAnswer) => {
    const currentQuestionObj = questions[currentQuestion];

    if (selectedAnswer === currentQuestionObj.correctAnswer) {
     
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
   
      alert(`Quiz Complete! Your Score: ${score}/${questions.length}`);
      setQuizStarted(false);
    }
  };

  return (
    <div style={{ backgroundColor: "#F5F6A", backgroundSize: "cover", width: "100%", height: "100vh" }}>
      <Header user={props.user} darkTheme={true} />
      <div style={{ background: "brown", height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ border: "3px solid #58B8D9 ", height: "70%", width: "30%", padding: "20px" }}>
          {quizStarted ? (
            <div>
              <h3>{questions[currentQuestion].question}</h3>
              <ul>
                {questions[currentQuestion].options.map((option, index) => (
                  <li key={index} onClick={() => handleAnswerClick(option)} style={{ cursor: 'pointer', marginBottom: '8px' }}>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <h2>Welcome to the Profile Quiz!</h2>
              <p>Click the button below to start the quiz about your profile.</p>
              <button onClick={startQuiz}>Start Quiz</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
