import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const FAQSection = () => {
    const [expanded, setExpanded] = useState(null);

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

    const toggleFAQ = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-widest">FAQ</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        Find answers to common questions about our courses, learning experience, and career support
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="space-y-3 sm:space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 rounded-lg md:rounded-xl transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left p-4 sm:p-5 md:p-6 flex items-center justify-between gap-4"
                                >
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200 flex-1">
                                        {faq.question}
                                    </h3>
                                    <ChevronDown
                                        className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-blue-400 flex-shrink-0 transition-all duration-300 ${expanded === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded === index ? 'max-h-96' : 'max-h-0'
                                        }`}
                                >
                                    <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 border-t border-slate-700">
                                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;