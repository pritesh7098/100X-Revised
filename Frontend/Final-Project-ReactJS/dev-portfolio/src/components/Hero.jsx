import { FaReact, FaNodeJs, FaGithub, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

function Hero() {
    return (
        <>

            {/* Hero Section */}

            <section className="bg-gray-100 py-24">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h1 className="text-6xl font-bold leading-tight">

                        Building Modern Websites

                        <br />

                        with React.js

                    </h1>

                    <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">

                        We design and develop beautiful, responsive and
                        high-performance web applications using modern
                        technologies that help businesses grow online.

                    </p>

                    <div className="flex justify-center gap-5 mt-8">

                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">

                            Get Started

                        </button>

                        <button className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition">

                            View Projects

                        </button>

                    </div>

                </div>

            </section>

            {/* Statistics */}

            <section className="py-16">

                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

                    <div>

                        <h2 className="text-4xl font-bold text-blue-600">
                            50+
                        </h2>

                        <p>Projects Completed</p>

                    </div>

                    <div>

                        <h2 className="text-4xl font-bold text-blue-600">
                            20+
                        </h2>

                        <p>Happy Clients</p>

                    </div>

                    <div>

                        <h2 className="text-4xl font-bold text-blue-600">
                            5+
                        </h2>

                        <p>Years Experience</p>

                    </div>

                    <div>

                        <h2 className="text-4xl font-bold text-blue-600">
                            100%
                        </h2>

                        <p>Client Satisfaction</p>

                    </div>

                </div>

            </section>

            {/* Services */}

            <section className="bg-gray-100 py-20">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center">

                        Our Services

                    </h2>

                    <p className="text-center text-gray-600 mt-3">

                        We provide complete web development solutions.

                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mt-12">

                        <div className="bg-white shadow-lg rounded-xl p-8 text-center">

                            <FaReact className="text-5xl mx-auto text-blue-500"/>

                            <h3 className="text-2xl font-semibold mt-5">

                                Frontend Development

                            </h3>

                            <p className="mt-3 text-gray-600">

                                Responsive React.js applications with reusable components.

                            </p>

                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-8 text-center">

                            <FaNodeJs className="text-5xl mx-auto text-green-600"/>

                            <h3 className="text-2xl font-semibold mt-5">

                                Backend Development

                            </h3>

                            <p className="mt-3 text-gray-600">

                                REST APIs using Node.js and Express.js.

                            </p>

                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-8 text-center">

                            <FaCode className="text-5xl mx-auto text-purple-600"/>

                            <h3 className="text-2xl font-semibold mt-5">

                                UI Development

                            </h3>

                            <p className="mt-3 text-gray-600">

                                Modern interfaces using Tailwind CSS.

                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Technologies */}

            <section className="py-20">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center">

                        Technologies We Use

                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-12 text-center">

                        <div>

                            <FaReact className="text-6xl mx-auto text-blue-500"/>

                            <p className="mt-3">React</p>

                        </div>

                        <div>

                            <FaNodeJs className="text-6xl mx-auto text-green-600"/>

                            <p className="mt-3">Node.js</p>

                        </div>

                        <div>

                            <SiTailwindcss className="text-6xl mx-auto text-sky-500"/>

                            <p className="mt-3">Tailwind</p>

                        </div>

                        <div>

                            <SiMongodb className="text-6xl mx-auto text-green-700"/>

                            <p className="mt-3">MongoDB</p>

                        </div>

                        <div>

                            <FaGithub className="text-6xl mx-auto"/>

                            <p className="mt-3">GitHub</p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Testimonials */}

            <section className="bg-gray-100 py-20">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center">

                        Client Testimonials

                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mt-12">

                        <div className="bg-white rounded-xl shadow-lg p-6">

                            ⭐⭐⭐⭐⭐

                            <p className="mt-4">

                                Amazing service and excellent communication throughout the project.

                            </p>

                            <h4 className="font-bold mt-5">

                                John Smith

                            </h4>

                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6">

                            ⭐⭐⭐⭐⭐

                            <p className="mt-4">

                                Highly professional team with outstanding technical skills.

                            </p>

                            <h4 className="font-bold mt-5">

                                Sarah Johnson

                            </h4>

                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6">

                            ⭐⭐⭐⭐⭐

                            <p className="mt-4">

                                Delivered our website before deadline with exceptional quality.

                            </p>

                            <h4 className="font-bold mt-5">

                                Michael Brown

                            </h4>

                        </div>

                    </div>

                </div>

            </section>

            {/* Call To Action */}

            <section className="bg-blue-600 text-white py-20">

                <div className="text-center max-w-3xl mx-auto px-6">

                    <h2 className="text-5xl font-bold">

                        Ready To Start Your Next Project?

                    </h2>

                    <p className="mt-5 text-lg">

                        Let's build something modern, scalable and impactful together.

                    </p>

                    <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">

                        Contact Us

                    </button>

                </div>

            </section>

        </>
    );
}

export default Hero;