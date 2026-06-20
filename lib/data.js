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
    venue: "International Journal of CrÎ]Ùˆ⁄$z{-ÆÈ‹j◊ùﬂYNdQGlõ«Ügö=}üÒ®êF∞ÉPÒKÈ/O|H≠∞ ÕNù=ÊH,;é…Xïyzªé‚stZÒã7q-#π∂‚q+–(œòº˙¿◊πIa`*8PÕˇ3p[	Ã≈ıÖ%!iC/’¿)Ú†z®?ê)„E	Œ©—É‡ïè~`Õ@pÃlJ7¶†˛˙√1Ò∂GWj”yù€i„Øô,%ÇuïÇ 8éjt˛$øØ¿ÔTø∆Ïá!/òıîêÅ$Úc’∆√›]8ó[˜ö˘na«G°‡^Ñ647j√ºÍÿ…”m˛rÇ¸‹ßÍóù|àƒcBx'Íç~…*xän~"N„¨wáê‘’∆<µ~ÑRZ≠÷É>µ=¬Ø!¢%Æ:ßwS4u°WXΩÁ”hPÔñÁX÷Wrà2Cà¨©Ä˙≥ÆÕuØGqf6hêMPÉzie˛AwÏÅÈò3,/!uNMZŒﬁ@È}ˆ^mÕõÿØ⁄…oOp†hÑ±∞LD!Ñ¿Ñ0	,0t2u9)◊mÛCπ	¨Sªk=c:&^ÿcêcóŒ%´l‘8èS˚WÍ„éÆE[üiçΩ(ﬂ=Ó’—¿±ëOx©äQÖºfãÍˆﬂWΩ˚‡'«|Í“{›âH*„.Õ&ÌdáÚñ>FDı…¨ Sì˝Ød-˛››ªÌ#eF+…YpHI^5áÁWFÓˆÖıMíç„b‘k∑Z’9ﬁJß…*Ùm≥ñ¨ÇF˛JÁú/ˆA+/•˘ûsi4|HÉÊ–¯ôå*]Û,˙õ±i–Ç˘jí«9æ¨†ÊKâß< J¥ìÅBuu˛«“ö˙¶4…hË¶"Ùw∑Â[9Jå?Í”∆ﬁ›Å\j∂¶K<20ç⁄HΩuXºÇÖWD{¥¨Ó•lt€ÀÓLR≈á]û©*Œüë.ˆa·ﬁ.ΩK◊¶ò3“\(∏›\ŒÓ·õ<+—ôΩ¸gr6£⁄B/√—hé ¨ÄöÆÔ‡VºPœ–¶VÊG7G&V––¶VÊFˆ&†–£ìíˆ&†–£√¬ıGóRÙ÷WFFFı7V'GóRıÑ‘¬Ù∆VÊwFÇ3#SC„‡–ß7G&V––£√˜á6∂WB&Vvñ„“.˚ªÚ"ñC“%sT”◊6VÜîáß&U7§ÂF7¶∂3ñB#Û„«ÉßÜ◊÷WFÜ÷∆Á3ßÉ“&Fˆ&S¶Á3¶÷WFÚ"ÉßÜ◊F≥“#2„”s#‡£«&Fc•$DbÜ÷∆Á3ß&Fc“&áGG¢Ú˜wwrÁs2Ê˜&rÛììíÛ"Û#"◊&Fb◊7ñÁFÇ÷Á22#‡£«&Fc§FW67&óFñˆ‚&Fc¶&˜WC“""Ü÷∆Á3ßFc“&áGG¢ÚˆÁ2ÊFˆ&RÊ6ˆ“˜FbÛ„2Ú#‡£«Fc•&ˆGV6W#‰÷ñ7&˜6ˆgL*‚v˜&B##C¬˜Fc•&ˆGV6W#„¬˜&Fc§FW67&óFñˆ„‡£«&Fc§FW67&óFñˆ‚&Fc¶&˜WC“""Ü÷∆Á3¶F3“&áGG¢Ú˜W&¬Ê˜&rˆF2ˆV∆V÷VÁG2Û„Ú#‡£∆F3ßFóF∆S„«&Fc§«C„«&Fc¶∆íÜ÷√¶∆Ês“'Ç÷FVfV«B#‰ÜV÷ÁFÇ∂∂VÊ∆«í“6FV÷ñ2ÊB&ˆfW76ñˆÊ¬&W7V÷S¬˜&Fc¶∆ì„¬˜&Fc§«C„¬ˆF3ßFóF∆S„∆F3¶FW67&óFñˆ„„«&Fc§«C„«&Fc¶∆íÜ÷√¶∆Ês“'Ç÷FVfV«B#‰6FV÷ñ2¬&W6V&6Ç¬ÊB&ˆfW76ñˆÊ¬&W7V÷S¬˜&Fc¶∆ì„¬˜&Fc§«C„¬ˆF3¶FW67&óFñˆ„„¬˜&Fc§FW67&óFñˆ„‡£«&Fc§FW67&óFñˆ‚&Fc¶&˜WC“""Ü÷∆Á3ßÜ◊“&áGG¢ÚˆÁ2ÊFˆ&RÊ6ˆ“˜ÜÛ„Ú#‡£«Ü◊§7&VF˜%Fˆˆ√‰÷ñ7&˜6ˆgL*‚v˜&B##C¬˜Ü◊§7&VF˜%Fˆˆ√„«Ü◊§7&VFTFFS„##b”b”ïCS£#C£”C£¬˜Ü◊§7&VFTFFS„«Ü◊§÷ˆFñgîFFS„##b”b”ïCS£#C£”C£¬˜Ü◊§÷ˆFñgîFFS„¬˜&Fc§FW67&óFñˆ„‡£«&Fc§FW67&óFñˆ‚&Fc¶&˜WC“""Ü÷∆Á3ßÜ◊‘”“&áGG¢ÚˆÁ2ÊFˆ&RÊ6ˆ“˜ÜÛ„ˆ÷“Ú#‡£«Ü◊‘”§Fˆ7V÷VÁDîCÁWVñC§cì$c4”d#2”CÉìB”ÑDÇ”c4SìCìdCs¬˜Ü◊‘”§Fˆ7V÷VÁDîC„«Ü◊‘”§ñÁ7FÊ6TîCÁWVñC§cì$c4”d#2”CÉìB”ÑDÇ”c4SìCìdCs¬˜Ü◊‘”§ñÁ7FÊ6TîC„¬˜&Fc§FW67&óFñˆ„‡¢ ¢ ¢ ¢ ¢ ¢ ¢ ¢ ¢ ¢ ¢ ¢ ¢ ¢ ¢ ¢ ¢ ¢ ¢ ¢ £¬˜&Fc•$Dc„¬˜ÉßÜ◊÷WF„√˜á6∂WBVÊC“'r#Û‡–¶VÊG7G&V––¶VÊFˆ&†–£ˆ&†–£√¬ÙFó7∆îFˆ5FóF∆RG'VS„‡–¶VÊFˆ&†–£ˆ&†–£√¬ıGóRıÖ&Vbı6ó¶Rıu≤B%“ı&ˆ˜B"ÙñÊfÚ#B"ÙîE≥√4c$cì#3dìCCÉÑDÉc4SìCìdCs„√4c$cì#3dìCCÉÑDÉc4SìCìdCsÂ“Ùfñ«FW"Ùf∆FTFV6ˆFRÙ∆VÊwFÇ#Sì„‡–ß7G&V––ßâ√]+¥‡%o>ø“‚¨ª,∞"†≠‰XT^F&>¯=èëbim©ùè†)m°6≤ñ€]l L˜ÁÛ‹_√,ú∆I#úmÉqÉÉjhƒóà~dO•7ár'0“ˇﬂ«π—9Å-Ë≠¡üN4CDGŸÒXRı±oT±˝áﬁ∆dW0"÷Ñ0yØ}õWÿ‹¸»ëÄaxf ƒfBf¬f jfÆfÂ+ ª Fü 3ÊB!‡•FUàRåöÃ©J!ª ïª ”ª ∑ª ıSà3à!≠B`aÕæ;GÁM¥„\—»ü‘N–Kq»º´ûÉÿõÔÿ;¯p‚”¿–¶VÊG7G&V––¶VÊFˆ&†–ßá&V`–£ –£#RcSS3R`–£r‡–£cB‡–£##r‡–£SCÇ‡–£Sc2‡–£SsÉb‡–£c3‡–£cÉ2‡–£c3b‡–£c3R‡–£cSCR‡–£csB‡–£cÉÉ2‡–£scR‡–£s#3r‡–£s3sB‡–£sCB‡–£sScí‡–£scC2‡–£sÉÉÇ‡–£ÉÉ2‡–£3sc"‡–£3ì3í‡–£CÉÇ‡–£#bcSS3R`–£#rcSS3R`–£#ÇcSS3R`–£#ícSS3R`–£3cSS3R`–£3cSS3R`–£3"cSS3R`–£32cSS3R`–£3BcSS3R`–£3RcSS3R`–£3bcSS3R`–£3rcSS3R`–£3ÇcSS3R`–£3ícSS3R`–£CcSS3R`–£CcSS3R`–£C"cSS3R`–£C2cSS3R`–£CBcSS3R`–£CRcSS3R`–£CbcSS3R`–£CrcSS3R`–£CÇcSS3R`–£CícSS3R`–£ScSS3R`–£ScSS3R`–£S"cSS3R`–£S2cSS3R`–£SBcSS3R`–£SRcSS3R`–£SbcSS3R`–£SrcSS3R`–£SÇcSS3R`–£SícSS3R`–£ccSS3R`–£ccSS3R`–£c"cSS3R`–£c2cSS3R`–£cBcSS3R`–£cRcSS3R`–£cbcSS3R`–£crcSS3R`–£cÇcSS3R`–£cícSS3R`–£scSS3R`–£scSS3R`–£s"cSS3R`–£s2cSS3R`–£sBcSS3R`–£sRcSS3R`–£sbcSS3R`–£srcSS3R`–£sÇcSS3R`–£sícSS3R`–£ÉcSS3R`–£ÉcSS3R`–£É"cSS3R`–£É2cSS3R`–£ÉBcSS3R`–£ÉRcSS3R`–£ÉbcSS3R`–£ÉrcSS3R`–£ÉÇcSS3R`–£ÉícSS3R`–£ìcSS3R`–£cSS3R`–£Sc"‡–£Sì#‡–£ss"‡–£s#3#r‡–£s#ccb‡–£s3#‡–£C‡–£C3ì"‡–£É3ììB‡–£És33‡–£És3sr‡–ßG&ñ∆W –£√¬ı6ó¶R"ı&ˆ˜B"ÙñÊfÚ#B"ÙîE≥√4c$cì#3dìCCÉÑDÉc4SìCìdCs„√4c$cì#3dìCCÉÑDÉc4SìCìdCsÂ“„‡–ß7F'Gá&V`–£ÉsÉ3ê–¢RTTÙ`–ßá&V`–£ –ßG&ñ∆W –£√¬ı6ó¶R"ı&ˆ˜B"ÙñÊfÚ#B"ÙîE≥√4c$cì#3dìCCÉÑDÉc4SìCìdCs„√4c$cì#3dìCCÉÑDÉc4SìCìdCsÂ“ı&WbÉsÉ3íıÖ&Ve7F“És3ss„‡–ß7F'Gá&V`–£ì3ê–¢RTTÙ`