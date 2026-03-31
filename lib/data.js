/* ── Static site data ─────────────────────────────────── */

export const contact = {
  email: "akkenapallyhemanth@gmail.com",
  linkedin: "https://www.linkedin.com/in/hemanthakkenapally",
  github: "https://github.com/Hemanth-Akkenapally",
  location: "Halethorpe, MD",
};

export const focusAreas = [
  {
    num: "01",
    title: "Data Science & Analytics",
    desc: "Applied machine learning, experimentation, KPI design, forecasting, business analysis, and decision-ready reporting.",
  },
  {
    num: "02",
    title: "Data Engineering & Cloud",
    desc: "ETL/ELT pipelines, data validation, warehousing, cloud platforms, APIs, and scalable analytics workflows.",
  },
  {
    num: "03",
    title: "Systems Engineering & Biomedical",
    desc: "RF systems, biomedical modeling, simulation-driven engineering, telemetry, and technical system design.",
  },
  {
    num: "04",
    title: "Research & Publications",
    desc: "Interest in research-oriented problem solving across NLP, computer vision, biomedical systems, and RF engineering.",
  },
];

export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects" },
  { value: "2", label: "Publications" },
  { value: "MS", label: "Data Science, UMBC" },
];

export const skills = {
  "Analytics & Data Science": [
    "Python", "SQL", "R", "Pandas", "NumPy",
    "scikit-learn", "TensorFlow", "Keras", "PyTorch",
    "NLP", "Computer Vision", "Statistical Modeling",
  ],
  "Data Engineering": [
    "ETL/ELT", "Apache Spark", "Kafka", "dbt", "SSIS",
    "Azure Data Factory", "Airflow", "Data Validation",
    "Data Profiling", "Data Lineage",
  ],
  "BI & Visualization": [
    "Power BI", "Tableau", "Streamlit", "QuickSight",
    "Looker", "Plotly", "Matplotlib", "Dashboarding", "KPI Design",
  ],
  "Cloud & Platforms": [
    "AWS", "Azure", "Snowflake", "Redshift",
    "BigQuery", "PostgreSQL", "MySQL", "MongoDB",
  ],
  "Systems & Tools": [
    "Docker", "Kubernetes", "Jenkins", "Git/GitHub",
    "REST APIs", "FastAPI", "Flask", "GraphQL", "Linux",
  ],
  "Research Interests": [
    "Applied Machine Learning", "NLP", "Computer Vision",
    "Biomedical Systems", "RF Systems", "Time Series",
    "Research-Driven Engineering",
  ],
};

export const education = [
  {
    institution: "University of Maryland, Baltimore County (UMBC)",
    degree: "Master of Science — Data Science",
    period: "2023 – 2024",
    points: [
      "Coursework in machine learning, NLP, data engineering, statistical modeling, and cloud computing.",
      "Applied research projects spanning computer vision, biomedical systems, and large-scale analytics pipelines.",
    ],
  },
  {
    institution: "Sreenidhi Institute of Science and Technology (SNIST)",
    degree: "Bachelor of Technology — Electronics & Communication Engineering",
    period: "2017 – 2021",
    points: [
      "Focused on RF systems, antenna design, signal processing, and embedded systems.",
      "Published two peer-reviewed research papers on antenna design and metamaterial systems.",
    ],
  },
];

