import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Gallery() {
  return (
    <div className="min-h-screen bg-jugs-dark">
      <Navigation />

      <main className="px-4 lg:px-6 py-12 lg:py-24">
        <h1 className="text-4xl lg:text-5xl xl:text-[67px] font-semibold leading-tight lg:leading-[84px] mb-8 lg:mb-12 px-4 lg:px-[158px]">
          <span className="text-jugs-red">Event</span>
          <span className="text-white"> Gallery</span>
        </h1>

        <div className="w-full max-w-[1716px] mx-auto">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/fc612531887c9c55e6ab41a9df35a08e8c05d207?width=3432"
            alt="Gaming Gallery"
            className="w-full h-auto object-contain"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
