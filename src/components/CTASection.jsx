import React from 'react';

const CTASection = () => {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="container mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 px-4">Ready to Start Your Journey?</h2>
                <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 md:mb-10 max-w-2xl mx-auto px-4">
                    Join thousands of students who have transformed their careers with our expert-led courses
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center px-4">
                    <button className="bg-white text-blue-600 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                        Browse All Courses
                    </button>
                    <button className="bg-transparent border-2 border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                        Talk to an Advisor
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;