// @flow strict
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { HiCalendar, HiClock, HiVideoCamera, HiChevronLeft, HiChevronRight, HiCheckCircle } from 'react-icons/hi';
import { IoLogoGithub } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaXTwitter, FaStackOverflow } from "react-icons/fa6";
import confetti from 'canvas-confetti';
import { personalData } from '../../../utils/data/personal-data';

function Booking() {
    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', note: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Generate days for a simple calendar (Current Month)
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const generateCalendarDays = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const numDays = daysInMonth(year, month);
        const firstDay = firstDayOfMonth(year, month);
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push({ day: null, date: null });
        }

        for (let i = 1; i <= numDays; i++) {
            const date = new Date(year, month, i);
            days.push({
                day: i,
                date: date,
                isPast: date < new Date(today.getFullYear(), today.getMonth(), today.getDate()),
                isToday: date.toDateString() === today.toDateString()
            });
        }
        return days;
    };

    const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];

    const handleDateSelect = (date) => {
        if (!date) return;
        setSelectedDate(date);
        setStep(2);
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        setStep(3);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate backend submission
        setTimeout(() => {
            setIsSubmitting(false);
            setStep(4);
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, 1500);
    };

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    const prevMonth = () => {
        if (currentMonth.getMonth() === today.getMonth() && currentMonth.getFullYear() === today.getFullYear()) return;
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-[#111827] border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px]"
            >
                {/* Left Side: Host & Session Info (Sidebar) */}
                <div className="w-full lg:w-[400px] bg-white text-[#0d1224] p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-black/5 flex flex-col">
                    <div className="flex items-center gap-4 mb-10">
                        <img 
                           src={personalData.profile} 
                           alt={personalData.name}
                           className="w-16 h-16 rounded-2xl object-cover bg-emerald-500/10 p-1 border border-black/5 shadow-lg"
                        />
                        <div>
                           <h4 className="font-black text-xl tracking-tight uppercase leading-none mb-1">{personalData.name}</h4>
                           <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">{personalData.designation.split('|')[0]}</span>
                        </div>
                    </div>

                    <div className="mb-10">
                       <div className="flex items-center gap-2 text-emerald-600 font-mono text-[10px] uppercase font-bold tracking-widest mb-4">
                          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                          Protocol Active
                       </div>
                       <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-none uppercase italic mb-6">
                          30-Min Discovery <br />
                          <span className="text-emerald-600">Synthesis.</span>
                       </h2>
                       <div className="flex items-center gap-4 text-black/60 font-bold text-sm mb-4 bg-black/5 p-3 rounded-xl border border-black/5">
                          <HiClock className="text-lg text-black" />
                          <span>30 MINURATION</span>
                       </div>
                       <div className="flex items-center gap-4 text-black/60 font-bold text-sm bg-black/5 p-3 rounded-xl border border-black/5">
                          <HiVideoCamera className="text-lg text-black" />
                          <span>REMOTE INTERFACE</span>
                       </div>
                    </div>

                    <p className="text-sm font-medium text-black/50 leading-relaxed mb-auto uppercase italic mt-4 opacity-70">
                       Aligning strategic vision with technical roadmap execution. Scoping, feasibility, and architecture.
                    </p>

                    {/* Social Sync Footnote */}
                    <div className="mt-12 pt-8 border-t border-black/5">
                       <div className="grid grid-cols-4 gap-3">
                          {[
                             { icon: <IoLogoGithub />, url: personalData.github },
                             { icon: <BiLogoLinkedin />, url: personalData.linkedIn },
                             { icon: <FaXTwitter />, url: personalData.twitter },
                             { icon: <FaStackOverflow />, url: personalData.stackOverflow }
                          ].map((social, i) => (
                             <a 
                                key={i} 
                                href={social.url} 
                                target="_blank" 
                                rel="noreferrer"
                                className="w-10 h-10 rounded-xl bg-black/5 border border-black/5 flex items-center justify-center text-black/40 hover:bg-emerald-500 hover:text-white hover:scale-110 transition-all duration-300"
                             >
                                {social.icon}
                             </a>
                          ))}
                       </div>
                    </div>
                </div>

                {/* Right Side: Interactive Content (Scheduler) */}
                <div className="flex-1 p-8 lg:p-16 relative bg-[#111827]">
                    <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />
                    
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="relative z-10"
                            >
                                <div className="flex items-center justify-between mb-12">
                                    <h3 className="text-4xl font-black text-white tracking-tighter uppercase italic">
                                       Select <span className="text-emerald-400">Date.</span>
                                    </h3>
                                    <div className="flex items-center gap-2 bg-white/5 p-2 rounded-2xl border border-white/10">
                                        <button onClick={prevMonth} className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/50 hover:text-white disabled:opacity-20" disabled={currentMonth.getMonth() === today.getMonth() && currentMonth.getFullYear() === today.getFullYear()}>
                                            <HiChevronLeft size={20} />
                                        </button>
                                        <span className="font-black text-white uppercase text-xs tracking-widest min-w-[140px] text-center border-x border-white/10 px-4">
                                            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                                        </span>
                                        <button onClick={nextMonth} className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/50 hover:text-white">
                                            <HiChevronRight size={20} />
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-7 gap-3 mb-4">
                                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(d => (
                                       <div key={d} className="text-[10px] font-black text-white/20 text-center tracking-[0.2em]">{d}</div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-7 gap-3">
                                    {generateCalendarDays().map((d, i) => (
                                        <button
                                            key={i}
                                            disabled={!d.day || d.isPast}
                                            onClick={() => handleDateSelect(d.date)}
                                            className={`h-16 flex flex-col items-center justify-center rounded-[1.5rem] transition-all duration-500 relative group overflow-hidden ${!d.day ? 'opacity-0' :
                                                d.isPast ? 'opacity-10 cursor-not-allowed grayscale' :
                                                    'bg-white/5 border border-white/5 hover:border-emerald-500/50 hover:bg-emerald-500/5 text-white active:scale-95'
                                                } ${d.isToday ? 'border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]' : ''}`}
                                        >
                                            <span className={`text-xl font-black ${d.isToday ? 'text-emerald-400' : 'text-white/80 group-hover:text-emerald-400'}`}>{d.day}</span>
                                            {d.isToday && <span className="absolute top-3 right-3 w-1.5 h-1.5 bg-emerald-500 rounded-full" />}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="relative z-10 h-full flex flex-col"
                            >
                                <button onClick={() => setStep(1)} className="inline-flex items-center gap-2 text-white/40 hover:text-emerald-400 font-black text-[10px] uppercase tracking-widest mb-12 transition-colors group">
                                    <HiChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                                    <span>BACK TO PROTOCOL</span>
                                </button>
                                
                                <h3 className="text-4xl font-black text-white tracking-tighter uppercase italic mb-4">
                                   Time <span className="text-cyan-400">Slots.</span>
                                </h3>
                                <p className="text-white/40 font-bold text-sm uppercase tracking-tight mb-12">Targeting focus for <span className="text-white">{selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span></p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto pr-4 scrollbar-hide max-h-[400px]">
                                    {timeSlots.map(time => (
                                        <button
                                            key={time}
                                            onClick={() => handleTimeSelect(time)}
                                            className="px-8 py-6 rounded-3xl bg-white/5 border border-white/5 text-white font-black uppercase text-xs tracking-[0.2em] hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all duration-300 active:scale-95 text-left flex justify-between items-center group shadow-xl"
                                        >
                                            {time}
                                            <HiClock className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="relative z-10 h-full flex flex-col"
                            >
                                <button onClick={() => setStep(2)} className="inline-flex items-center gap-2 text-white/40 hover:text-violet-400 font-black text-[10px] uppercase tracking-widest mb-12 transition-colors group">
                                    <HiChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                                    <span>BACK TO SLOTS</span>
                                </button>

                                <h3 className="text-4xl font-black text-white tracking-tighter uppercase italic mb-8">
                                   Final <span className="text-violet-400">Details.</span>
                                </h3>

                                <form onSubmit={handleSubmit} className="space-y-6 flex-1">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">IDENTIFIER</label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleFormChange}
                                                className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/5 text-white font-bold focus:outline-none focus:border-violet-500 transition-all shadow-inner"
                                                placeholder="ENTER FULL NAME"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">COMMS CHANNEL</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleFormChange}
                                                className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/5 text-white font-bold focus:outline-none focus:border-violet-500 transition-all shadow-inner"
                                                placeholder="YOUR EMAIL ADDR"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">MANIFESTO / NOTES</label>
                                        <textarea
                                            name="note"
                                            value={formData.note}
                                            onChange={handleFormChange}
                                            rows="3"
                                            className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/5 text-white font-bold focus:outline-none focus:border-violet-500 transition-all resize-none shadow-inner"
                                            placeholder="DESCRIBE THE MISSION OBJECTIVE..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-6 rounded-3xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 text-black font-black text-sm uppercase tracking-[0.3em] hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)] disabled:opacity-50 mt-auto"
                                    >
                                        {isSubmitting ? "TRANSMITTING..." : "FINALIZE SYNC"}
                                    </button>
                                </form>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center py-10"
                            >
                                <div className="p-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-10 shadow-[0_0_80px_rgba(16,185,129,0.1)]">
                                    <HiCheckCircle className="text-emerald-500 text-9xl" />
                                </div>
                                <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight mb-6">
                                   PROTOCOL <br />
                                   <span className="text-emerald-400">LOCKED.</span>
                                </h3>
                                <p className="text-white/50 text-xl font-bold uppercase tracking-tight max-w-sm mb-12">
                                     Sync verified for <span className="text-white">{selectedDate?.toLocaleDateString()}</span> at <span className="text-white italic">{selectedTime}</span>. COMMs uplink sent to your terminal.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
                                    <button
                                        onClick={() => window.open(`https://www.google.com/calendar/render?action=TEMPLATE&text=Discovery+Call+with+Yasir&details=30-min+Synchro.&dates=${new Date(selectedDate).toISOString()}/${new Date(selectedDate).toISOString()}`, '_blank')}
                                        className="flex-1 px-8 py-5 rounded-2xl bg-white text-black font-black uppercase text-[10px] tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
                                    >
                                        ADD TO CALENDAR
                                    </button>
                                    <button
                                        onClick={() => setStep(1)}
                                        className="flex-1 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase text-[10px] tracking-widest hover:bg-white/10 active:scale-95 transition-all"
                                    >
                                        START NEW SYNC
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}

export default Booking;

