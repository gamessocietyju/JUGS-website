import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import juclPoster from "@/assets/events/juclPoster.jpg";
import valoPoster from "@/assets/events/valoPoster.png";
import bgmiPoster from "@/assets/events/bgmiPoster.png";
import eafcPoster from "@/assets/events/eafcPoster.png";

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
    <div className="min-h-screen bg-jugs-dark">
      <Navigation />

      <main className="px-8 lg:px-[164px] py-12 lg:py-24">
        <h1 className="text-4xl lg:text-5xl xl:text-[67px] font-semibold leading-tight lg:leading-[84px] mb-12 lg:mb-16">
          <span className="text-jugs-red">Events</span>
          <span className="text-white"> round the calender</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-12 lg:gap-y-12">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-[#191919] border border-white rounded-3xl p-6 lg:p-12 flex flex-col md:flex-row gap-6 
                        transition-all duration-300 transform hover:scale-[1.02] hover:border-jugs-red/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
            >
              <div className="flex-shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full md:w-[168px] h-[202px] object-cover rounded-3xl"
                />
              </div>

              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">
                    {event.title}
                  </h2>
                  <p className="text-sm lg:text-base font-bold text-jugs-red leading-[30px] mb-4">
                    {event.date}
                  </p>
                  <p className="text-sm font-semibold text-white leading-[30px]">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
