type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
    location: string;
    github: string;
    linkedin: string;
    website: string;
  };
  hero: {
    name: string;
    p: string[];
    tagline: string;
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    skills: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Mohd Shami | AI/ML Engineer",
    fullName: "Mohd Shami",
    email: "codexshami@gmail.com",
    location: "Moradabad, UP, India",
    github: "https://github.com/mohdshamii",
    linkedin: "https://linkedin.com/in/mohdshamii",
    website: "https://mohdshamii.github.io",
  },
  hero: {
    name: "Mohd Shami",
    tagline: "AI/ML Engineer | Python | Deep Learning | NLP | Computer Vision | Scikit-learn | XGBoost | Flask | Model Deployment",
    p: [
      "AI/ML Engineer building end-to-end intelligent systems spanning supervised learning, deep learning (CNN), NLP, and real-time inference APIs.",
      "Delivering high-accuracy clinical diagnostics, water intelligence models, and smart agriculture platforms containerised with Docker.",
    ],
  },
  contact: {
    p: "Let's Collaborate",
    h2: "Get In Touch.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Professional Summary",
      h2: "Engineering Profile.",
      content:
        "AI/ML Engineer with 1+ year of experience building end-to-end AI and machine learning systems spanning supervised learning, NLP, computer vision, deep learning (CNN), feature engineering, model optimisation, and Flask-based production deployment. Proficient in Python, Scikit-learn, XGBoost, Random Forest, CNN, TF-IDF, SMOTE, SQL, Docker, and Git. Delivered AI-powered applications achieving up to 97.8% NLP accuracy, improved clinical diagnostic models by 13 percentage points (AUC-ROC: 0.91), and deployed real-time ML inference APIs. Seeking an AI/ML Engineer, AI Engineer Fresher, or ML Engineer role to build and scale intelligent systems.",
    },
    experience: {
      p: "Career & Internships",
      h2: "Work Experience.",
    },
    skills: {
      p: "Technical Stack",
      h2: "Skills & Capabilities.",
    },
    feedbacks: {
      p: "Verified Qualifications",
      h2: "Credentials & Honors.",
    },
    works: {
      p: "Production Systems",
      h2: "Featured Projects.",
      content:
        "The following projects showcase my ability to engineer, evaluate, and deploy end-to-end machine learning and deep learning applications. Each system features reproducible pipelines, rigorous cross-validation, and production-grade REST APIs.",
    },
  },
};

