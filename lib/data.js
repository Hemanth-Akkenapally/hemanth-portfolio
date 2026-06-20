// Centralized portfolio content.

export const contact = {
  email: "akkenapallyhemanth@gmail.com",
  linkedin: "https://www.linkedin.com/in/hemanthakkenapally3/",
  github: "https://github.com/Hemanth-Akkenapally",
  location: "Baltimore, MD",
};

export const focusAreas = [
  {
    num: "01",
    title: "RF & Biomedical Systems",
    desc: "HFSS-based catheter and antenna design, VNA measurements, S-parameters, RF filtering, and experimental signal analysis.",
  },
  {
    num: "02",
    title: "Machine Learning & Signal Analysis",
    desc: "Predictive modeling and statistical analysis for physical measurements, biomedical experiments, time-series data, and computer-vision systems.",
  },
  {
    num: "03",
    title: "Data Engineering & Scientific Computing",
    desc: "Python and SQL pipelines, data validation, cloud platforms, APIs, dashboards, and reproducible workflows for engineering data.",
  },
  {
    num: "04",
    title: "Research & Publications",
    desc: "Research interests spanning intelligent RF sensing, hardware-integrated ML systems, signal processing, and AI-enabled biomedical devices.",
  },
];

export const stats = [
  { value: "3.74", label: "Graduate GPA" },
  { value: "2", label: "Publications" },
  { value: "MPS", label: "Data Science, UMBC" },
  { value: "B.Tech", label: "ECE" },
];

export const skills = {
  "RF, Electronics & Experimental Systems": [
    "Ansys HFSS", "VNA Measurements", "S-parameters", "RF Filtering",
    "Catheter Electrode Simulation", "Antennas", "Microwave Systems",
    "DSP", "VLSI", "FPGA", "Verilog",
  ],
  "Programming & Scientific Computing": [
    "Python", "SQL", "Pandas", "NumPy", "Spark", "SparkSQL",
    "R", "SAS", "Bash", "C/C++", "Java", "JavaScript",
  ],
  "Machine Learning & AI": [
    "scikit-learn", "TensorFlow", "PyTorch", "Statistical Modeling",
    "Regression", "Classification", "NLP", "Computer Vision",
    "Feature Engineering", "Time-Series Analysis",
  ],
  "Data Engineering": [
    "ETL/ELT", "Airflow", "Kafka", "Snowflake", "Redshift",
    "Data Lakes", "Data Warehouses", "Data Modeling", "Data Quality",
  ],
  "Cloud & Platforms": [
    "AWS S3", "Glue", "Lambda", "EMR", "SageMaker", "EC2",
    "Azure Data Factory", "Azure Synapse", "GCP BigQuery",
  ],
  "Software & Analytics": [
    "Flask", "FastAPI", "REST APIs", "Docker", "Kubernetes",
    "Git", "CI/CD", "Tableau", "Power BI", "Streamlit", "Salesforce",
  ],
};

export const education = [
  {
    institution: "University of Maryland, Baltimore County (UMBC)",
    degree: "Master of Professional Studies in Data Science",
    period: "Dec 2024",
    points: ["GPA: 3.74/4.00"],
  },
  {
    institution: "Sreenidhi Institute of Science and Technology",
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    period: "Jul 2021",
    points: ["CGPA: 8.86/10"],
  },
];

