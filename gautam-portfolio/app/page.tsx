// import { ProjectPosts } from "app/components/posts";
// import { SubstackEmbed } from "app/components/substack";
import Link from "next/link";
import Image from "next/image";
import { ExperienceTimeline } from "@/components/experience-timeline";
// import { FloatingNavbar } from "app/components/floating-navbar";

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 p-6 rounded-xl">
      <h4 className="font-semibold mb-4 text-lg">{title}</h4>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-sm text-gray-700 dark:text-gray-300">
            • {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Page() {
  return (
    <div className="space-y-24">
      {/* <FloatingNavbar /> */}
      {/* Hero Section */}
      <section className="pt-16 pb-24">
        <div className="text-center">
          <div className="mb-8">
            <Image
              src="/gautam.jpeg"
              alt="Gautam Sankara Raman"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-8 shadow-lg"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            Gautam Sankara Raman
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Final-year Mechanical Engineering student with a strong focus on
            mechanical design, DFM-conscious engineering, and system-level
            problem solving.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
            About
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            I am a final-year Mechanical Engineering student at BITS Pilani (Goa
            Campus) with a design-first engineering mindset. My work spans
            mechanical design, simulation-driven analysis, and structured
            manufacturing training, enabling me to design components and systems
            with an understanding of how they are analyzed, fabricated,
            inspected, and deployed.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <ExperienceTimeline />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
            Engineering Projects
          </h2>
        </div>
      </section>

      {/* Skills & Manufacturing Section */}
      <section id="skills" className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
            Technical Skills & Manufacturing Competence
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center max-w-4xl mx-auto">
            Formal laboratory and workshop training providing hands-on
            understanding of manufacturing processes, inspection methods, and
            experimental validation relevant to mechanical design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillCategory
              title="Design & CAD"
              skills={[
                "SolidWorks (Advanced)",
                "AutoCAD",
                "Mechanical design principles",
                "DFM considerations",
                "Tolerancing & GD&T",
              ]}
            />
            <SkillCategory
              title="Simulation & Analysis"
              skills={[
                "ANSYS Fluent (CFD)",
                "ANSYS Mechanical (FEA)",
                "LS-DYNA",
                "Thermal analysis",
                "Structural analysis",
              ]}
            />
            <SkillCategory
              title="Programming & Tools"
              skills={[
                "MATLAB",
                "Python (basics)",
                "Excel (Advanced)",
                "Technical documentation",
                "Project management",
              ]}
            />
            <SkillCategory
              title="Machining & Fabrication"
              skills={[
                "Manual lathe operations (turning, grooving, thread cutting)",
                "Milling machine operations (including gear cutting with indexing)",
                "Basic CNC machine demonstrations",
              ]}
            />
            <SkillCategory
              title="Joining & Surface Processes"
              skills={[
                "TIG, MIG, arc, and gas welding",
                "Electroplating",
                "Carpentry and fitting",
              ]}
            />
            <SkillCategory
              title="Foundry & Forming"
              skills={[
                "Sand testing (grain size, permeability, moisture, compression strength)",
                "Foundry practice",
                "Hydraulic bulge testing",
              ]}
            />
            <SkillCategory
              title="Inspection & Testing"
              skills={[
                "Surface roughness measurement (Ra, Rq, Rz)",
                "Cutting force measurement using tool dynamometer",
                "Magnetic particle inspection (NDT)",
              ]}
            />
            <SkillCategory
              title="Manufacturing Processes"
              skills={[
                "Injection moulding process study",
                "Process parameter analysis",
              ]}
            />
            <SkillCategory
              title="Simulation Exposure"
              skills={["LS-DYNA meshing and basic deep drawing simulation"]}
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
            Latest Thoughts
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center">
            Exploring engineering concepts, design philosophy, and technical
            insights.
          </p>

          {/* <SubstackEmbed /> */}

          <div className="my-12">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Recent Projects
            </h3>
            {/* <ProjectPosts /> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Interested in mechanical design, automation, or engineering
            collaboration?
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:gautam@example.com"
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/gautam-sankara-raman"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
