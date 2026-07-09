import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import juclPoster from "@/assets/events/juclPoster.jpg";
import valoPoster from "@/assets/events/valoPoster.png";
import bgmiPoster from "@/assets/events/bgmiPoster.png";
import eafcPoster from "@/assets/events/eafcPoster.png";
import TiltCard from "@/components/interactions/TiltCard";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "JUCL Season 3",
      date: "August 2025",
      description:
        "Jadavpur University Community League (JUCL) is an annual event organized by JUGS for students to showcase their gaming skills and compete in games such as Valorant, BGMI, eFootball.",
      image: juclPoster,
    },
    {
      id: 2,
      title: "NSG UEC x Valorant",
      date: "April 2025",
      description:
        "In partnership with NSG UEC, an eSport Valorant event whose winners get a chance to represent their university in the national level.",
      image: valoPoster,
    },
    {
      id: 3,
      title: "NSG UEC x BGMI",
      date: "April 2025",
      description:
        "In partnership with NSG UEC, an eSport BGMI event whose winners get a chance to represent their university in the national level.",
      image: bgmiPoster,
    },
    {
      id: 4,
      title: "NSG UEC x eFootball",
      date: "April 2025",
      description:
        "In partnership with NSG UEC, an eSport eFootball event whose winners get a chance to represent their university in the national level.",
      image: eafcPoster,
    }
  ];

  return (
    <div className="min-h-screen bg-jugs-dark text-white selection:bg-jugs-primary selection:text-white">
      <Navigation />

      <main className="px-6 md:px-12 lg:px-20 py-16 lg:py-28 max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-black uppercase tracking-wider leading-tight mb-12"
        >
          <span className="text-gradient-accent">Events</span>
          <span className="text-white"> round the calender</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: event.id * 0.1 }}
              className="flex flex-col h-full"
            >
              <TiltCard className="card-premium group flex flex-col md:flex-row gap-8 p-6 lg:p-8 border-white/10 hover:border-jugs-secondary/35 h-full cursor-pointer">
                <div className="flex-shrink-0 w-full md:w-[168px] h-[202px] rounded-2xl overflow-hidden bg-[#070B12]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 group-hover:brightness-110 border border-transparent group-hover:border-jugs-secondary/20 transition-all duration-500"
                  />
                </div>

                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h2 className="text-xl lg:text-2xl font-bold font-orbitron tracking-wide text-white group-hover:text-jugs-secondary transition-colors duration-300 mb-2">
                      {event.title}
                    </h2>
                    <div className="inline-block self-start font-orbitron text-xs font-bold text-jugs-secondary tracking-widest bg-jugs-secondary/10 border border-jugs-secondary/20 px-3.5 py-1 rounded-full mb-4">
                      {event.date}
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-white/70">
                      {event.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

