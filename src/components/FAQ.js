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
        <div className="w-full h-full rounded-lg shadow-md">
      <div className="max-w-[1240px] my-0 mx-auto">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl md:text-3xl  font-bold mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">

            {Quiz.map((quiz, index) => (
              <div key={index} className={`w-full  border-b border-gray-300 ${openSection === index ? "open" : "" }`}>
                <h1 className=" flex justify-between items-center font-medium md:text-2xl text-xl px-4 py-6" onClick={() => handleOpen(index)}>
                  {quiz.question}
                  {openSection === index ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                </h1>
                <p className={`${ openSection === index ? "block" : "hidden"} md:xl text-xl py-6 pt-0 ml-4 -mt-4 `}>
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
