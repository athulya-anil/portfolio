import { motion } from "framer-motion";

export default function Skills() {
  const categories = [
    {
      title: "AI & Machine Learning",
      skills: [
        "Python",
        "PyTorch",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "SciPy",
        "Hugging Face",
        "SentenceTransformers",
        "FAISS",
        "RAG Pipelines",
        "Prompt Engineering",
        "Retrieval Evaluation",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Plotly",
      ],
    },
    {
      title: "Data Engineering & Analytics",
      skills: [
        "AWS Glue",
        "AWS Step Functions",
        "AWS Lambda",
        "Amazon RDS",
        "Athena",
        "DynamoDB",
        "Apache Spark",
        "HiveQL",
        "Hadoop",
        "Scala",
        "PL/SQL",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Tableau",
        "GCP BigQuery",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS (EC2, S3, Lambda, Glue, RDS, Athena, CloudWatch, Amplify, CloudFront)",
        "GCP (Vertex AI, BigQuery)",
        "Azure (ADF, Data Lake, Databricks)",
        "Docker",
        "GitHub Actions (CI/CD)",
        "Linux",
        "Bash Scripting",
        "System Monitoring",
      ],
    },
    {
      title: "Backend & Distributed Systems",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Apache Kafka",
        "Apache Flink",
        "Microservices",
        "Streaming Pipelines",
      ],
    },
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "Go", "Java", "Scala", "JavaScript", "SQL", "Bash"],
    },
    {
      title: "Frontend Development",
      skills: [
        "React",
        "MERN Stack",
        "TailwindCSS",
        "Vite",
        "D3.js",
        "Framer Motion",
        "Responsive Design",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white text-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-4 text-black">
          Skills & Technologies
        </h2>
        <p className="text-center text-slate-600 mb-16">
          A comprehensive overview of the technologies, languages, and platforms I use
          to build intelligent, scalable, and data-driven systems.
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(244,180,0,0.35)" }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-amber-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold mb-4 text-black">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-amber-100 hover:text-black hover:shadow-[0_0_10px_rgba(244,180,0,0.3)] transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Always Learning Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <div className="max-w-3xl w-full text-center bg-gradient-to-br from-amber-50 via-white to-amber-100 border border-amber-200 rounded-[100px] py-10 px-8 shadow-[0_0_25px_rgba(244,180,0,0.15)]">
            <h3 className="text-xl font-semibold text-black mb-3">
              Always Learning
            </h3>
            <p className="text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to continuous learning.
              I regularly explore new frameworks, tools, and best practices to stay
              current with industry trends and deliver cutting-edge, production-grade
              AI and data solutions.
            </p>

            <div className="flex justify-center gap-4 mt-6 opacity-80">
              <span className="w-6 h-6 bg-amber-50 rounded-full shadow-sm"></span>
              <span className="w-8 h-8 bg-amber-100 rounded-full shadow-sm"></span>
              <span className="w-10 h-10 bg-white rounded-full shadow-sm"></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
