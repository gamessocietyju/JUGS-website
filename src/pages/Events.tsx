import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Tech Cradels",
      date: "March 11, 2023 - March 13,2023",
      description:
        "Jadhavpur Gaming Society (JUGS) is your home for pixels, passion, and competitive spirit. We are a thriving community of students united by a love for all platforms—from PC and console titans",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/dfaafb9b0257b2d9633b9c20af3d9c56497cdd88?width=336",
    },
    {
      id: 2,
      title: "Tech Cradels",
      date: "March 11, 2023 - March 13,2023",
      description:
        "Jadhavpur Gaming Society (JUGS) is your home for pixels, passion, and competitive spirit. We are a thriving community of students united by a love for all platforms—from PC and console titans",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/dfaafb9b0257b2d9633b9c20af3d9c56497cdd88?width=336",
    },
    {
      id: 3,
      title: "Tech Cradels",
      date: "March 11, 2023 - March 13,2023",
      description:
        "Jadhavpur Gaming Society (JUGS) is your home for pixels, passion, and competitive spirit. We are a thriving community of students united by a love for all platforms—from PC and console titans",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/dfaafb9b0257b2d9633b9c20af3d9c56497cdd88?width=336",
    },
    {
      id: 4,
      title: "Tech Cradels",
      date: "March 11, 2023 - March 13,2023",
      description:
        "Jadhavpur Gaming Society (JUGS) is your home for pixels, passion, and competitive spirit. We are a thriving community of students united by a love for all platforms—from PC and console titans",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/dfaafb9b0257b2d9633b9c20af3d9c56497cdd88?width=336",
    },
    {
      id: 5,
      title: "Tech Cradels",
      date: "March 11, 2023 - March 13,2023",
      description:
        "Jadhavpur Gaming Society (JUGS) is your home for pixels, passion, and competitive spirit. We are a thriving community of students united by a love for all platforms—from PC and console titans",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/dfaafb9b0257b2d9633b9c20af3d9c56497cdd88?width=336",
    },
    {
      id: 6,
      title: "Tech Cradels",
      date: "March 11, 2023 - March 13,2023",
      description:
        "Jadhavpur Gaming Society (JUGS) is your home for pixels, passion, and competitive spirit. We are a thriving community of students united by a love for all platforms—from PC and console titans",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/dfaafb9b0257b2d9633b9c20af3d9c56497cdd88?width=336",
    },
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
              className="bg-[#191919] border border-white rounded-3xl p-6 lg:p-12 flex flex-col md:flex-row gap-6 hover:border-gray-300 transition-colors"
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

                <a
                  href="#"
                  className="text-sm lg:text-base font-bold text-jugs-red hover:underline mt-4 inline-block"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
