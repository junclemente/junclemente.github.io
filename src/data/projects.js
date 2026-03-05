export const dataProjects = [
  {
  title: "Early Warning System for Student Outcomes",
  description:
    "End-to-end ML classification framework across 958 California public high schools, evaluating 7 models under class imbalance using PR-AUC. Random Forest (PR-AUC 0.775) deployed in a live Streamlit app. Manuscript accepted for publication in the 2025 USD Capstone Chronicles.",
  tools: ["Python", "scikit-learn", "XGBoost", "Random Forest", "Streamlit", "Public Data"],
  href: "https://github.com/junclemente/ca-early-warning-system",
},
{
  title: "Workplace Health Policy Optimization",
  description:
    "Cloud-based predictive analytics pipeline evaluating the ROI impact of workplace health policies on productivity and absenteeism using public CDC, BLS, and County Health Rankings datasets.",
  tools: ["Python", "XGBoost", "AWS SageMaker", "AWS S3", "AWS Athena", "Pandas"],
  href: "https://github.com/junclemente/workplace-health-policy-optimization-aws",
},
  {
    title: "Washington Traffic Data Pipeline",
    description:
      "End-to-end real-time data pipeline ingesting traffic, weather, and incident data from WSDOT REST APIs into a cloud-hosted MySQL database on Azure, with automated ETL scheduling and a live Tableau dashboard.",
    tools: ["Python", "MySQL", "Azure", "REST APIs", "Tableau", "ETL"],
    href: "https://github.com/junclemente/washington-traffic-data-pipeline",
  },
{
  title: "School Sentiment NLP",
  description:
    "NLP-based sentiment and topic analysis comparing Reddit discussions of high- and low-performing school districts (Palo Alto vs. Oklahoma City) to surface community perception patterns. Deployed as a live Streamlit app.",
  tools: ["Python", "NLTK", "scikit-learn", "Streamlit"],
  href: "https://github.com/junclemente/school-sentiment-nlp",
},
 {
  title: "Heart Disease Prediction (Multi-cohort)",
  description:
    "Comparative predictive modeling of coronary heart disease risk using expanded clinical features across multiple international patient cohorts, evaluating model generalizability across populations.",
  tools: ["Python", "scikit-learn", "Classification", "Feature Engineering", "Clinical Data"],
  href: "https://github.com/junclemente/heart-disease-prediction-multi-cohort",
},
{
  title: "jcds - Python Library for Reproducible EDA",
  description:
    "Open-source Python library for reproducible EDA workflows. Features versioned releases, full pytest test suite, CI/CD via GitHub Actions, and published MkDocs documentation. Installable via pip.",
  tools: ["Python", "PyPI", "pytest", "CI/CD", "GitHub Actions", "MkDocs"],
  href: "https://github.com/junclemente/jcds",
},
];

export const fullStackProjects = [
  {
    title: "Flask CRUD Web Application (AWS Deployment)",
    description:
      "A full-stack web application built with Flask and PostgreSQL, featuring user authentication, role-based authorization, and RESTful APIs. Deployed to a Linux server on AWS Lightsail.",
    tools: ["Python", "Flask", "PostgreSQL", "REST APIs", "AWS", "Linux"],
    href: "https://github.com/junclemente/flask-crud-catalog",
  },
  {
    title: "Interactive Neighborhood Map Application",
    description:
      "A single-page JavaScript application using the Google Maps API and third-party data sources to deliver an interactive, map-based user experience.",
    tools: ["JavaScript", "Google Maps API", "HTML", "CSS", "REST APIs"],
    href: "https://github.com/junclemente/neighborhood-map",
  },
];
