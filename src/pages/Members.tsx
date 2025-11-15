import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  phone: string;
  email: string;
  instagram: string;
  linkedin: string;
}

export default function Members() {
  const coreLeadership: TeamMember[] = [
    {
      id: 1,
      name: "Full Name",
      role: "Role",
      phone: "+91 9456157852",
      email: "randomemail@gmail.com",
      instagram: "#",
      linkedin: "#",
    },
    {
      id: 2,
      name: "Full Name",
      role: "Role",
      phone: "+91 9456157852",
      email: "randomemail@gmail.com",
      instagram: "#",
      linkedin: "#",
    },
    {
      id: 3,
      name: "Full Name",
      role: "Role",
      phone: "+91 9456157852",
      email: "randomemail@gmail.com",
      instagram: "#",
      linkedin: "#",
    },
    {
      id: 4,
      name: "Full Name",
      role: "Role",
      phone: "+91 9456157852",
      email: "randomemail@gmail.com",
      instagram: "#",
      linkedin: "#",
    },
    {
      id: 5,
      name: "Full Name",
      role: "Role",
      phone: "+91 9456157852",
      email: "randomemail@gmail.com",
      instagram: "#",
      linkedin: "#",
    },
    {
      id: 6,
      name: "Full Name",
      role: "Role",
      phone: "+91 9456157852",
      email: "randomemail@gmail.com",
      instagram: "#",
      linkedin: "#",
    },
  ];

  const eventOperations: TeamMember[] = [
    {
      id: 1,
      name: "Full Name",
      role: "Role",
      phone: "+91 9456157852",
      email: "randomemail@gmail.com",
      instagram: "#",
      linkedin: "#",
    },
    {
      id: 2,
      name: "Full Name",
      role: "Role",
      phone: "+91 9456157852",
      email: "randomemail@gmail.com",
      instagram: "#",
      linkedin: "#",
    },
    {
      id: 3,
      name: "Full Name",
      role: "Role",
      phone: "+91 9456157852",
      email: "randomemail@gmail.com",
      instagram: "#",
      linkedin: "#",
    },
    {
      id: 4,
      name: "Full Name",
      role: "Role",
      phone: "+91 9456157852",
      email: "randomemail@gmail.com",
      instagram: "#",
      linkedin: "#",
    },
    {
      id: 5,
      name: "Full Name",
      role: "Role",
      phone: "+91 9456157852",
      email: "randomemail@gmail.com",
      instagram: "#",
      linkedin: "#",
    },
    {
      id: 6,
      name: "Full Name",
      role: "Role",
      phone: "+91 9456157852",
      email: "randomemail@gmail.com",
      instagram: "#",
      linkedin: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-jugs-dark">
      <Navigation />

      <main className="px-8 lg:px-[120px] py-12 lg:py-24">
        <h1 className="text-4xl lg:text-5xl xl:text-[67px] font-semibold leading-tight lg:leading-[84px] mb-16 lg:mb-20">
          <span className="text-white">Meet the </span>
          <span className="text-jugs-red">Core</span>
          <span className="text-white"> Team</span>
        </h1>

        <section className="mb-16 lg:mb-24">
          <div className="flex items-center gap-4 mb-8 lg:mb-12">
            <div className="w-1 h-12 bg-white rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold">
              <span className="text-jugs-red">Core Leadership</span>
              <span className="text-white"> Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreLeadership.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        <section className="mb-16 lg:mb-24">
          <div className="flex items-center gap-4 mb-8 lg:mb-12">
            <div className="w-1 h-12 bg-white rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold">
              <span className="text-jugs-red">Event & Operations</span>
              <span className="text-white"> Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {eventOperations.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-[#191919] border border-white rounded-3xl p-4 lg:p-6 flex flex-col items-center gap-4 hover:border-jugs-red/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(220,38,38,0.2)]">
      <div className="w-28 h-28 lg:w-[114px] lg:h-[114px] rounded-full bg-gray-600 flex-shrink-0"></div>

      <div className="flex flex-col items-center gap-2 w-full">
        <h3 className="text-xl lg:text-2xl font-semibold text-white text-center">
          {member.name}
        </h3>
        <p className="text-lg lg:text-xl font-semibold text-jugs-red text-center">
          {member.role}
        </p>
      </div>
    </div>
  );
}