export const experience = [
  {
    company: "SIGT LLC",
    role: "Health Data Engineer & Systems Analyst",
    period: "Jan 2025 – Present",
    current: true,
    points: [
      "Built Python and SQL workflows to ingest, validate, and transform laboratory, telemetry, and engineering datasets into structured, decision-ready outputs.",
      "Worked on data profiling, mapping, lineage, validation, and anomaly detection to improve data quality and support cross-functional technical analysis.",
      "Created dashboards and reporting workflows to communicate operational metrics, thresholds, and insights to engineering and business stakeholders.",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Business & Financial Data Analyst / Data Engineer",
    period: "Sep 2021 – Jan 2023",
    points: [
      "Worked with SQL, Python, Snowflake, and enterprise business data to transform, validate, and analyze large datasets for reporting and decision support.",
      "Built reporting outputs and dashboards for portfolio performance, customer segmentation, and analytics use cases across business teams.",
      "Documented requirements, data logic, reporting definitions, and process flows while collaborating with technical and non-technical stakeholders.",
    ],
  },
  {
    company: "Cisco",
    role: "Data Analyst Intern",
    period: "May 2019 – May 2021",
    points: [
      "Developed ETL-style workflows using SSIS and Azure Data Factory to automate extraction and transformation of operational and network-related datasets.",
      "Wrote SQL and Python scripts for KPI generation, reporting, and data validation.",
      "Built dashboards and structured reports that improved visibility into business and technical performance metrics.",
    ],
  },
];

export const featuredProjects = [
  {
    title: "E-Commerce Data Challenge",
    type: "Business Analytics · Data Quality · KPI Strategy",
    desc: "End-to-end analysis on 244,179 unique orders across 25,001 customers, covering revenue, profit, referral economics, Black Friday impact, and customer segmentation.",
    stack: ["Python", "Pandas", "Plotly", "Matplotlib", "Data Cleaning", "KPI Design"],
  },
  {
    title: "BERT vs LSTM Sentiment on X",
    type: "NLP · Streaming Analytics",
    desc: "Large-scale sentiment analysis pipeline on social media data using BERT and bi-LSTM models, with cloud-based ingestion, model serving, and monitoring workflows.",
    stack: ["Python", "BERT", "LSTM", "AWS", "NLP", "Streaming"],
  },
  {
    title: "Pneumonia Detection using VGG16",
    type: "Deep Learning Research",
    desc: "Transfer learning pipeline on chest X-ray data using VGG16, applying augmentation, staged fine-tuning, and structured evaluation to improve classification performance.",
    stack: ["Python", "TensorFlow", "Keras", "VGG16", "Computer Vision"],
  },
];

export const moreDataProjects = [
  {
    title: "Named Entity Recognition with BiLSTM",
    type: "NLP Research",
    desc: "Named entity recognition model using embeddings and BiLSTM sequence modeling, improving recognition performance through careful training and optimization.",
    stack: ["Python", "TensorFlow", "Keras", "BiLSTM", "NLP"],
  },
  {
    title: "Automatic License Plate Detection",
    type: "Computer Vision Project",
    desc: "YOLOv4-based license plate detection workflow integrated into an application for real-time visual inference and practical evaluation.",
    stack: ["Python", "YOLOv4", "OpenCV", "Streamlit"],
  },
  {
    title: "TweetSense",
    type: "Sentiment Analytics · Data Pipeline",
    desc: "End-to-end sentiment analytics workflow for large-scale tweet data, transforming raw text into structured insights, validation outputs, and dashboard-ready results.",
    stack: ["Python", "NLP", "AWS", "APIs", "Analytics Pipeline"],
  },
];

export const systemsProjects = [
  {
    title: "Catheter Electrode Phase Shift Analysis",
    type: "RF · Biomedical Research",
    desc: "Catheter electrode models in HFSS to study phase reversal frequency shifts, tissue proximity effects, and electric field intensity, then bench-validated results.",
    stack: ["HFSS", "Python", "VNA", "Oscilloscope", "RF Simulation"],
  },
  {
    title: "SAR & Thermal Safety Envelope",
    type: "Biomedical Safety Research",
    desc: "EM and thermal simulation workflows to estimate SAR distributions, hotspots, and safe operating envelopes for biomedical ablation systems.",
    stack: ["HFSS", "COMSOL", "SAR Analysis", "Biomedical Modeling"],
  },
  {
    title: "Impedance Matching & Coil Sensing",
    type: "RF Systems Engineering",
    desc: "Sensing coil and impedance matching workflows, tuning resonance and Q-factor using circuit analysis and RF design concepts for sensing-oriented engineering systems.",
    stack: ["HFSS", "ANSYS Circuit", "Smith Chart", "RF Design"],
  },
  {
    title: "Cloud-Native Analytics & Streaming Microservices",
    type: "Cloud · Systems Engineering",
    desc: "Event-driven services and analytics workflows using APIs, containers, and orchestration patterns, with CI/CD and monitoring for scalable deployment.",
    stack: ["Python", "Java", "Kafka", "Spark", "Docker", "Kubernetes"],
  },
  {
    title: "Web Server on AWS",
    type: "Cloud Deployment Project",
    desc: "Web application on AWS using compute, storage, database, and routing services, with deployment, security, and operational best practices.",
    stack: ["Flask", "AWS EC2", "RDS", "S3", "Route 53"],
  },
];

export const publications = [
  {
    title: "A Compact Frequency-Reconfigurable Antenna with Enhanced Bandwidth for WLAN Applications",
    venue: "IJCRT, 2021",
    desc: "Research on a compact frequency-reconfigurable antenna design focused on bandwidth improvement and WLAN applications.",
    url: "https://ijcrt.org",
  },
  {
    title: "A Compact Metamaterial-Based Dual-Band Antenna with Improved Gain for WLAN",
    venue: "IJRASET, 2021",
    desc: "Research on a dual-band antenna using metamaterial concepts to improve gain and return loss for WLAN use cases.",
    url: "https://www.ijraset.com",
  },
];
