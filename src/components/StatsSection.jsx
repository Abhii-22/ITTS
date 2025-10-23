import React from 'react';
import { Users, BookOpen, Award, Globe } from 'lucide-react';

const StatsSection = () => {
    const stats = [
        { icon: Users, value: "15,000+", label: "Active Students" },
        { icon: BookOpen, value: "120+", label: "Courses Offered" },
        { icon: Award, value: "95%", label: "Success Rate" },
        { icon: Globe, value: "50+", label: "Countries" }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="text-center group">
                                <div className="inline-flex p-6 bg-blue-600/10 rounded-2xl mb-4 group-hover:bg-blue-600/20 transition-all duration-300">
                                    <Icon className="w-12 h-12 text-blue-400" />
                                </div>
                                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-gray-400 text-lg">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;