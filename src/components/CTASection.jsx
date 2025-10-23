import React from 'react';

const CTASection = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-5xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                    Join thousands of students who have transformed their careers with our expert-led courses
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300">
                        Browse All Courses
                    </button>
                    <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                        Talk to an Advisor
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
