import "./App.css";
import React from "react";
import { useState } from "react";

const questions = [
  {
    questionText:
      "Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?",
    answers: [
      {
        answerText: "Tem entre 2 a 4 litros. São retirados 450 mililitros.",
        isCorrect: false,
      },
      {
        answerText: "Tem entre 4 a 6 litros. São retirados 450 mililitros.",
        isCorrect: true,
      },
      {
        answerText: "Tem 10 litros. São retirados 2 litros.",
        isCorrect: false,
      },
      {
        answerText: "Tem 7 litros. São retirados 1,5 litros.",
        isCorrect: false,
      },
      {
        answerText: "Tem 0,5 litros. São retirados 0,5 litros",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "De quem é a famosa frase “Penso, logo existo”?",
    answers: [
      { answerText: "Platão", isCorrect: false },
      { answerText: "Galileu Galilei", isCorrect: false },
      { answerText: "Descartes", isCorrect: true },
      { answerText: "Sócrates", isCorrect: false },
      { answerText: "Francis Bacon", isCorrect: false },
    ],
  },
  {
    questionText: "De onde é a invenção do chuveiro elétrico?",
    answers: [
      { answerText: "Brasil", isCorrect: true },
      { answerText: "Argentina", isCorrect: false },
      { answerText: "Peru", isCorrect: false },
      { answerText: "Inglaterra", isCorrect: false },
      { answerText: "Índia", isCorrect: false },
    ],
  },
  {
    questionText: "Quais o menor e o maior país do mundo?",
    answers: [
      { answerText: "Nauru e China", isCorrect: false },
      { answerText: "Mônaco e Canadá", isCorrect: false },
      { answerText: "Malta e Estados Unidos", isCorrect: false },
      { answerText: "Vaticano e Rússia", isCorrect: true },
      { answerText: "São Marino e Índia", isCorrect: false },
    ],
  },
  {
    questionText: "Qual o livro mais vendido no mundo a seguir à Bíblia?",
    answers: [
      { answerText: "O Senhor dos Anéis", isCorrect: false },
      { answerText: "Dom Quixote", isCorrect: true },
      { answerText: "O Pequeno Príncipe", isCorrect: false },
      { answerText: "A Cabana", isCorrect: false },
      { answerText: "Harry Potter e a Pedra Filosofal", isCorrect: false },
    ],
  },
];

export const App = () => {
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);

  const handleQuestion = (event) => {
    setCount(count + 1);
    if (event === "true") {
      setScore(score + 1);
    }
  };

  const handleRequizz = () => {
    setCount(0);
    setScore(0);
  };

  return (
    <div className="App">
      <div className="containerQuizz">
        {count < questions.length ? (
          <>
            <div>
              <h5>
                Pergunta {count + 1} de {questions.length}
              </h5>
            </div>
            <div>
              <h2>{questions[count].questionText}</h2>
            </div>
            <div>
              {questions[count].answers.map((question, index) => {
                return (
                  <div key={index}>
                    <button
                      onClick={() =>
                        handleQuestion(question.isCorrect.toString())
                      }
                    >
                      {question.answerText}
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div>
              <h5>{score < 2 ? "Ufaaaaa... Que sufoco!" : " Yaaaaaay...!"}</h5>
            </div>
            <div>
              <h2>
                {score < 2
                  ? "Acho melhor você tentar de novo!"
                  : "Parabéns! Você terminou o quizz."}
              </h2>
            </div>
            <div>
              <p>
                Você acertou {score} de {questions.length}.
              </p>
            </div>
            {score >= questions.length ? (
              <button className="disabledContent">Finalizado</button>
            ) : (
              <button className="btnRefactor" onClick={handleRequizz}>
                Refazer
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};
