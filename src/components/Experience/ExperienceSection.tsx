import { ExperienceCard } from "./ExperienceCard";

const experiences = [
  {
    title: "Software Engineer",
    dateRange: "Sept 2024 - Present",
    companyName: "Centralogic, Pune",
    description:
      "Developed and maintained responsive web applications for real estate agents and brokers using React, GraphQL, and Material UI, ensuring seamless user experiences and optimized performance. Designed and implemented dynamic features for the UK Energy Project using Angular, enhancing customer engagement and operational efficiency. Contributed to the development of an internal HRMS portal for the organization using Angular, streamlining employee management and HR workflows. Collaborated with cross-functional teams to ensure scalable architecture, reusable components, and adherence to best practices in frontend development.",
  },
  {
    title: "Software Engineer",
    dateRange: "Nov 2023 - Aug 2024",
    companyName: "Cybage Softwares Pvt. Ltd., Pune",
    description:
      "Developed responsive web applications using React, TypeScript, HTML, CSS, and JavaScript. Built reusable components, optimized performance, and ensured cross-browser compatibility. Collaborated in Agile teams using Git, GitHub, and JIRA to deliver scalable, high-quality software on time.",
  },
  {
    title: "AIML Intern",
    dateRange: "Jan 2023 - Feb 2023",
    companyName: "Cognifront, Nashik",
    description:
      "Developed a Water Quality Analysis model during an internship in AI/ML, leveraging machine learning algorithms such as Kernel SVM, Logistic Regression, Naive Bayes, and K-NN to predict water quality parameters. Optimized model accuracy through data preprocessing, feature engineering, and algorithm fine-tuning, contributing to actionable insights for water quality monitoring.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="min-h-screen bg-slate-800 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="inline-block mb-12">
          <h2
            className="text-2xl md:text-3xl lg:text-3xl border-s-4 px-2  font-bold text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, #ff7eb3, #ff758c, #ff7a50)",
            }}
          >
            MY EXPERIENCE
          </h2>
        </div>
        <div className="space-y-2">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} title={experience.title} dateRange={experience.dateRange} companyName={experience.companyName} description={experience.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
