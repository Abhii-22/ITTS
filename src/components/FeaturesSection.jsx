import React from 'react';
import { Users, BookOpen, Trophy, Clock, Briefcase, Target } from 'lucide-react';

const FeaturesSection = () => {
    const features = [
        {
            icon: Users,
            title: "Expert Instructors",
            description: "Learn from industry professionals with 10+ years of real-world experience"
        },
        {
            icon: BookOpen,
            title: "Comprehensive Curriculum",
            description: "Structured courses covering everything from basics to advanced concepts"
        },
        {
            icon: Trophy,
            title: "Industry Certifications",
            description: "Earn recognized certifications that boost your career prospects"
        },
        {
            icon: Clock,
            title: "Flexible Learning",
            description: "Study at your own pace with lifetime access to course materials"
        },
        {
            icon: Briefcase,
            title: "Job Assistance",
            description: "Get career guidance, resume reviews, and interview preparation"
        },
        {
            icon: Target,
            title: "Hands-on Projects",
            description: "Build real-world projects to showcase in your portfolio"
        }
    ];

    return (
        <section className="py-20 bg-slate-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-white mb-4">Why Choose Us?</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        We provide everything you need to succeed in your tech career
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div key={index} className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 group hover:transform hover:scale-105">
                                <div className="inline-flex p-4 bg-blue-600/10 rounded-xl mb-6 group-hover:bg-blue-600/20 transition-all">
                                    <Icon className="w-8 h-8 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                             </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
