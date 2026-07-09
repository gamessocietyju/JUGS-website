import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import chairperson from '@/assets/members/sumit.jpg';
import viceChairperson from '@/assets/members/sunandan.jpg';
import secretary from '@/assets/members/touseef.jpg';
import jointSecretary from '@/assets/members/ayush.jpg';
import treasurer from '@/assets/members/mahtab.jpg';

import prHead from '@/assets/members/aritra.jpg';
import prMember1 from '@/assets/members/tanishq.jpg'

import designHead from '@/assets/members/sree.png'
import designMember1 from '@/assets/members/dipram.jpg'

import contentHead from '@/assets/members/ronit.jpg'
import contentMember1 from '@/assets/members/krish.jpg'
import contentMember2 from '@/assets/members/rahul.jpg'
import contentMember3 from '@/assets/members/sanglap.jpg'
import contentMember4 from '@/assets/members/ayantika.jpg'
import contentMember5 from '@/assets/members/imran.jpg'
import contentMember6 from '@/assets/members/rudranil.jpg'

import operationsHead from '@/assets/members/priyabrata.jpg'
import logisticsHead from '@/assets/members/mayukh.jpg'
import olMember1 from '@/assets/members/amrit.jpg'
import olMember2 from '@/assets/members/saujatya.jpg'
import olMember3 from '@/assets/members/soumayan.jpg'
import olMember4 from '@/assets/members/ayantika.jpg'
import olMember5 from '@/assets/members/soham.jpg'
import olMember6 from '@/assets/members/imran.jpg'

import appointmentHead from '@/assets/members/suvodip.jpg'
import appointmentMember1 from '@/assets/members/ranit2.jpg'
import appointmentMember2 from '@/assets/members/souparna.jpg'
import appointmentMember3 from '@/assets/members/nirjhar.jpg'
import appointmentMember4 from '@/assets/members/krish.jpg'

