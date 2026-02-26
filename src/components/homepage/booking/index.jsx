import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCalendar, HiClock, HiVideoCamera, HiChevronLeft, HiChevronRight, HiCheckCircle } from 'react-icons/hi';
import confetti from 'canvas-confetti';

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

        // Padding for empty days
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

        try {
            const response = await fetch('http://localhost:5000/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    date: selectedDate?.toLocaleDateString(),
                    time: selectedTime
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to submit booking');
            }

            console.log('Booking success:', result);
            setIsSubmitting(false);
            setStep(4);
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
        } catch (error) {
            console.error('Error submitting booking:', error);
            alert(error.message || 'There was an error confirming your booking. Please try again.');
            setIsSubmitting(false);
        }
    };

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    const prevMonth = () => {
        if (currentMonth.getMonth() === today.getMonth() && currentMonth.getFullYear() === today.getFullYear()) return;
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    return (
        <div id="booking" className="relative z-50 my-8 lg:my-16 max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
                    Book a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 italic">Meeting</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Choose a date and time that works for you. Let's discuss how I can help you with your next big project.
                </p>
            </div>

            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
                {/* Progress Bar */}
                {step < 4 && (
                    <div className="h-1 bg-white/5 w-full">
                        <motion.div
                            initial={{ width: "25%" }}
                            animate={{ width: `${(step / 3) * 100}%` }}
                            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                        />
                    </div>
                )}

                <div className="p-6 md:p-10">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <HiCalendar className="text-emerald-500" /> Select a Date
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <button onClick={prevMonth} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-30" disabled={currentMonth.getMonth() === today.getMonth() && currentMonth.getFullYear() === today.getFullYear()}>
                                            <HiChevronLeft />
                                        </button>
                                        <span className="font-semibold text-white min-w-[120px] text-center">
                                            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                                        </span>
                                        <button onClick={nextMonth} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                            <HiChevronRight />
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-gray-500 mb-2">
                                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(d => <div key={d}>{d}</div>)}
                                </div>

                                <div className="grid grid-cols-7 gap-2">
                                    {generateCalendarDays().map((d, i) => (
                                        <button
                                            key={i}
                                            disabled={!d.day || d.isPast}
                                            onClick={() => handleDateSelect(d.date)}
                                            className={`h-12 flex flex-col items-center justify-center rounded-xl transition-all duration-300 ${!d.day ? 'pointer-events-none' :
                                                d.isPast ? 'opacity-20 cursor-not-allowed' :
                                                    'hover:bg-emerald-500/10 hover:border-emerald-500/50 border border-transparent text-white'
                                                } ${d.isToday ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 font-bold' : ''}`}
                                        >
                                            {d.day}
                                            {d.isToday && <span className="w-1 h-1 bg-emerald-500 rounded-full mt-1" />}
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
                                className="space-y-6"
                            >
                                <button onClick={() => setStep(1)} className="text-sm text-gray-400 hover:text-emerald-400 flex items-center gap-1 transition-colors">
                                    <HiChevronLeft /> Back to dates
                                </button>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <HiClock className="text-cyan-500" /> Select a Time
                                </h3>
                                <p className="text-gray-400">Available slots for <span className="text-white font-bold">{selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span></p>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {timeSlots.map(time => (
                                        <button
                                            key={time}
                                            onClick={() => handleTimeSelect(time)}
                                            className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                                        >
                                            {time}
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
                                className="space-y-6"
                            >
                                <button onClick={() => setStep(2)} className="text-sm text-gray-400 hover:text-emerald-400 flex items-center gap-1 transition-colors">
                                    <HiChevronLeft /> Back to times
                                </button>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <HiVideoCamera className="text-violet-500" /> Final Details
                                </h3>
                                <div className="bg-white/5 rounded-2xl p-4 text-sm text-gray-300 flex flex-col gap-1">
                                    <p><span className="text-gray-500">Meeting:</span> 30-Min Discovery Call</p>
                                    <p><span className="text-gray-500">When:</span> {selectedDate?.toLocaleDateString()} at {selectedTime}</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleFormChange}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-violet-500 transition-colors"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleFormChange}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-violet-500 transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">What would you like to discuss?</label>
                                        <textarea
                                            name="note"
                                            value={formData.note}
                                            onChange={handleFormChange}
                                            rows="3"
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-violet-500 transition-colors resize-none"
                                            placeholder="Briefly describe your project..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-[#0d1224] font-black text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-emerald-500/20 disabled:opacity-50"
                                    >
                                        {isSubmitting ? "Processing..." : "Confirm Booking"}
                                    </button>
                                </form>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-10 space-y-6"
                            >
                                <div className="flex justify-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", damping: 10 }}
                                    >
                                        <HiCheckCircle className="text-emerald-500 text-8xl" />
                                    </motion.div>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Meeting Booked!</h3>
                                    <p className="text-gray-400 max-w-sm mx-auto">
                                        Congratulations <span className="text-white font-bold">{formData.name}</span>! Your 30-minute discovery call has been scheduled for <span className="text-white font-bold">{selectedDate?.toLocaleDateString()}</span> at <span className="text-white font-bold">{selectedTime}</span>.
                                    </p>
                                </div>
                                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 text-emerald-400 text-sm max-w-sm mx-auto">
                                    A calendar invitation and confirmation email has been sent to <span className="font-bold text-white">{formData.email}</span>.
                                </div>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                    <button
                                        onClick={() => {
                                            const start = new Date(selectedDate);
                                            const [hours, minutes] = selectedTime.split(':');
                                            const isPM = selectedTime.includes('PM');
                                            start.setHours(isPM ? parseInt(hours) + 12 : parseInt(hours), parseInt(minutes));
                                            const end = new Date(start.getTime() + 30 * 60000);
                                            const fmt = (d) => d.toISOString().replace(/-|:|\.\d\d\d/g, "");
                                            const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=Discovery+Call+with+Yasir&details=30-minute+discovery+call.&location=Zoom/Google+Meet&dates=${fmt(start)}/${fmt(end)}`;
                                            window.open(url, '_blank');
                                        }}
                                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#4285F4]/10 text-[#4285F4] border border-[#4285F4]/20 font-bold hover:bg-[#4285F4]/20 transition-all text-sm w-full sm:w-auto"
                                    >
                                        Add to Google Calendar
                                    </button>
                                    <button
                                        onClick={() => setStep(1)}
                                        className="px-8 py-2.5 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-all text-sm w-full sm:w-auto"
                                    >
                                        Book another meeting
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default Booking;
