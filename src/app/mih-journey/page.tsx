import { PageAnimation } from "@/components/atoms/PageAnimation";

export const metadata = {
  title: "MIH Journey | ALVentEXE",
  description: "My internship journey and learning progress",
};

export default function MIHJourneyPage() {
  const journeyData = {
    February: {
      title: "Start of Internship",
      items: [
        "Attended Company Orientation",
        "Read the SOP documentation for page creation tasks",
        "Provide the source code for the card of the assigned car dealer website's hero banner",
        "Learned vibe coding and the importance of Git version control system",
        "Helped in QA tasks on assigned websites",
        "Prepared flowchart for website deployment features",
        "Researched about the security implications on allowing LLM chatbots to access JavaScript, CSS, JSON, APIs, and PixALL files",
        "Continuation of optimizing business knowledge graph of assigned clients on Promptgraph",
        "Optimization of client offers of assigned websites",
        "Studied node.js",
        "Continuation of optimization of client offers",
        "Proofreading of client offers and final revisions",
        "Multi Agent AI Orchestration research and making of its Proof of Concept",
        "Additional knowledge on prompt engineering",
        "Researching for a possible solution on a sample problem for participation in Hack4Mapandan",
      ],
    },
    March: {
      title: "Growing & Contributing",
      items: [
        "Contributed for the presentation of the solution for the sample problem for participation in Hack4Mapandan (User Persona)",
        "Continuation of learning Node.js",
        "Assisted a co-trainee on her challenge task of real-time task board system",
        "Added users to Google Search Console",
        "Self-study about the fundamentals of the topic, search engine optimization because of the related task",
        "Made scripts for presentation of assigned systems",
        "Attended the Base Build Mapandan seminar and hackathon",
        "Page creation tasks",
        "Revision of the created pages",
        "Presentation making for an assigned monthly report",
        "Made a presentation for an assigned project monthly report",
        "Page creation practice",
      ],
    },
    April: {
      title: "TeamNote Project Focus",
      items: [
        "Made project proposal (TeamNote was the proposal I made)",
        "Began planning for TeamNote",
        "Made the mockup for the TeamNote web app",
        "Assisted in TeamNote development",
        "QA work and responsiveness testing of TeamNote's early stages",
        "QA work on the UI and providing suggestions",
      ],
    },
    May: {
      title: "Internship Final Days",
      items: [
        "Planning for the personal portfolio website according to the PRD",
        "Creating the portfolio website",
        "Polishing the overall look of the website",
        "Some QA work for TeamNote",
        "Deploying the portfolio website",
      ],
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <PageAnimation delay={0}>
        <h1 className="mb-4 text-3xl font-bold text-[#E5E7EB]">MIH Journey</h1>
      </PageAnimation>

      <PageAnimation delay={50}>
        <p className="mb-12 text-lg text-[#9CA3AF]">
          My internship journey — documenting progress, projects, and learnings.
        </p>
      </PageAnimation>

      <div className="space-y-8">
        {Object.entries(journeyData).map(([month, data], index) => (
          <PageAnimation key={month} delay={100 + index * 100}>
            <div className="rounded-xl border border-[#1f2937] bg-[#111827] overflow-hidden">
              <div className="border-b border-[#1f2937] bg-[#0B0F19]/50 px-6 py-4">
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-[#3B82F6]">{month}</span>
                  <span className="text-sm text-[#9CA3AF]">—</span>
                  <span className="text-sm font-medium text-[#E5E7EB]">{data.title}</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {data.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-[#9CA3AF]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </PageAnimation>
        ))}
      </div>
    </div>
  );
}