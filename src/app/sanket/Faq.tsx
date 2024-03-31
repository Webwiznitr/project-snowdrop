'use client';
import { useState } from "react";






// list of all questions and answers for the FAQ section
const questions = [
    {
        question: "Do you offer pick-up and delivery services?",
        answer:
            "Absolutely! We'll rescue your laundry from the wilds of your bedroom and return it fresh and folded.",
    },
    {
        question: 'How do I schedule a pick-up?',
        answer:
            "Scheduling a pick-up is easy! Just visit our website or give us a call to book a time that works for you.",
    },
    {
        question: "What types of laundry services do you offer?",
        answer:
            "We're not just laundry experts, we're laundry ninjas! Washing, drying, folding, even ironing if you dare!",
    },
    {
        question: " How long does it take to get my laundry back?",
        answer:
            "Faster than it takes to find a matching sock! Typically 24-48 hours, depending on the complexity of your laundry saga.",
    },
    {
        question: "What are your pricing options?",
        answer:
            "You will be billed monthly or annually, depending on your plan. You can cancel your subscription at any time.",
    },
    {
        question: "Do you have any special instructions for preparing laundry?",
        answer:
            "Simply bag up your dirty laundry, and we'll take care of the rest! We'll handle stains and delicate fabrics with care.",
    },
    {
        question: " Can I request special care for delicate items, like a spa day for my clothes?",
        answer:
            "Absolutely! Just let us know your preferences, and we'll ensure your delicate items are treated with extra TLC.",
    },
    {
        question: "What safety measures do you have in place?",
        answer:
            "Your safety and hygiene are our top priorities. We adhere to strict cleanliness standards and offer contactless pick-up and delivery options for added peace of mind.",
    },

];


const Faq = () => {
    // state to toggle the answer display
    const [question, setQuestion] = useState<number | null>(null);

    // function to toggle the answer display
    const toggle = (index: number) => {
        if (question === index) {
            setQuestion(null);
        } else {
            setQuestion(index);
        }
    };




    return (
        <main>
            <section className="flex flex-col heroBg bg-[#000] gap-12 pb-[12rem]" id="faq">

                <section className="flex flex-col   pb-[3rem]" id="faq">

                    <div className="flex flex-col w-[100%] mx-auto mt-[3rem] text-center  ">
                        <div className="w-[100%] mx-auto textJS text-[3rem] text-white">
                            FAQS
                        </div>
                    </div>






                </section>

                <ul className="flex flex-col gap-8 w-[75%] mx-auto relative z-20 hero-txt">
                    {questions.map((q, index) => (
                        <li key={q.question}>
                            <div
                                className={`${index !== -1 ? "rounded-[0.77075rem]  text-[#fff] bg-black opacity-80 inset-shadow " : ""
                                    } gap-[0.3rem] flex flex-col`}
                            >
                                <div
                                    className="flex flex-col justify-between cursor-pointer border-gray-700 "
                                    onClick={() => {
                                        toggle(index);
                                    }}
                                    style={{
                                        borderRadius: '0.4rem',

                                        borderWidth: '0.06rem'

                                    }}
                                >

                                    <div className="text-start ml-4 " >

                                        <div className="text-start ml-4   " >

                                            <span className=" text-[#fff] font-bold">{`0${index + 1}`}</span>
                                            <span className=" ml-6 text-[#fff]">{`${q.question}`}</span>

                                            <div

                                                className={`float-right   h-[full] bg-gray-700  relative  w-[4rem] transform ${question === index ? 'rotate-180 , bg-[#A962FF]' : ''}`}
                                            >
                                                <h1 className="text-white text-[2rem] flex justify-center">+</h1>
                                            </div>
                                        </div>

                                    </div>

                                    <div
                                        className={`text-start mx-auto transition-transform ease-out duration-300 z-50 ${question === index
                                            ? "scale-100 translate-y-0 p-[2rem] bg-opacity-0"
                                            : "scale-y-0 -translate-y-[50%] h-0"
                                            }`}

                                    >
                                        {q.answer}
                                    </div>
                                </div >
                            </div>
                        </li >
                    ))}
                </ul >
            </section>

        </main>
    )
}

export default Faq; 