import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface PlaceholderPageProps {
  title: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-jugs-dark flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center px-8 py-24">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">{title}</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-8">
            This page is under construction. Check back soon for updates!
          </p>
          <div className="w-16 h-1 bg-jugs-red mx-auto rounded-full"></div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
