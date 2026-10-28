import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
  TSkillCategory,
  TCertification,
  TAchievement,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  docker,
  git,
  threejs,
  flask,
  fastapi,
  python,
  scikitlearn,
  pandas,
  numpy,
  mysql,
  linux,
  jupyter,
  xgboost,
  cnn,
  cv,
  nlp,
  rf,
  keras,
  codec,
  codtech,
  carrent,
  hydroraksh,
  farmaiq,
  revive,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "credentials",
    title: "Credentials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "AI/ML Engineer",
    icon: web,
  },
  {
    title: "Deep Learning (CNN)",
    icon: mobile,
  },
  {
    title: "NLP Specialist",
    icon: backend,
  },
  {
    title: "MLOps & Flask Deployment",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Scikit-learn",
    icon: scikitlearn,
  },
  {
    name: "XGBoost",
    icon: xgboost,
  },
  {
    name: "Deep Learning",
    icon: cnn,
  },
  {
    name: "Computer Vision",
    icon: cv,
  },
  {
    name: "NLP",
    icon: nlp,
  },
  {
    name: "Random Forest",
    icon: rf,
  },
  {
    name: "Keras",
    icon: keras,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "SQL (MySQL)",
    icon: mysql,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Jupyter",
    icon: jupyter,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const skillCategories: TSkillCategory[] = [
  {
    category: "AI/ML Algorithms",
    skills: [
      "XGBoost",
      "Random Forest",
      "Logistic Regression",
      "Decision Trees",
      "KNN",
      "Naive Bayes",
      "SVM (basic)",
      "Ensemble Methods",
    ],
  },
  {
    category: "Deep Learning",
    skills: [
      "CNN (image classification & feature extraction)",
      "TF-IDF (NLP text representation)",
      "Keras (basic)",
      "Neural Networks",
    ],
  },
  {
    category: "NLP",
    skills: [
      "Text Preprocessing",
      "TF-IDF Vectorisation",
      "Logistic Regression Classifier",
      "SMOTE",
      "Tokenisation",
      "Stop-word Removal",
    ],
  },
  {
    category: "ML Engineering",
    skills: [
      "Scikit-learn Pipelines",
      "Feature Engineering",
      "Data Preprocessing",
      "SMOTE Oversampling",
      "Hyperparameter Tuning",
      "Cross-Validation",
    ],
  },
  {
    category: "Model Evaluation",
    skills: [
      "AUC-ROC",
      "F1-Score",
      "Precision & Recall",
      "Confusion Matrix",
      "Learning Curves",
      "Bias-Variance Trade-off",
      "Grid Search",
    ],
  },
  {
    category: "Deployment & Stack",
    skills: [
      "Flask (REST API)",
      "Docker Containerisation",
      "Git & GitHub",
      "Python (Pandas, NumPy)",
      "SQL (MySQL)",
      "Linux",
      "Jupyter Notebook",
      "ETL Pipelines",
    ],
  },
];

const experiences: TExperience[] = [
  {
    title: "Data Science Intern",
    companyName: "Codec Technologies India",
    icon: codec,
    iconBg: "#111111",
    date: "Aug 2025 – Oct 2025",
    points: [
      "Engineered an XGBoost AI diagnostic model on a clinical dataset (5,000+ records); applied advanced feature engineering, SMOTE class balancing, and Bayesian hyperparameter tuning to improve classification accuracy from 72% to 85% and reduce the false-negative rate by 18%.",
      "Built end-to-end Scikit-learn ML Pipelines integrating data preprocessing, feature scaling, SMOTE oversampling, model training, and cross-validated evaluation into a single reproducible, production-grade workflow.",
      "Evaluated AI model performance using AUC-ROC (0.89), F1-Score, Precision/Recall curves, and Confusion Matrix; delivered structured stakeholder reports with model KPIs, generalisation metrics, and improvement recommendations.",
      "Implemented Git-versioned, modular Python training and inference scripts, enabling reproducible AI experiments and seamless team collaboration across the full ML development lifecycle.",
    ],
  },
  {
    title: "Python Developer Intern",
    companyName: "CodTech IT Solutions Pvt. Ltd.",
    icon: codtech,
    iconBg: "#111111",
    date: "Jun 2025 – Aug 2025",
    points: [
      "Developed Python ETL pipelines (Pandas, NumPy) to ingest, clean, and transform data from 4+ sources into model-ready datasets, reducing AI pipeline preprocessing time by 50%.",
      "Automated data validation and quality assurance checks for ML-ready training datasets, ensuring feature consistency, schema integrity, and zero data leakage across train/validation/test splits.",
    ],
  },
];

const projects: TProject[] = [
  {
    name: "Revive — Clinical AI Disease Prediction System",
    description:
      "Production AI system on UCI Heart Disease dataset (303 records): end-to-end ML pipeline with feature engineering, SMOTE balancing, XGBoost training, and k-fold cross-validation achieving 85% accuracy (AUC-ROC: 0.91, F1: 0.87). Deployed as a Flask REST API with real-time JSON inference endpoints and probability scores, containerised with Docker.",
    tags: [
      {
        name: "python",
        color: "text-[#FFFFFF]",
      },
      {
        name: "xgboost",
        color: "text-[#A3A3A3]",
      },
      {
        name: "scikit-learn-pipelines",
        color: "text-[#FFFFFF]",
      },
      {
        name: "smote",
        color: "text-[#737373]",
      },
      {
        name: "flask-rest-api",
        color: "text-[#FFFFFF]",
      },
      {
        name: "docker",
        color: "text-[#A3A3A3]",
      },
    ],
    image: revive,
    sourceCodeLink: "https://github.com/mohdshamii/Revive",
    period: "Jan 2026 – Mar 2026",
  },
  {
    name: "HydroRaksh — Groundwater Intelligence Platform",
    description:
      "Pan-India groundwater decision-support platform (36 States/UTs, 700+ districts) ingesting CGWB, IMD, and CWC data, with 16 reproducible Jupyter notebooks covering EDA, validation, and SHAP explainability. Trained forecasters (Ridge, Random Forest, Gradient Boosting) cutting MAE from 29.85 m to 3.85 m; built collaborative-filtering recommender (NDCG@5: 0.437) served via Flask and FastAPI REST endpoints backed by 101 unit tests.",
    tags: [
      {
        name: "python",
        color: "text-[#FFFFFF]",
      },
      {
        name: "fastapi-flask",
        color: "text-[#A3A3A3]",
      },
      {
        name: "scikit-learn",
        color: "text-[#FFFFFF]",
      },
      {
        name: "shap-explainability",
        color: "text-[#737373]",
      },
      {
        name: "docker",
        color: "text-[#A3A3A3]",
      },
      {
        name: "sqlalchemy",
        color: "text-[#FFFFFF]",
      },
    ],
    image: hydroraksh,
    sourceCodeLink: "https://github.com/mohdshamii/HydroRaksh",
    period: "Jul 2026 – Oct 2026",
  },
  {
    name: "FarmAIQ — Smart Agriculture Multi-Model AI",
    description:
      "Dual-model AI platform featuring a Random Forest crop recommendation engine (Kaggle dataset, 2,200 records, 93% accuracy) and a CNN plant disease classifier (PlantVillage dataset) using deep learning feature extraction. Applied grid-search tuning and cross-validation to optimise generalisation on unseen agricultural data.",
    tags: [
      {
        name: "python",
        color: "text-[#FFFFFF]",
      },
      {
        name: "random-forest",
        color: "text-[#A3A3A3]",
      },
      {
        name: "cnn-deep-learning",
        color: "text-[#FFFFFF]",
      },
      {
        name: "grid-search",
        color: "text-[#737373]",
      },
      {
        name: "cross-validation",
        color: "text-[#A3A3A3]",
      },
    ],
    image: farmaiq,
    sourceCodeLink: "https://github.com/mohdshamii/FarmAIQ",
    period: "Nov 2025 – Dec 2025",
  },
];

const education = {
  degree: "B.Tech in Data Science",
  institution: "Teerthanker Mahaveer University, Moradabad, UP",
  cgpa: "8.5 / 10",
  graduation: "Expected 2027",
};

const certifications: TCertification[] = [
  {
    title: "Deep Learning & ML with Python",
    issuer: "Simplilearn",
    year: "2025",
  },
  {
    title: "Data Analysis & Problem Solving",
    issuer: "IBM",
    year: "2026",
  },
  {
    title: "Scientific Observation from Space",
    issuer: "ISRO",
    year: "2026",
  },
  {
    title: "Python, SQL & Problem Solving",
    issuer: "HackerRank",
    year: "2025",
  },
  {
    title: "Intro to Computer Science",
    issuer: "IIT Bombay",
    year: "2024",
  },
  {
    title: "Advanced Data Analysis – Excel & Power BI",
    issuer: "ITM EdTech",
    year: "2025",
  },
];

const achievements: TAchievement[] = [
  {
    title: "Smart India Hackathon (SIH)",
    description: "Selected for college round with innovative AI solution.",
  },
  {
    title: "India AI Impact Summit",
    description: "Presented end-to-end AI/ML project to industry leaders and researchers.",
  },
  {
    title: "850+ DSA Problems Solved",
    description: "Solved algorithmic challenges in Python across HackerRank & LeetCode.",
  },
];

const languages = [
  { name: "Hindi", proficiency: "Native" },
  { name: "English", proficiency: "Professional" },
  { name: "Urdu", proficiency: "Conversational" },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Mohd Shami engineered robust XGBoost and deep learning models for our clinical analytics. His pipeline rigor, SMOTE balancing, and 13 percentage point AUC-ROC improvement were outstanding.",
    name: "Codec Tech Lead",
    designation: "Engineering Lead",
    company: "Codec Technologies",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  },
  {
    testimonial:
      "Mohd demonstrated exceptional speed and precision developing automated ETL pipelines and quality checks in Python, reducing data preparation times by over 50%.",
    name: "CodTech Mentor",
    designation: "Senior Developer",
    company: "CodTech IT Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    testimonial:
      "A talented AI engineer who excels at bridging complex theoretical machine learning models with real-world production Flask REST APIs and Docker deployments.",
    name: "Academic Supervisor",
    designation: "Faculty Advisor",
    company: "TMU Data Science",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
];

export {
  services,
  technologies,
  skillCategories,
  experiences,
  projects,
  education,
  certifications,
  achievements,
  languages,
  testimonials,
};