export const experience = [
  {
    company: "SIGT LLC",
    role: "Systems Engineer, Cardiac Catheter R&D",
    period: "Jan 2025 - Present",
    current: true,
    points: [
      "Design catheter electrodes and related assemblies in Ansys HFSS and evaluate electromagnetic behavior before designs are released for manufacturing.",
      "Use vector network analyzer measurements and S-parameters to characterize RF response across catheter configurations, input powers, and frequencies.",
      "Design and apply ninth-order low-pass filters while integrating VNA, oscilloscope, catheter telemetry, and experimental metadata for analysis.",
      "Investigate relationships among RF response, cardiac-tissue lesion depth, and microbubble formation using Python, SQL, statistical analysis, and predictive modeling.",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Data Engineer & Salesforce Developer",
    period: "Sep 2021 - Jan 2023",
    points: [
      "Developed Salesforce, Apex, SOQL, SQL, Snowflake, ETL, data-modeling, and reporting workflows for financial and loan-management processes.",
      "Implemented validation, access controls, audit-oriented data practices, dashboards, and CI/CD-supported releases in cross-functional Agile environments.",
      "Translated operational requirements into data models, automated workflows, analytical queries, and stakeholder-facing reports.",
    ],
  },
  {
    company: "Cisco Networking Academy-oriented Program",
    role: "Network Engineering Trainee / Internship",
    period: "May 2019 - May 2021",
    points: [
      "Completed Packet Tracer-based routing and switching exercises covering OSI, TCP/IP, and CCNA-oriented networking concepts.",
      "Applied network telemetry, SQL, ETL, and dashboarding to operational monitoring and performance-analysis exercises.",
    ],
  },
];

export const featuredProjects = [
  {
    title: "Cardiac Catheter RF Research",
    type: "RF Systems - Biomedical R&D",
    desc: "HFSS catheter-electrode and assembly design combined with VNA S-parameter measurements, oscilloscope data, filtering, and predictive analysis of lesion depth and microbubble formation.",
    stack: ["Ansys HFSS", "VNA", "S-parameters", "Python", "Signal Analysis"],
  },
  {
    title: "Frequency-Reconfigurable Antenna",
    type: "Antenna Research - HFSS",
    desc: "Simulation-focused undergraduate research on a compact FR-4 tuning-fork antenna with partial ground and PIN-diode models for switchable WLAN and C-band resonances.",
    stack: ["Ansys HFSS", "RF Design", "PIN Diodes", "WLAN", "C-band"],
  },
  {
    title: "Automatic License Plate Recognition",
    type: "Computer Vision - Graduate Capstone",
    desc: "Team capstone implementing a YOLOv4 and Darknet workflow with OpenCV, OCR, and Python for license-plate detection and character recognition.",
    stack: ["Python", "YOLOv4", "Darknet", "OpenCV", "OCR"],
  },
];

export const moreDataProjects = [
  {
    title: "TweetSense",
    type: "NLP - Data Pipeline",
    desc: "Real-time sentiment-analysis pipeline using BERT, PyTorch, AWS S3 and Lambda, and a REST API for large-scale social-media text processing.",
    stack: ["Python", "BERT", "PyTorch", "AWS", "REST API"],
  },
  {
    title: "Medical Literature RAG",
    type: "NLP - Information Retrieval",
    desc: "Retrieval-augmented workflow for summarizing medical conference papers and PubMed literature using a FAISS vector index.",
    stack: ["Python", "RAG", "FAISS", "PubMed", "NLP"],
  },
  {
    title: "Online Doctor Appointment Application",
    type: "Academic Software Project",
    desc: "Database-backed web application for appointment scheduling built with Java servlets, HTML, CSS, JavaScript, and SQL.",
    stack: ["Java", "Servlets", "SQL", "HTML", "CSS"],
  },
];

export const systemsProjects = [
  {
    title: "RF Ablation Signal Analysis",
    type: "Experimental Signal Processing",
    desc: "Integrated VNA, oscilloscope, catheter telemetry, and experimental metadata with ninth-order low-pass filtering for RF ablation analysis.",
    stack: ["VNA", "Oscilloscope", "RF Filtering", "Python", "SQL"],
  },
  {
    title: "Metamaterial Dual-Band Antenna",
    type: "Antenna Research - HFSS & MATLAB",
    desc: "Simulation-focused compact FR-4 split-ring-resonator antenna with defected ground and MATLAB-supported parameter extraction for metamaterial characterization.",
    stack: ["Ansys HFSS", "MATLAB", "Metamaterials", "WLAN", "WiMAX"],
  },
  {
    title: "Multi-Slot Microstrip Patch Antenna",
    type: "Academic RF Project",
    desc: "Designed and analyzed a multi-slot microstrip patch antenna concept for multiband operation using electromagnetic simulation and RF design principles.",
    stack: ["Ansys HFSS", "Microstrip Antennas", "RF Design"],
  },
  {
    title: "Salesforce Loan-Management Application",
    type: "Enterprise Software Project",
    desc: "Created workflows supporting loan applications and management using Salesforce administration, Apex, SOQL, data modeling, and reporting.",
    stack: ["Salesforce", "Apex", "SOQL", "Data Modeling"],
  },
];

export const publications = [
  {
    title: "A Compact Frequency Reconfigurable Antenna with Enhanced Bandwidth for WLAN Applications",
    venue: "International Journal of Creative Research Thoughts, vol. 9, issue 6, pp. c6-c12, June 2021",
    desc: "Peer-reviewed undergraduate co-authored paper presenting an HFSS simulation of a compact FR-4 antenna with tuning-fork patch, partial ground, and PIN-diode models.",
  },
  {
    title: "A Compact Metamaterial Based Dual-Band Antenna with Improved Gain for WLAN Applications",
    venue: "IJRASET, vol. 9, issue VI, pp. 2778-2783, June 2021",
    desc: "Peer-reviewed undergraduate co-authored paper presenting an HFSS design with a split-ring-resonator structure, defected ground, and MATLAB-supported parameter extraction.",
    url: "https://doi.org/10.22214/ijraset.2021.35586",
  },
];
