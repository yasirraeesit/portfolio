import Booking from "../../components/homepage/booking";
import { motion } from "framer-motion";

function BookingPage() {
    return (
        <div className="min-h-screen pt-20 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-6"
            >
                <Booking />
            </motion.div>
        </div>
    );
}

export default BookingPage;
