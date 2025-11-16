import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone } from "lucide-react";
import chairperson from '@/assets/members/sumit.jpg';
import viceChairperson from '@/assets/members/sunandan.jpg';
import secretary from '@/assets/members/touseef.jpg';
import jointSecretary from '@/assets/members/sumit.jpg';
import treasurer from '@/assets/members/mahtab.jpg';
import prHead from '@/assets/members/aritra.jpg';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string; // URL to the profile image
}

export default function Members() {
  const coreLeadership: TeamMember[] = [
    {
      id: 1,
      name: "Sumit De",
      role: "Chairperson",
      image: chairperson,
    },
    {
      id: 2,
      name: "Sunandan Pahari",
      role: "Vice Chairperson",
      image: viceChairperson,
    },
    {
      id: 3,
      name: "Md Touseef Alam",
      role: "Secretary",
      image: secretary,
    },
    {
      id: 4,
      name: "Ayush Bhakta",
      role: "Joint Secretary",
      image: jointSecretary,
    },
    {
      id: 5,
      name: "Md Mahtabuddin",
      role: "Treasurer",
      image: treasurer,
    },
  ];

  const prTeam: TeamMember[] = [
    {
      id: 1,
      name: "Aritra Mondal",
      role: "PR Head",
      image: prHead,
    },
    {
      id: 2,
      name: "Event Manager 2",
      role: "Event Manager",
      image: "",
    },
    {
      id: 3,
      name: "Operations 1",
      role: "Operations",
      image: "",
    },
    {
      id: 4,
      name: "Operations 2",
      role: "Operations",
      image: "",
    },
  ];

  const designTeam: TeamMember[] = [
    {
      id: 1,
      name: "Design Head",
      role: "Design Head",
      image: "",
    },
    {
      id: 2,
      name: "Design 2",
      role: "Design",
      image: "",
    },
    {
      id: 3,
      name: "Design 3",
      role: "Design",
      image: "",
    },
    {
      id: 4,
      name: "Design 4",
      role: "Design",
      image: "",
    },
  ];

  const contentTeam: TeamMember[] = [
    {
      id: 1,
      name: "Content Head",
      role: "Content Head",
      image: "",
    },
    {
      id: 2,
      name: "Content 2",
      role: "Content",
      image: "",
    },
    {
      id: 3,
      name: "Content 3",
      role: "Content",
      image: "",
    },
    {
      id: 4,
      name: "Content 4",
      role: "Content",
      image: "",
    },
  ];

  const operationsTeam: TeamMember[] = [
    {
      id: 1,
      name: "Operations Head",
      role: "Operations Head",
      image: "",
    },
    {
      id: 2,
      name: "Operations 2",
      role: "Operations",
      image: "",
    },
    {
      id: 3,
      name: "Operations 3",
      role: "Operations",
      image: "",
    },
    {
      id: 4,
      name: "Operations 4",
      role: "Operations",
      image: "",
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
              <span className="text-jugs-red">PR & Marketing</span>
              <span className="text-white"> Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {prTeam.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        <section className="mb-16 lg:mb-24">
          <div className="flex items-center gap-4 mb-8 lg:mb-12">
            <div className="w-1 h-12 bg-white rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold">
              <span className="text-jugs-red">Design</span>
              <span className="text-white"> Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {designTeam.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        <section className="mb-16 lg:mb-24">
          <div className="flex items-center gap-4 mb-8 lg:mb-12">
            <div className="w-1 h-12 bg-white rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold">
              <span className="text-jugs-red">Content</span>
              <span className="text-white"> Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {contentTeam.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        <section className="mb-16 lg:mb-24">
          <div className="flex items-center gap-4 mb-8 lg:mb-12">
            <div className="w-1 h-12 bg-white rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold">
              <span className="text-jugs-red">Operations & Logistics</span>
              <span className="text-white"> Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {operationsTeam.map((member) => (
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
      <div className="w-28 h-28 lg:w-[114px] lg:h-[114px] rounded-full bg-white flex-shrink-0 overflow-hidden">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-600"></div>
        )}
      </div>

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
