import { Mail, Github, Linkedin, Cloud } from "lucide-react";

// Job experiences
const experiences = [
  {
    role: "Cybersecurity Engineer",
    company: "Vireserve Sdn Bhd",
    location: "Petaling Jaya, MY",
    start: "Jul 2024",
    end: "Present",
    bullets: [
      "Built Presidio-based PII Detection APIs with custom recognizers (MY IC/Passport/Phone).",
      "Deployed Wazuh manager & dashboards; crafted custom vulnerability views and indices.",
      "Automated ingestion to Elasticsearch and OpenSearch for asset & activity logs.",
      "Developed a Post-Quantum secure tunnel for a site-to-site connection."
    ],
    skills: ["Python", "Wazuh", "Elasticsearch", "FastAPI", "Docker", "PQC", "Bash Scripting", "Virtual Machine"]
  },
  {
    role: "Research Assistant",
    company: "Universiti Kebangsaan Malaysia",
    location: "Bangi, MY",
    start: "Mar 2022",
    end: "Apr 2024",
    bullets: [
      "Research the latest development of quantum algorithm for least square method.",
      "Developed a quantum algorithm for least square method.",
      "Implementing the quantum algorithm on a real quantum device by IBM through the cloud."
    ],
    skills: ["Python", "Quantum Computing", "Qiskit", "LaTeX"]
  }
];


export default function Home() {
  return (
    <main className="font-sans bg-[rgb(10,34,57)] text-white min-h-screen px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-4 text-[rgb(255,136,17)]">Hi, I'm Iqbal 👋</h1>
        <p className="text-xl text-gray-200 space-x-2">
          <span className="hover:text-[rgb(255,136,17)] transition-colors duration-200 cursor-pointer">
            Cybersecurity Engineer
          </span>
          {"| "}
          <span className="hover:text-[rgb(255,136,17)] transition-colors duration-200 cursor-pointer">
            Developer
          </span>
          {"| "}
          <span className="hover:text-[rgb(255,136,17)] transition-colors duration-200 cursor-pointer">
            Researcher
          </span>
        </p>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto mb-20 bg-white/10 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-[rgb(255,136,17)]">About Me</h2>
        <p className="text-gray-200 leading-relaxed">
          I'm a cybersecurity engineer with a passion for building secure, scalable
          applications and exploring cutting-edge technologies like cloud security
          and post-quantum cryptography. I enjoy solving real-world problems and
          sharing my knowledge through research and projects.
        </p>
      </section>

      {/* Experience Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-8 text-[rgb(255,136,17)]">Experience</h2>

        <ol className="relative border-s-2 border-white/20 ps-6">
        {/* border-s-2 draws a 2px border on the “start” side (left in LTR) = the timeline line.
        border-white/20 = faint white line. ps-6 = padding-start so content doesn’t overlap the line. */}

          {experiences.map((exp, i) => (
            <li key={i} className="mb-10 ms-4">
              {/* timeline dot */}
              <span
                className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-2 ring-white/30"
                style={{ background: "rgb(255,136,17)" }}
                aria-hidden
              >
                <span className="block h-2.5 w-2.5 rounded-full bg-white/80"></span>
              </span>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role} <span className="text-white/70">· {exp.company}</span>
                  </h3>
                  <span className="text-sm text-white/70">— {exp.location}</span>
                </div>

                <div className="mt-1 text-sm text-white/70">
                  <time>{exp.start}</time> <span className="mx-1">–</span> <time>{exp.end}</time>
                </div>

                <ul className="mt-4 list-disc ps-5 space-y-2 text-gray-200">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>

                {/* skill chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((s, k) => (
                    <span
                      key={k}
                      className="text-xs font-medium rounded-full px-2.5 py-1 border"
                      style={{
                        color: "rgb(255,136,17)",
                        borderColor: "rgba(255,136,17,0.5)",
                        background: "rgba(255,136,17,0.08)"
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Professional Certificates */}
      <section className="max-w-3xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-[rgb(255,136,17)]">Professional Certificates</h2>

        {/* AWS Cloud Practitioner */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 shadow-lg hover:shadow-xl transition-shadow flex items-start gap-4 max-w-md mx-auto text-left">
          {/* AWS Icon */}
          <div className="flex-shrink-0 mt-1">
            <img 
              src="https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" 
              alt="AWS Certified Cloud Practitioner badge"
              className="w-12 h-12 object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              AWS Certified Cloud Practitioner
            </h3>
            <p className="text-sm text-white/70 mt-1">Amazon Web Services</p>
            <span className="inline-block mt-3 text-xs font-medium rounded-full px-2.5 py-1 border animate-pulse-status"
            style={{
              color: "rgb(255,136,17)",
              borderColor: "rgba(255,136,17,0.5)",
              background: "rgba(255,136,17,0.08)",
            }}>
              Ongoing
            </span>
          </div>
        </div>

      </section>

      {/* Contact Section */}
      <section className="text-center py-16 bg-[rgb(10,34,57)]">
        <h2 className="text-3xl font-semibold mb-6 text-[rgb(255,136,17)]">
          Contact
        </h2>
        <p className="text-gray-200 mb-8">
          Let’s connect! You can reach me here 👇
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="mailto:muhdiqbalhazri@gmail.com"
            className="flex items-center space-x-2 bg-white text-[rgb(10,34,57)] px-4 py-2 rounded-xl shadow-md hover:scale-105 hover:bg-[rgb(255,136,17)] hover:text-white transition"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>

          <a
            href="https://github.com/IqbalHazri"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 bg-white text-[rgb(10,34,57)] px-4 py-2 rounded-xl shadow-md hover:scale-105 hover:bg-[rgb(255,136,17)] hover:text-white transition"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/iqbalhazri"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 bg-white text-[rgb(10,34,57)] px-4 py-2 rounded-xl shadow-md hover:scale-105 hover:bg-[rgb(255,136,17)] hover:text-white transition"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </section>
    </main>
  );
}
