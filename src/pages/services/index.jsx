import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { BiCodeAlt } from "react-icons/bi";
import { FaDatabase, FaLayerGroup, FaWordpress, FaArrowRight } from "react-icons/fa";
import GlowCard from "../../components/helper/glow-card";

const services = [
    {
        title: "Full Stack Development",
        description: "Building robust, scalable web applications using the MERN stack (MongoDB, Express, React, Node.js). From database schema design to frontend implementation, I deliver complete digital solutions.",
        icon: <FaLayerGroup className="text-emerald-500" size={36} />,
        identifier: "service-1",
        color: "emerald"
    },
    {
        title: "Frontend Engineering",
        description: "Creating responsive, high-performance user interfaces with React, Next.js, and Tailwind CSS. I focus on delivering seamless user experiences with modern animations and state management.",
        icon: <BiCodeAlt className="text-cyan-500" size={36} />,
        identifier: "service-2",
        color: "cyan"
    },
    {
        title: "Backend & API Development",
        description: "Designing and implementing secure RESTful APIs and server-side logic using Node.js and Express. I ensure your data is handled safely and efficiently with optimized database queries.",
        icon: <FaDatabase className="text-violet-500" size={36} />,
        identifier: "service-3",
        color: "violet"
    },
    {
        title: "CMS & WordPress",
        description: "Custom WordPress development and management, ensuring content-rich sites are fast and reliable. I build custom themes and plugins tailored to your specific business needs.",
        icon: <FaWordpress className="text-amber-500" size={36} />,
        identifier: "service-4",
        color: "amber"
    }
];

function ServicesPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div className="min-h-screen bg-[var(--background-color)] relative overflow-hidden">
            {/* Background Decorative Glows */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[150px] animate-pulse delay-700" />
            </div>

            <main className="py-20 lg:py-32">
                <div className="container mx-auto px-6 max-w-7xl">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            My Expertise
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 italic">Services</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            I provide specialized software engineering services to help startups and businesses build high-quality digital products.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {services.map((service, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <GlowCard identifier={service.identifier}>
                                    <div className="p-8 lg:p-12 relative min-h-[320px] h-full flex flex-col">
                                        {/* Decorative Background Image */}
                                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                            {service.icon}
                                        </div>
                                        <img
                                            src="/blur-23.svg"
                                            alt="Decorative Blur"
                                            width={1080}
                                            height={200}
                                            className="absolute bottom-0 left-0 opacity-40 -z-10 pointer-events-none"
                                        />

                                        {/* Icon & Title */}
                                        <div className="flex items-start gap-6 mb-8 mt-4">
                                            <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-emerald-500/30 transition-all duration-500 group-hover:scale-110 shadow-lg`}>
                                                {service.icon}
                                            </div>
                                            <div>
                                                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight group-hover:text-emerald-400 transition-colors">
                                                    {service.title}
                                                </h2>
                                                <div className="h-1 w-12 bg-emerald-500 rounded-full group-hover:w-24 transition-all duration-500" />
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-400 text-lg leading-relaxed mb-8 flex-grow">
                                            {service.description}
                                        </p>

                                        {/* Call to Action */}
                                        <div className="mt-auto">
                                            <a
                                                href="/booking"
                                                className="inline-flex items-center gap-2 text-emerald-400 font-bold group/btn text-sm uppercase tracking-widest hover:text-white transition-colors"
                                            >
                                                Start a Project
                                                <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                                            </a>
                                        </div>
                                    </div>
                                </GlowCard>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Bottom CTA Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mt-32 p-12 rounded-[2.5rem] bg-gradient-to-br from-[#1a1f35] to-[#0d1224] border border-white/10 text-center relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                            Have a specialized <br /> <span className="text-emerald-400 italic">Project in mind?</span>
                        </h2>
                        <a
                            href="/booking"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-[#0d1224] font-black rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)] relative z-10"
                        >
                            LET'S COLLABORATE
                            <FaArrowRight />
                        </a>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}

export default ServicesPage;
