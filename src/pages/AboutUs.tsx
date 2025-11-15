import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import image1 from '@/assets/about/valo.jpg';
import image2 from '@/assets/about/racing.jpg';
import image3 from '@/assets/about/bgmi.jpg';
import image4 from '@/assets/about/eafc.jpg';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-jugs-dark">
      <Navigation />

      <main className="px-8 lg:px-[124px] py-12 lg:py-24">
        <h1 className="text-4xl lg:text-5xl xl:text-[67px] font-semibold leading-tight lg:leading-[84px] mb-12 lg:mb-16">
          <span className="text-jugs-red">About</span>
          <span className="text-white"> Us</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          <div className="w-full lg:w-[650px] h-[650px] relative">
            {/* Top Left Image */}
            <div className="absolute top-0 left-0 w-1/2 h-1/2 p-2">
              <img
                src={image1}
                alt="Gaming event"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Top Right Image */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 p-2">
              <img
                src={image2}
                alt="Esports tournament"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Bottom Left Image */}
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 p-2">
              <img
                src={image3}
                alt="Game development"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Bottom Right Image */}
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 p-2">
              <img
                src={image4}
                alt="Team building"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="space-y-6 lg:space-y-8">
              <p className="text-base lg:text-xl font-medium leading-[30px]">
                Jadavpur University Games Society (JUGS) is the official gaming and esports society
                of Jadavpur University. The society was created to unite students who share an interest
                in casual gaming, competitive esports, game development, and interactive digital
                entertainment.
              </p>

              <p className="text-base lg:text-xl font-medium leading-[30px]">
                JUGS aims to provide a platform that encourages enthusiasm for gaming while promoting
                creativity, teamwork, and strategic thinking. We believe that gaming is more than a
                pastime. It builds problem solving skills, sharpens reflexes, and strengthens
                collaboration.
              </p>

              <p className="text-base lg:text-xl font-medium leading-[30px]">
                Throughout the year, we organize a wide range of activities including esports tournaments,
                friendly competitions, LAN events, and game development workshops. These events are designed to help students explore the technical, competitive,
                and entertainment aspects of the gaming world.
              </p>

              <p className="text-base lg:text-xl font-medium leading-[30px]">
                Our goal is to create a vibrant and inclusive gaming community within Jadavpur University.
                Whether you are a competitive player, a casual gamer, or someone interested in the creative side
                of game development, JUGS offers opportunities for everyone to learn, engage, and grow.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
