import React, { useState } from 'react'
import { ProgressBar, Button } from 'react-bootstrap'
import { IoCloseSharp } from "react-icons/io5";
const Index = ({ handleCloseModal}) => {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Who developed the theory of relativity?',
      options: [
        'Isaac Newton',
        'Albert Einstein',
        'Galileo Galilei',
        'Marie Curie'
      ],
      correctAnswer: 'Albert Einstein'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correctAnswer: 'Mars'
    }
  ]

  const [answers, setAnswers] = useState(Array(questions.length).fill(null))
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [quizFinished, setQuizFinished] = useState(false)

  // HANDLE ANSWER SELECTION
  const handleAnswerSelection = answer => {
    const updatedAnswers = [...answers]
    updatedAnswers[currentQuestionIndex] = answer
    setAnswers(updatedAnswers)
  }

  const handleFinishQuiz = () => {
    setQuizFinished(true)
  }

  // Handle moving to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setProgress(prevProgress => prevProgress + 100 / questions.length)
    }
  }

  // Reset quiz
  const handleResetQuiz = () => {
    setAnswers(Array(questions.length).fill(null))
    setCurrentQuestionIndex(0)
    setProgress(0)
    setQuizFinished(false)
  }

  // Current question data
  const currentQuestion = questions[currentQuestionIndex]
  return (
    <div>
      <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
        <div className='bg-black text-white p-8 rounded-lg w-full max-w-2xl shadow-lg'>
          {!quizFinished ? (
            <>
              <div className='flex items-center justify-between'>
                <h1 className='text-2xl mb-2'>
                  {questions[currentQuestionIndex].question}
                </h1>
                <IoCloseSharp onClick={handleCloseModal} className=' cursor-pointer text-4xl hover:rounded-md hover:p-2  hover:border-none duration-500 ease-out hover:bg-[#CF0807]' />
              </div>
              <p className='text-stone-400'>Your Progress</p>
              <ProgressBar
                now={progress}
                style={{ height: '30px', marginBottom: '10px' }}
              />

              <div className='flex-col flex space-y-6 mb-4'>
                {questions[currentQuestionIndex].options.map(
                  (option, index) => (
                    <label
                      className='flex items-center'
                      key={index}
                      variant={
                        answers[currentQuestionIndex] === option
                          ? 'primary'
                          : 'outline-primary'
                      }
                      onClick={() => handleAnswerSelection(option)}
                    >
                      <input
                        type='checkbox'
                        className='form-checkbox mr-2'
                        onClick={() => handleAnswerSelection(option)}
                      />
                      {option}
                    </label>
                  )
                )}
              </div>

              {/* Next or Finish Button */}
              <div style={{ marginTop: '20px' }}>
                {currentQuestionIndex < questions.length - 1 ? (
                  <Button
                    onClick={handleNextQuestion}
                    disabled={answers[currentQuestionIndex] === null}
                    variant='success'
                    className='w-full bg-[#CF0807]'
                  >
                    Next Question
                  </Button>
                ) : (
                  <Button
                    onClick={handleFinishQuiz}
                    disabled={answers.includes(null)}
                    variant='success'
                    className='w-full bg-[#CF0807]'
                  >
                    Finish Quiz
                  </Button>
                )}
              </div>
            </>
          ) : (
            <>
            <div className="flex items-center justify-between mb-3">
            <h3>Quiz Results:</h3>
            <IoCloseSharp onClick={handleCloseModal} className=' cursor-pointer text-4xl hover:rounded-md hover:p-2  hover:border-none duration-500 ease-out hover:bg-[#CF0807]' />
            </div>
              
              <ul>
                {questions.map((question, index) => (
                  <li key={index} style={{ marginBottom: '10px' }}>
                    <strong>{question.question}</strong>
                    <br />
                    Your answer: {answers[index]}{' '}
                    {answers[index] === question.correctAnswer ? (
                      <span style={{ color: 'green', marginTop: "10px", marginBottom  : "10px" }} className='my-5'>✓ Correct <span  >&#128077;</span></span>
                    ) : (
                      <span style={{ color: 'red' }}>
                        ✗ Incorrect <span className='text-2xl'>&#129318;</span > (Correct answer: {question.correctAnswer}) 
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <Button onClick={handleResetQuiz} variant='info'>
                Restart Quiz
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Index
