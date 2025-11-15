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
    <div className="bg-[#191919] border border-white rounded-3xl p-4 lg:p-6 flex flex-col items-center gap-6 hover:border-gray-300 transition-colors">
      <div className="w-28 h-28 lg:w-[114px] lg:h-[114px] rounded-full bg-gray-600 flex-shrink-0"></div>

      <div className="flex flex-col items-center gap-6 w-full">
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-xl lg:text-2xl font-semibold text-white text-center">
            {member.name}
          </h3>
          <p className="text-lg lg:text-xl font-semibold text-jugs-red text-center">
            {member.role}
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 w-full">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-white" />
            <a
              href={`tel:${member.phone}`}
              className="text-sm lg:text-base text-white hover:text-jugs-red transition-colors"
            >
              {member.phone}
            </a>
          </div>

          <div className="flex items-center gap-2 w-full justify-center">
            <Mail className="w-4 h-4 text-white flex-shrink-0" />
            <a
              href={`mailto:${member.email}`}
              className="text-sm lg:text-base text-white hover:text-jugs-red transition-colors truncate"
            >
              {member.email}
            </a>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <svg
                className="w-9 h-9"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.6665 10.7917C24.6665 10.3828 24.8289 9.99066 25.118 9.70154C25.4072 9.41243 25.7993 9.25 26.2082 9.25C26.617 9.25 27.0092 9.41243 27.2983 9.70154C27.5874 9.99066 27.7498 10.3828 27.7498 10.7917C27.7498 11.2005 27.5874 11.5927 27.2983 11.8818C27.0092 12.1709 26.617 12.3333 26.2082 12.3333C25.7993 12.3333 25.4072 12.1709 25.118 11.8818C24.8289 11.5927 24.6665 11.2005 24.6665 10.7917Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.5002 11.1771C16.558 11.1771 14.6954 11.9486 13.3221 13.3219C11.9488 14.6952 11.1772 16.5578 11.1772 18.5C11.1772 20.4422 11.9488 22.3048 13.3221 23.6781C14.6954 25.0514 16.558 25.8229 18.5002 25.8229C20.4423 25.8229 22.3049 25.0514 23.6782 23.6781C25.0516 22.3048 25.8231 20.4422 25.8231 18.5C25.8231 16.5578 25.0516 14.6952 23.6782 13.3219C22.3049 11.9486 20.4423 11.1771 18.5002 11.1771ZM13.4897 18.5C13.4897 17.1712 14.0176 15.8967 14.9573 14.9571C15.8969 14.0175 17.1713 13.4896 18.5002 13.4896C19.829 13.4896 21.1034 14.0175 22.0431 14.9571C22.9827 15.8967 23.5106 17.1712 23.5106 18.5C23.5106 19.8288 22.9827 21.1033 22.0431 22.0429C21.1034 22.9825 19.829 23.5104 18.5002 23.5104C17.1713 23.5104 15.8969 22.9825 14.9573 22.0429C14.0176 21.1033 13.4897 19.8288 13.4897 18.5Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26.6059 4.36754C21.2184 3.77002 15.7813 3.77002 10.3938 4.36754C7.29194 4.71441 4.78673 7.15795 4.4229 10.2752C3.78481 15.7398 3.78481 21.2602 4.4229 26.7248C4.78673 29.842 7.2904 32.2856 10.3938 32.6325C15.7814 33.2287 21.2183 33.2287 26.6059 32.6325C29.7078 32.2856 32.213 29.842 32.5768 26.7248C33.2149 21.2602 33.2149 15.7398 32.5768 10.2752C32.213 7.15795 29.7093 4.71441 26.6059 4.36754ZM10.6497 6.66462C15.8671 6.08605 21.1326 6.08605 26.35 6.66462C28.4004 6.89587 30.0423 8.51308 30.2813 10.545C30.8997 15.8303 30.8997 21.1697 30.2813 26.455C30.1577 27.4494 29.7024 28.3732 28.9891 29.077C28.2758 29.7808 27.346 30.2236 26.35 30.3338C21.1326 30.9124 15.8671 30.9124 10.6497 30.3338C9.65368 30.2236 8.72392 29.7808 8.0106 29.077C7.29727 28.3732 6.84204 27.4494 6.71844 26.455C6.10001 21.1697 6.10001 15.8303 6.71844 10.545C6.84204 9.55056 7.29727 8.62682 8.0106 7.92301C8.72392 7.2192 9.65368 6.77486 10.6497 6.66462Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <svg
                className="w-9 h-9"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.5579 3.08333H5.44203C5.14846 3.07925 4.85697 3.13305 4.58419 3.24163C4.31142 3.35022 4.06271 3.51148 3.85226 3.7162C3.64181 3.92092 3.47376 4.16509 3.35769 4.43477C3.24161 4.70445 3.1798 4.99435 3.17578 5.28791V31.7121C3.1798 32.0056 3.24161 32.2955 3.35769 32.5652C3.47376 32.8349 3.64181 33.0791 3.85226 33.2838C4.06271 33.4885 4.31142 33.6498 4.58419 33.7584C4.85697 33.8669 5.14846 33.9207 5.44203 33.9167H31.5579C31.8514 33.9207 32.1429 33.8669 32.4157 33.7584C32.6885 33.6498 32.9372 33.4885 33.1476 33.2838C33.3581 33.0791 33.5261 32.8349 33.6422 32.5652C33.7583 32.2955 33.8201 32.0056 33.8241 31.7121V5.28791C33.8201 4.99435 33.7583 4.70445 33.6422 4.43477C33.5261 4.16509 33.3581 3.92092 33.1476 3.7162C32.9372 3.51148 32.6885 3.35022 32.4157 3.24163C32.1429 3.13305 31.8514 3.07925 31.5579 3.08333ZM12.472 28.8908H7.84703V15.0158H12.472V28.8908ZM10.1595 13.0733C9.52169 13.0733 8.90996 12.8199 8.45894 12.3689C8.00791 11.9179 7.75453 11.3062 7.75453 10.6683C7.75453 10.0305 8.00791 9.41876 8.45894 8.96774C8.90996 8.51671 9.52169 8.26333 10.1595 8.26333C10.4982 8.22492 10.8412 8.25848 11.166 8.36182C11.4909 8.46515 11.7902 8.63594 12.0445 8.86298C12.2987 9.09002 12.5021 9.36821 12.6414 9.67932C12.7807 9.99044 12.8527 10.3275 12.8527 10.6683C12.8527 11.0092 12.7807 11.3462 12.6414 11.6573C12.5021 11.9684 12.2987 12.2466 12.0445 12.4737C11.7902 12.7007 11.4909 12.8715 11.166 12.9748C10.8412 13.0782 10.4982 13.1117 10.1595 13.0733ZM29.1529 28.8908H24.5279V21.4446C24.5279 19.5792 23.8649 18.3612 22.1845 18.3612C21.6645 18.3651 21.1581 18.5282 20.7336 18.8286C20.3091 19.1291 19.9869 19.5525 19.8104 20.0417C19.6897 20.404 19.6374 20.7856 19.6562 21.1671V28.8754H15.0312V15.0004H19.6562V16.9583C20.0763 16.2293 20.6874 15.6287 21.4236 15.2212C22.1598 14.8137 22.9932 14.6148 23.8341 14.6458C26.9174 14.6458 29.1529 16.6346 29.1529 20.905V28.8908Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