import techHead from '@/assets/members/default.jpg'
import techMember1 from '@/assets/members/sauhardya.jpg'
import TiltCard from "@/components/interactions/TiltCard";

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
      name: "Md Mahtabuddin",
      role: "Treasurer",
      image: treasurer,
    },
    {
      id: 4,
      name: "Md Touseef Alam",
      role: "Secretary",
      image: secretary,
    },
    {
      id: 5,
      name: "Ayush Bhakta",
      role: "Joint Secretary",
      image: jointSecretary,
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
      name: "Tanishq Majumdar",
      role: "Member",
      image: prMember1,
    },
  ];

  const designTeam: TeamMember[] = [
    {
      id: 1,
      name: "Sree Kirtan",
      role: "Design Head",
      image: designHead,
    },
    {
      id: 2,
      name: "Dipram Biswas",
      role: "Member",
      image: designMember1,
    },
  ];

  const contentTeam: TeamMember[] = [
    {
      id: 1,
      name: "Ronit Sarkar",
      role: "Content Head",
      image: contentHead,
    },
    {
      id: 2,
      name: "Krish Agarwal",
      role: "Member",
      image: contentMember1,
    },
    {
      id: 3,
      name: "Rahul Mondal",
      role: "Member",
      image: contentMember2,
    },
    {
      id: 4,
      name: "Sanglap Das",
      role: "Member",
      image: contentMember3,
    },
    {
      id: 5,
      name: "Ayantika Das",
      role: "Member",
      image: contentMember4,
    },
    {
      id: 6,
      name: "Imran Ahamed",
      role: "Member",
      image: contentMember5,
    },
    {
      id: 7,
      name: "Rudranil Mondal",
      role: "Member",
      image: contentMember6,
    },
  ];

  const operationsTeam: TeamMember[] = [
    {
      id: 1,
      name: "Priyabrata Mondal",
      role: "Operations Head",
      image: operationsHead,
    },
    {
      id: 2,
      name: "Mayukh Sinha",
      role: "Logistics Head",
      image: logisticsHead,
    },
    {
      id: 3,
      name: "Amrit Tiwari",
      role: "Member",
      image: olMember1,
    },
    {
      id: 4,
      name: "Saujatya Pal",
      role: "Member",
      image: olMember2,
    },
    {
      id: 5,
      name: "Soumayan Nandi",
      role: "Member",
      image: olMember3,
    },
    {
      id: 6,
      name: "Ayantika Das",
      role: "Member",
      image: olMember4,
    },
    {
      id: 7,
      name: "Soham Dekhan",
      role: "Member",
      image: olMember5,
    },
    {
      id: 8,
      name: "Imran Ahamed",
      role: "Member",
      image: olMember6,
    },
  ];

  const appointmentTeam: TeamMember[] = [
    {
      id: 1,
      name: "Suvodip Howladar",
      role: "Appointment Head",
      image: appointmentHead,
    },
    {
      id: 2,
      name: "Ranit Gorai",
      role: "Member",
      image: appointmentMember1,
    },
    {
      id: 3,
      name: "Souparna Kundu",
      role: "Member",
      image: appointmentMember2,
    },
    {
      id: 4,
      name: "Nirjhar",
      role: "Member",
      image: appointmentMember3,
    },
    {
      id: 5,
      name: "Krish Agarwal",
      role: "Member",
      image: appointmentMember4,
    },
  ];

  const techTeam: TeamMember[] = [
    {
      id: 1,
      name: "Md Farshid Hossain",
      role: "Tech Head",
      image: techHead,
    },
    {
      id: 2,
      name: "Sauhardya Hazra",
      role: "Member",
      image: techMember1,
    },
  ];

  return (
    <div className="min-h-screen bg-jugs-dark text-white selection:bg-jugs-primary selection:text-white">
      <Navigation />

      <main className="px-6 md:px-12 lg:px-20 py-16 lg:py-28 max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-black uppercase tracking-wider leading-tight mb-16 lg:mb-20"
        >
          <span className="text-white">Meet the </span>
          <span className="text-gradient-accent">Team</span>
        </motion.h1>

        {/* Core Team */}
        <section className="mb-16 lg:mb-20">
          <div className="flex items-center gap-4 mb-8 lg:mb-10">
            <div className="w-[3px] h-10 bg-jugs-primary rounded-full shadow-[0_0_8px_#5B5FFF]"></div>
            <h2 className="text-xl lg:text-2xl font-black uppercase tracking-wider">
              <span className="text-gradient-primary">Core </span>
              <span className="text-white"> Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreLeadership.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* PR Team */}
        <section className="mb-16 lg:mb-20">
          <div className="flex items-center gap-4 mb-8 lg:mb-10">
            <div className="w-[3px] h-10 bg-jugs-accent rounded-full shadow-[0_0_8px_#FF3366]"></div>
            <h2 className="text-xl lg:text-2xl font-black uppercase tracking-wider">
              <span className="text-gradient-accent">PR & Marketing</span>
              <span className="text-white"> Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {prTeam.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Design Team */}
        <section className="mb-16 lg:mb-20">
          <div className="flex items-center gap-4 mb-8 lg:mb-10">
            <div className="w-[3px] h-10 bg-jugs-primary rounded-full shadow-[0_0_8px_#5B5FFF]"></div>
            <h2 className="text-xl lg:text-2xl font-black uppercase tracking-wider">
              <span className="text-gradient-primary">Design</span>
              <span className="text-white"> Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {designTeam.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Content Team */}
        <section className="mb-16 lg:mb-20">
          <div className="flex items-center gap-4 mb-8 lg:mb-10">
            <div className="w-[3px] h-10 bg-jugs-accent rounded-full shadow-[0_0_8px_#FF3366]"></div>
            <h2 className="text-xl lg:text-2xl font-black uppercase tracking-wider">
              <span className="text-gradient-accent">Content</span>
              <span className="text-white"> Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {contentTeam.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Operations Team */}
        <section className="mb-16 lg:mb-20">
          <div className="flex items-center gap-4 mb-8 lg:mb-10">
            <div className="w-[3px] h-10 bg-jugs-primary rounded-full shadow-[0_0_8px_#5B5FFF]"></div>
            <h2 className="text-xl lg:text-2xl font-black uppercase tracking-wider">
              <span className="text-gradient-primary">Operations & Logistics</span>
              <span className="text-white"> Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {operationsTeam.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Appointment Team */}
        <section className="mb-16 lg:mb-20">
          <div className="flex items-center gap-4 mb-8 lg:mb-10">
            <div className="w-[3px] h-10 bg-jugs-accent rounded-full shadow-[0_0_8px_#FF3366]"></div>
            <h2 className="text-xl lg:text-2xl font-black uppercase tracking-wider">
              <span className="text-gradient-accent">Appointment</span>
              <span className="text-white"> Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {appointmentTeam.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Tech Team */}
        <section className="mb-16 lg:mb-20">
          <div className="flex items-center gap-4 mb-8 lg:mb-10">
            <div className="w-[3px] h-10 bg-jugs-primary rounded-full shadow-[0_0_8px_#5B5FFF]"></div>
            <h2 className="text-xl lg:text-2xl font-black uppercase tracking-wider">
              <span className="text-gradient-primary">Tech</span>
              <span className="text-white"> Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {techTeam.map((member) => (
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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="w-full flex"
    >
      <TiltCard className="w-full bg-[#171B24]/50 backdrop-blur-md border border-white/5 rounded-2xl p-6 flex flex-col items-center gap-4 hover:border-jugs-primary/40 cursor-pointer">
        <div className="w-[110px] h-[110px] rounded-full p-[3px] bg-gradient-to-tr from-jugs-primary/20 via-white/5 to-jugs-secondary/30 flex-shrink-0 overflow-hidden relative shadow-[0_0_15px_rgba(0,212,255,0.1)]">
          <div className="w-full h-full rounded-full overflow-hidden bg-[#070B12]">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110 hover:brightness-110"
              />
            ) : (
              <div className="w-full h-full bg-jugs-surface"></div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 w-full mt-2">
          <h3 className="text-lg lg:text-xl font-bold font-orbitron tracking-wide text-white text-center">
            {member.name}
          </h3>
          <p className="text-sm font-semibold text-jugs-secondary font-orbitron tracking-wider text-center uppercase">
            {member.role}
          </p>
        </div>
      </TiltCard>
    </motion.div>
  );
}
