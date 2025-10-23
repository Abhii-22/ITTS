import React from 'react';
import { CheckCircle } from 'lucide-react';

const FAQSection = () => {
    const faqs = [
        {
            question: "Do I need prior programming experience?",
            answer: "No! Our beginner courses start from the basics and gradually build up your skills. We have courses for all levels."
        },
        {
            question: "What is the duration of the courses?",
            answer: "Course duration varies from 3 to 6 months depending on the program. You can learn at your own pace with lifetime access."
        },
        {
            question: "Will I get a certificate after completion?",
            answer: "Yes! You'll receive an industry-recognized certificate upon successfully completing the course and projects."
        },
        {
            question: "Do you provide job placement assistance?",
            answer: "Absolutely! We offer resume reviews, mock interviews, and connections with our hiring partners to help you land your dream job."
        },
        {
            question: "Can I access course materials after completion?",
            answer: "Yes! You get lifetime access to all course materials, including updates and new content added in the future."
        }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 md:mb-14 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Frequently Asked Questions</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                        Everything you need to know about our courses
                    </p>
                </div>
                <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-slate-800 p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 md:mb-3 flex items-start gap-2 sm:gap-3">
                                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0 mt-0.5 sm:mt-1" />
                                <span className="flex-1">{faq.question}</span>
                            </h3>
                            <p className="text-sm sm:text-base text-gray-400 leading-relaxed pl-7 sm:pl-9">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;