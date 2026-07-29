import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-6 sm:gap-8 items-start">
        {/* Photo card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-pink-500/30 blur-xl" />
            <Image
              src="/images/jawad.png"
              alt="Jawad Olamide Yuusuf, founder of NovaGlide Tech Solutions"
              width={400}
              height={400}
              className="relative rounded-full w-full h-full object-cover border border-white/10"
            />
          </div>
          <h2
            className="text-xl sm:text-2xl font-bold mt-5"
            style={{ color: "#ffffff" }}
          >
            Jawad Olamide Yuusuf
          </h2>
          <p
            className="text-sm mt-1"
            style={{ color: "#c4b5fd" }}
          >
            Software Developer &amp; Project Manager
          </p>
          <p
            className="text-xs mt-1"
            style={{ color: "#9ca3af" }}
          >
            Ibadan, Nigeria
          </p>
        </div>

        {/* Bio card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10">
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: "#c4b5fd" }}
          >
            Experience
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {["React", "Next.js", "TypeScript", "Project Management"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full border border-white/15 bg-white/5"
                  style={{ color: "#e5e7eb" }}
                >
                  {tag}
                </span>
              )
            )}
          </div>

          <div
            className="space-y-4 text-sm sm:text-base leading-relaxed"
            style={{ color: "#e5e7eb" }}
          >
            <p>
              I&apos;m a software developer with experience building modern web
              applications from the planning stage through deployment. My work spans
              product planning, front-end development, and project coordination, allowing
              me to contribute beyond writing code and help turn ideas into products that
              people can actually use.
            </p>

            <p>
              I currently serve as Project Manager for the US-based 021 Strategy Modeler,
              leading a remote product team by coordinating sprint planning, tracking
              progress, documenting requirements, and keeping development aligned with
              project goals. Alongside that role, I work as a Frontend Developer with
              Starlight Energy & Agro Allied Ltd, where I&apos;m helping build a fintech
              and agricultural platform that gives smallholder farmers easier access to
              financing and digital services.
            </p>

            <p>
              Before these roles, I worked with Cyberbuddies and SmartHiveTech Solutions,
              where I gained hands-on experience building responsive interfaces and
              delivering production-ready applications. Over the years, I&apos;ve worked
              on projects including a cryptocurrency trading platform, a bilingual school
              management system with staff and student portals, AgriConnect, an agritech
              platform featuring credit scoring and risk monitoring, and Founders Fund, an
              equity management platform with role-based access and interactive dashboards.
            </p>

            <p>
              Every project has strengthened my ability to solve real business problems,
              collaborate with teams, and build software that is clean, reliable, and easy
              to maintain. Whether I&apos;m leading a project, developing new features, or
              improving an existing product, my goal is always the same: deliver solutions
              that create lasting value for both clients and their users.
            </p>

            <p>
              NovaGlide Tech Solutions brings all of that experience together. It&apos;s
              where I work directly with businesses, startups, and individuals to design,
              build, and improve digital products with clear communication, thoughtful
              planning, and attention to quality from start to finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}