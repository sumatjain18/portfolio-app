import { CareerCard } from "./CareerCard";

const experiences = [
  {
    title: "BE Computer Engineer",
    dateRange: "May 2019 - Apr 2023",
    universityName: "K. K. Wagh Institute of Engineering and Technology, Nashik",
    description:
      "Completed Bachelor of Engineering (B.E.) in Computer Engineering from Savitribai Phule Pune University. Achieved a First Class with Distinction. Graduated with a commendable Cumulative Grade Point Average (CGPA) of 8.06. This strong academic foundation provides a solid base for future endeavors in the field of computer science and technology.",
  },
  {
    title: "HSC 12th Science",
    dateRange: "Aug 2017 - Mar 2019",
    universityName: "K. R. T. Arts, Commerce and Science College, Nashik",
    description: "Successfully completed the Higher Secondary School Certificate (HSC) with a Science stream. Achieved a commendable score of 70.77%.",
  },
  {
    title: "SSC 10th",
    dateRange: "Apr 2017",
    universityName: "C. D. O. MERI Highschool, Nashik",
    description: "Successfully completed the Secondary School Certificate. Achieved a commendable score of 84.20% and also awarded a certificate for participation in the Mathematics Olympiad.",
  },
];

export default function CareerSection() {
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
            MY CAREER
          </h2>
        </div>
        <div className="space-y-2">
          {experiences.map((experience, index) => (
            <CareerCard key={index} index={index} title={experience.title} dateRange={experience.dateRange} universityName={experience.universityName} description={experience.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
