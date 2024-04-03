import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getQuestions, } from '../../redux/slices/question'

const Exam = () => {
  const dispatch = useDispatch()
  const { questionsList } = useSelector((state) => state.questions)

  useEffect(() => {
    dispatch(getQuestions())
  }, [dispatch])

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="grid grid-cols-3 mx-auto bg-blue-500">
            <div className="timing flex items-baseline">
              <p className="pt-8">Time Left:19:01 mins</p>
            </div>
            <div className="exams justify-center flex items-center">
              <h3>
                10th Social Exams 1
                <span className="bg-orange-400 rounded-full p-1">Mock Exam</span>
              </h3>
            </div>
            <div className="submit-button bg-blue-400 w-24 text-center py-4">
              <button className="btn">Submit</button>
            </div>
          </div>

          <div className="grid grid-cols-1">
            <ul className="flex">
              <li className="mx-4"><a href="#">Topics</a></li>
              <li className="mx-4"><a href="#">Chapter 1</a></li>
              <li className="mx-4"><a href="#">Chapter 2</a></li>
              <li className="mx-4"><a href="#">Chapter 3</a></li>
            </ul>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-2">
        <div className="grid grid-cols-2 p-8">
          {questionsList.items && questionsList.items.map((item, i) => {
            return (
              <>
                <div key={i} className="ques shadow-lg p-8 font-bold">
                  {i + 1}. {item.question}
                </div>

                <div className="option shadow-lg  pl-6 pb-4">
                  {item.options.map((option, j) => {
                    return (
                      <>
                        <div key={j} className="form-check p-4">
                          <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label className="form-check-label inline-block text-gray-800 flex " >
                            {option.label}
                          </label>
                        </div>
                      </>
                    )
                  })
                  }
                </div>
              </>
            )
          })
          }

        </div>

        <div className="relative h-32">
          <div className="absolute inset-y-0 right-0">
            <ul className="flex">
              <li className="mx-2">Grid View</li>
              <li className="mx-2">List View</li>
            </ul>
            <ul className="flex">
              <li className="mx-2">Chapter 1</li>
              <li className="mx-2">(20)</li>
            </ul>
            <ul className="flex border-t">
              <li className="mx-2">
                <input type="checkbox" className="default:ring-2" />&nbsp; 9
              </li>
              <li className="mx-2">
                <input type="checkbox" className="default:ring-2" />&nbsp; 7
              </li>
              <li className="mx-2">
                <input type="checkbox" className="default:ring-2" />&nbsp; 3
              </li>
              <li className="mx-2">
                <input type="checkbox" className="default:ring-2" />&nbsp; 0
              </li>
              <li className="mx-2">
                <input type="checkbox" className="default:ring-2" />&nbsp; 1
              </li>
            </ul>

            <div className="grid grid-rows-4 grid-cols-5 border-y-4">
              <a href="" className="border rounded-full p-2 m-4 place-self-center"
              >1</a
              >
              <a href="" className="border rounded-full p-2 m-4 place-self-center"
              >2</a
              >
              <a href="" className="border rounded-full p-2 m-4 place-self-center"
              >3</a
              >
              <a href="" className="border rounded-full p-2 m-4 place-self-center"
              >4</a
              >
              <a href="" className="border rounded-full p-2 m-4 place-self-center"
              >5</a
              >
              <a href="" className="border rounded-full p-2 m-4 place-self-center"
              >6</a
              >
              <a href="" className="border rounded-full p-2 m-4 place-self-center"
              >7</a
              >
              <a href="" className="border rounded-full p-2 m-4 place-self-center"
              >8</a
              >
              <a href="" className="border rounded-full p-2 m-4 place-self-center"
              >9</a
              >
              <a href="" className="border rounded-full p-2 m-4 place-self-center"
              >10</a
              >
              <a href="" className="border rounded-full p-2 m-4 place-self-center"
              >11</a
              >
              <a href="" className="border rounded-full p-2 m-4 place-self-center"
              >12</a
              >
              <a href="" className="border rounded-full p-2 m-4 place-self-center"
              >13</a
              >
              <a href="" className="border rounded-full p-2 m-4 place-self-center"
              >14</a
              >
              <a href="" className="border rounded-full p-2 m-4 place-self-center"
              >15</a
              >
              <a href="" className="border rounded-full p-2 m-4 place-self-center"
              >16</a
              >
              <a href="" className="border rounded-full p-2 m-4 place-self-center"
              >17</a
              >
              <a href="" className="border rounded-full p-2 m-4 place-self-center"
              >18</a
              >
              <a href="" className="border rounded-full p-2 m-4 place-self-center"
              >19</a
              >
              <a href="" className="border rounded-full p-2 m-4 place-self-center"
              >20</a
              >
            </div>
            <ul className="flex">
              <li className="mx-2">Chapter 2</li>
              <li className="mx-2">(20)</li>
            </ul>
            <ul className="flex border-t">
              <li className="mx-2">
                <input type="checkbox" className="default:ring-2" />&nbsp; 9
              </li>
              <li className="mx-2">
                <input type="checkbox" className="default:ring-2" />&nbsp; 7
              </li>
              <li className="mx-2">
                <input type="checkbox" className="default:ring-2" />&nbsp; 3
              </li>
              <li className="mx-2">
                <input type="checkbox" className="default:ring-2" />&nbsp; 0
              </li>
              <li className="mx-2">
                <input type="checkbox" className="default:ring-2" />&nbsp; 1
              </li>
            </ul>
            <ul className="flex">
              <li className="mx-2">Chapter 3</li>
              <li className="mx-2">(20)</li>
            </ul>
            <ul className="flex border-t">
              <li className="mx-2">
                <input type="checkbox" className="default:ring-2" />&nbsp; 9
              </li>
              <li className="mx-2">
                <input type="checkbox" className="default:ring-2" />&nbsp; 7
              </li>
              <li className="mx-2">
                <input type="checkbox" className="default:ring-2" />&nbsp; 3
              </li>
              <li className="mx-2">
                <input type="checkbox" className="default:ring-2" />&nbsp; 0
              </li>
              <li className="mx-2">
                <input type="checkbox" className="default:ring-2" />&nbsp; 1
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Exam