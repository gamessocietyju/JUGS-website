import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import image1 from '@/assets/home/image1.png';
import image2 from '@/assets/home/image2.png';
import image3 from '@/assets/home/image3.png';
import juclPoster from '@/assets/home/juclPoster.jpg';
import valoPoster from '@/assets/home/Valo.png';
import bgmiPoster from '@/assets/home/BGMI.png';

export default function Index() {
  const events = [
    {
      id: 1,
      title: "JUCL Season 3",
      date: "August 2025",
      image:
        juclPoster
    },
    {
      id: 2,
      title: "NSG UEC x Valorant",
      date: "April 2025",
      image:
        valoPoster,
    },
    {
      id: 3,
      title: "NSG UEC x BGMI",
      date: "April 2025",
      image:
        bgmiPoster,
    },
  ];

  return (
    <div className="min-h-screen bg-jugs-dark">
      <Navigation />

      <main>
        <section className="relative px-8 lg:px-[164px] py-12 lg:py-24 min-h-[600px] lg:min-h-[900px] flex items-center">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8">
            <div className="flex-1 max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-normal lg:leading-[1.5]">
                <span className="text-jugs-red block">JADAVPUR</span>
                <span className="text-white block mt-2 lg:mt-4">UNIVERSITY</span>
                <span className="text-jugs-red block mt-2 lg:mt-4">GAMES</span>
                <span className="text-white block mt-2 lg:mt-4">SOCIETY</span>
              </h1>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end">
              <img
                src={image1}
                alt="Gaming illustration"
                className="w-full max-w-md lg:max-w-xl xl:max-w-2xl h-auto object-contain"
              />
            </div>
          </div>
        </section>

        <section className="relative px-8 lg:px-[192px] py-12 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-6">
                <div>
                  <h2 className="text-4xl lg:text-5xl xl:text-[67px] font-semibold leading-tight lg:leading-[84px]">
                    <span className="text-jugs-red">Who</span>
                    <span className="text-white"> Are We</span>
                  </h2>
                </div>
              </div>

              <div className="flex mb-6">
                <div className="w-1 h-auto bg-jugs-red rounded-full flex-shrink-0"></div>
                <div className="pl-4">
                  <p className="text-sm lg:text-base leading-relaxed lg:leading-[30px] font-semibold max-w-2xl">
                    Jadavpur University Gaming Society (JUGS) is your home for
                    pixels, passion, and competitive spirit. We are a thriving
                    community of students united by a love for all platforms—from
                    PC and console titans to intricate tabletop games. Join us to
                    find teammates, compete in thrilling tournaments, and share
                    knowledge. This is where friendships are forged and champions
                    are made.
                  </p>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-block bg-jugs-red text-white px-8 py-3 rounded-[17px] text-sm lg:text-base font-semibold hover:bg-red-600 transition-colors"
              >
                Know More About Us
              </Link>
            </div>

            <div className="flex-1 flex justify-center w-full">
              <img
                src={image2}
                alt="Community illustration"
                className="w-full max-w-md lg:max-w-lg h-auto object-contain"
              />
            </div>
          </div>
        </section>

        <section className="relative px-8 lg:px-[192px] py-12 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
            <div className="flex-1 flex justify-center w-full order-2 lg:order-1">
              <img
                src={image3}
                alt="Team illustration"
                className="w-full max-w-md lg:max-w-lg h-auto object-contain"
              />
            </div>

            <div className="flex-1 order-1 lg:order-2">
              <div className="flex items-start gap-4 mb-6">
                <div>
                  <h2 className="text-4xl lg:text-5xl xl:text-[67px] font-semibold leading-tight lg:leading-[84px]">
                    <span className="text-white">Meet Our </span>
                    <span className="text-jugs-red">Team</span>
                  </h2>
                </div>
              </div>

              <div className="flex mb-6">
                <div className="w-1 h-auto bg-jugs-red rounded-full flex-shrink-0"></div>
                <div className="pl-4">
                  <p className="text-sm lg:text-base leading-relaxed lg:leading-[30px] font-semibold max-w-2xl">
                    The Jadavpur University Games Society grows through cooperation and shared passion.
                    Every tournament, workshop, and initiative succeeds because our members come together with
                    creativity and commitment. What we achieve is never the effort of one person. It is the
                    result of many minds working with a common purpose.
                  </p>
                </div>
              </div>

              <Link
                to="/members"
                className="inline-block bg-jugs-red text-white px-8 py-3 rounded-[17px] text-sm lg:text-base font-semibold hover:bg-red-600 transition-colors"
              >
                Meet Our Team
              </Link>

            </div>
          </div>
        </section>

        <section className="px-8 lg:px-[192px] py-12 lg:py-24">
          <h2 className="text-4xl lg:text-5xl xl:text-[67px] font-semibold leading-tight lg:leading-[84px] mb-8 lg:mb-12">
            <span className="text-white">Our Recent </span>
            <span className="text-jugs-red">Events</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {events.map((event) => (
              <div
                key={event.id}
                className="group bg-jugs-card-bg border border-jugs-red rounded-[23px] p-6 flex flex-col gap-6 hover:border-red-400 transition-all duration-300 hover:shadow-lg hover:shadow-jugs-red/20 overflow-hidden"
              >
                <div className="relative overflow-hidden rounded-[23px]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-[400px] object-cover rounded-[23px] transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[23px]"></div>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                    {event.title}
                  </h3>
                  <p className="text-jugs-red text-lg lg:text-xl font-bold">
                    {event.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
