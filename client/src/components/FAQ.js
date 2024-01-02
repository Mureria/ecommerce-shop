import React, { useState } from "react";
import Quiz from "./Quiz";
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const FAQ= () => {
  const [openSection, setOpenSection] = useState(false);

  const handleOpen = (index) => {
    setOpenSection(index === openSection ? false : index);
  };

  return (
    <>
      <div className="w-full h-full rounded-lg shadow-sm">
        <div className="max-w-[1200px] my-0 mx-auto">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-sm md:text-xl  font-bold mb-6 md:mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-2 pb-10">

            {Quiz.map((quiz, index) => (
              <div key={index} className={`w-full  border-b border-gray-300 ${openSection === index ? "open" : "" }`}>
                <h1 className=" flex justify-between items-center font-medium text-base px-4 py-4 " onClick={() => handleOpen(index)}>
                  {quiz.question}
                  {openSection === index ? <AiOutlineMinus size={16} color="red"/> : <AiOutlinePlus size={16}/>}
                </h1>
                <p className={`${ openSection === index ? "block" : "hidden"} text-base py-4 pt-0 ml-4  `}>
                  {quiz.answer}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}


export default FAQ
