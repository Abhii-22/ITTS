import React from 'react'

const Footer = () => {
    return (
        <>
            <div>   <footer className="bg-slate-950 py-12 border-t border-slate-800">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">TechAcademy</h3>
                            <p className="text-gray-400 mb-4">Empowering the next generation of tech professionals</p>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer">
                                    <span className="text-white text-sm">f</span>
                                </div>
                                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer">
                                    <span className="text-white text-sm">in</span>
                                </div>
                                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer">
                                    <span className="text-white text-sm">tw</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Courses</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li className="hover:text-blue-400 cursor-pointer transition-colors">Web Development</li>
                                <li className="hover:text-blue-400 cursor-pointer transition-colors">Data Science</li>
                                <li className="hover:text-blue-400 cursor-pointer transition-colors">Cloud Computing</li>
                                <li className="hover:text-blue-400 cursor-pointer transition-colors">Mobile Development</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li className="hover:text-blue-400 cursor-pointer transition-colors">About Us</li>
                                <li className="hover:text-blue-400 cursor-pointer transition-colors">Instructors</li>
                                <li className="hover:text-blue-400 cursor-pointer transition-colors">Careers</li>
                                <li className="hover:text-blue-400 cursor-pointer transition-colors">Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li className="hover:text-blue-400 cursor-pointer transition-colors">Help Center</li>
                                <li className="hover:text-blue-400 cursor-pointer transition-colors">Terms of Service</li>
                                <li className="hover:text-blue-400 cursor-pointer transition-colors">Privacy Policy</li>
                                <li className="hover:text-blue-400 cursor-pointer transition-colors">Refund Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 TechAcademy. All rights reserved.</p>
                    </div>
                </div>
            </footer></div>
        </>
    )
}

export default Footer