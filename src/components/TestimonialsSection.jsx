import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Priya Sharma",
            role: "Full Stack Developer at Google",
            content: "The instructors are phenomenal! I landed my dream job at Google within 3 months of completing the Full Stack course. The hands-on projects were invaluable.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
        },
        {
            name: "Rahul Verma",
            role: "ML Engineer at Microsoft",
            content: "Best investment in my career. The AI/ML course was comprehensive and the instructors were always available for doubt clearing. Highly recommended!",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
        },
        {
            name: "Sneha Patel",
            role: "DevOps Engineer at Amazon",
            content: "The practical approach to teaching made all the difference. I went from zero DevOps knowledge to deploying production applications in just 4 months.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
        }
    ];

    return (
        <section className="py-20 bg-slate-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-white mb-4">Student Success Stories</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Hear from our graduates who transformed their careers
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                            <div className="flex items-center gap-4">
                                <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
                                <div>
                                    <div className="font-semibold text-white">{testimonial.name}</div>
                                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
