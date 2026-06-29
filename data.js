const profileData = {
  hero: {
    name: "Ibrahima THIOYE",
    title: "Ingénieur IA & Data Scientist",
    description: "Étudiant en Master en Intelligence Artificielle et Science des Données, spécialisé en Machine Learning, Deep Learning et systèmes multi-agents. Passionné par l'automatisation intelligente des processus métiers et la création de solutions IA à fort impact.",
    cv_path: "cv_Ibrahima_THIOYE.pdf"
  },
  education: [
    {
      year: "2021 - 2026",
      degree: "Diplôme d'études supérieures en Intelligence Artificielle et Science des Données (RNCP Niveau 7)",
      institution: "aivancity - Paris / Villejuif",
      details: "Formation spécialisée en Machine Learning, Deep Learning (NLP, LLM, OCR, RAG, Computer Vision), analyse de données et systèmes intelligents."
    }
  ],
  experience: [
    {
      year: "01/2025 - 12/2025",
      title: "Alternant Data Scientist",
      company: "ATC",
      details: "Conception et déploiement de pipelines d’automatisation en Python pour la génération de reporting et tableaux de bord Excel,réduisant le temps de traitement de 99% (6h à 3 min).Développement d’un système de traitement documentaire intégrant extraction de texte avec OCR, anonymisation des données sensibles (NER) et résumé par LLM dans un contexte de conformité et de sécurité des données.Accompagnement des utilisateurs dans l’adoption des outils déployés et présentation des résultats obtenus",
      tags: ["Automatisation", "LLM", "NER", "Word", "Excel"]
    },
    {
      year: "06/2024 - 09/2024",
      title: "Data Analyst / Data Scientist",
      company: "PicturifyAI",
      details: "Collecte,structuration et exploitations de données multi-sources (LinkedIn, Infonet, APIs publiques) avec Python et Excel.Développement et déploiement d’un modèle de machine learning de prédiction de conversion (scoring de leads).Automatisation du workflow via des outils no-code.",
      tags: ["Machine Learning", "Marketing", "No-code", "Lead Scoring"]
    },
    {
      year: "09/2023 - 12/2023",
      title: "Data Scientist",
      company: "Ba&sh",
      details: "Développement d'un modèle de prédiction des retours de commandes en ligne. Analyse et visualisation des données, préparation des datasets et entraînement d'un modèle Random Forest atteignant 91 % de précision.",
      tags: ["Random Forest", "Classification", "Power BI", "E-commerce"]
    },
    {
      year: "01/2023 - 03/2023",
      title: "Data Scientist",
      company: "TinyCoaching",
      details: "Conception d'un modèle de machine learning pour la personnalisation des parcours d'apprentissage. Analyse des données pédagogiques, création d'un système de recommandation basé sur les préférences utilisateurs.",
      tags: ["Recommandation", "Personnalisation", "Python"]
    },
    {
      year: "07/2023 - 09/2023",
      title: "Web Scraping / Data Analyst",
      company: "Consult Trends",
      details: "Automatisation de la collecte de données de véhicules, incluant images, marque et modèle, depuis plusieurs sources. Structuration des données et restitution via des tableaux de bord.",
      tags: ["Web Scraping", "Python", "Automatisation", "Dashboards"]
    },
    {
      year: "05/2022 - 07/2022",
      title: "Data Analyst",
      company: "Custeed",
      details: "Conception d’une pipeline de données entre MongoDB, Python et Power BI pour une visualisation dynamique des données métier.Analyses des données clients pour améliorer la fidélisation.Automatisation de la génération de reporting et tableaux de bord Power BI pour les données récurrentes.Présentation d’analyses permettant d’identifier les opportunités d’améliorations aux parties prenantes",
      tags: ["MongoDB", "Power BI", "Pipeline", "Python"]
    }
  ],
  filterCategories: {
    "Machine Learning": ["Classification", "Régression", "Clustering", "Recommandation"],
    "Deep Learning": ["NLP", "LLM", "OCR", "RAG", "Computer Vision"],
    "Data Analysis": ["Power BI", "Visualisation", "SQL", "ETL"],
    "Web Scraping": ["Python", "Collecte de données", "Automatisation"],
    "Agentic AI": ["Multi-agents", "Prompt Engineering", "LLM Open-Source"],
    "Papier de recherche": []
  },
  skillSections: [
    { category: "Intelligence Artificielle", items: ["Classification", "Régression", "Clustering", "Computer Vision", "NLP", "Object Detection", "Segmentation", "LLM"] },
    { category: "Programmation", items: ["Python", "R", "SQL", "Bash"] },
    { category: "Librairies ML/DL", items: ["Scikit-learn", "TensorFlow", "PyTorch", "OpenCV", "HuggingFace"] },
    { category: "Visualisation de données", items: ["PowerBI", "Tableau", "Matplotlib", "Seaborn"] },
    { category: "ETL & Gestion de données", items: ["Pandas", "NumPy", "Beautiful Soup", "Scrapy"] }
  ],
  projects: [
    {
      project_id: "p1",
      icon: "",
      title: "Système IA multi-agents local",
      company: "Projet personnel",
      description: "Développement d'un système multi-agents capable de découvrir et expliquer les liens entre concepts de disciplines différentes. Agents asynchrones, réponses personnalisées selon le profil utilisateur et détection des biais.",
      tags: ["Agentic AI", "LLM", "Multi-agents", "Flask", "Python"],
      github_link: "https://github.com/IThioye/Concept-Connector",
      demo_link: "#",
      full_details: "<h3>Objectif</h3><p>Concevoir un système d'IA capable de simuler un <strong>brainstorming spécialisé</strong> en utilisant plusieurs agents LLM agissant de manière asynchrone pour explorer des concepts interdisciplinaires.</p><h3>Technologies clés</h3><ul><li><strong>Orchestration :</strong> LangChain / CrewAI.</li><li><strong>Modèles :</strong> LLM open-source exécutés localement via Ollama.</li><li><strong>Interface :</strong> Flask pour le backend et HTMX pour le frontend dynamique.</li></ul><h3>Impact</h3><p>Ce projet démontre une maîtrise de l'architecture agentive, du RAG avancé et de la détection proactive des biais dans les systèmes autonomes.</p>"
    },
    {
      project_id: "p2",
      icon: "",
      title: "Résumé intelligent de documents confidentiels",
      company: "ATC",
      description: "Système d'automatisation pour le résumé de documents sensibles avec anonymisation des données via NER et LLM, intégré à des workflows métiers existants.",
      tags: ["Deep Learning", "NLP", "LLM", "RAG", "Automatisation"],
      github_link: "#",
      demo_link: "#",
      full_details: "<h3>Contexte</h3><p>Développement d'un système de résumé de documents confidentiels permettant d'anonymiser les données sensibles avant traitement.</p><h3>Approche</h3><p>Utilisation de modèles de NER pour la détection des entités sensibles, combinés à des LLM pour la génération de résumés fidèles et exploitables dans les processus métiers.</p><h3>Résultat</h3><p>Une intégration dans les workflows existants afin d'accélérer la lecture documentaire tout en renforçant la confidentialité.</p>"
    },
    {
      project_id: "p4",
      icon: "",
      title: "Prédiction des retours clients e-commerce",
      company: "Ba&sh",
      description: "Modèle prédictif des retours de commandes en ligne avec 91 % de précision, basé sur l'analyse comportementale et transactionnelle.",
      tags: ["Machine Learning", "Classification", "Random Forest", "Power BI"],
      github_link: "#",
      demo_link: "#",
      full_details: "<h3>Mission</h3><p>Analyser les comportements clients et les variables transactionnelles afin de prédire les retours de commandes.</p><h3>Méthodes</h3><p>Préparation des données, feature engineering, entraînement d'un modèle Random Forest et restitution des résultats via des visualisations orientées métier.</p><h3>Performance</h3><p>Le modèle a atteint 91 % de précision sur les données de validation.</p>"
    },
    {
      project_id: "p5",
      icon: "",
      title: "Système de recommandation pédagogique",
      company: "TinyCoaching",
      description: "Développement d'un modèle adaptatif pour personnaliser les parcours d'apprentissage en fonction des préférences et performances des utilisateurs.",
      tags: ["Machine Learning", "Recommandation", "Python", "Data Analysis"],
      github_link: "#",
      demo_link: "#",
      full_details: "<h3>Objectif</h3><p>Concevoir un moteur de recommandation capable d'adapter les parcours pédagogiques au profil de chaque utilisateur.</p><h3>Implémentation</h3><p>Analyse des données d'usage, segmentation des préférences et proposition de contenus pertinents selon les performances observées.</p><h3>Valeur</h3><p>Le système améliore l'engagement et soutient une personnalisation plus fine des apprentissages.</p>"
    },
    {
      project_id: "p6",
      icon: "",
      title: "Système d'annotation et de classification d'images pour les vides et les composants des circuits imprimés",
      company: "Projet Personnel",
      description: "Pour annoter des images automatiquement via SAM et utiliser ces images annotées pour entrainer un modèle YOLO de classification.",
      tags: ["Deep Learning", "Computer Vision", "Python", "Flask", "Hugging Face"],
      github_link: "https://github.com/IThioye/pcb-annotation-yolo-sam",
      demo_link: "https://ibrahimathioye-sam-yolo-flask.hf.space/",
      full_details: "<h3>Objectif</h3><p>Développer un système d’analyse automatisée pour l’inspection de circuits imprimés (PCB), combinant segmentation avancée et classification afin de détecter les défauts (voids) et identifier les composants.</p><h3>Implémentation</h3><p>Intégration de SAM2 pour la segmentation interactive et de YOLO pour la détection et la classification des composants. Mise en place d’une application Flask permettant l’annotation, la génération de masques, le calcul de statistiques de surface et le réentraînement du modèle avec de nouvelles données.</p><h3>Valeur</h3><p>Le système permet d’automatiser et d’accélérer l’analyse visuelle des PCB, en améliorant la précision de détection et en facilitant la création de datasets pour des workflows industriels.</p>"    
    },
    {
      project_id: "p7",
      icon: "",
      title: "Prédiction du succès de fondateurs de startups (VCBench)",
      company: "VCBench (challenge data science)",
      description: "Pipeline de classification binaire qui prédit la réussite de fondateurs à partir de données de parcours (éducation, carrière, exits, industrie) enrichies par des features sémantiques TF-IDF.",
      tags: ["Machine Learning", "Classification", "Optuna", "TF-IDF", "Scikit-learn", "Ablation Study"],
      github_link: "https://github.com/IThioye/vcbench-ml",
      demo_link: "#",
      full_details: "<h3>Mission</h3><p>Concevoir un modèle de scoring des fondateurs capable d’anticiper la variable cible <code>success</code> dans le cadre du benchmark VCBench.</p><h3>Méthodes</h3><p>Feature engineering sur des données structurées et semi-structurées (éducation, expériences, IPO/acquisitions, industrie), vectorisation TF-IDF d’un résumé texte, entraînement multi-modèles avec validation croisée et tuning Optuna, puis sélection automatique selon le score F0.5.</p><h3>Livrables</h3><p>Un mode recherche avec diagnostics (comparaison de modèles, courbes d’apprentissage, matrices de confusion, importance des variables) et un mode benchmark produisant un <code>submission.csv</code> binaire prêt pour évaluation privée.</p>"
    },
    {
      project_id: "p8",
      icon: "",
      title: "Hybrid Semantic-numeric Modeling for Founder Success Prediction: A VCBench Submission",
      company: "Ibrahima Thioye",
      description: "Papier de recherche détaillant la méthodologie derrière le projet de prédiction du succès de fondateurs de startups",
      tags: ["Papier de recherche","Machine Learning", "Classification"],
      github_link: "https://github.com/IThioye/vcbench-ml",
      demo_link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6748838",
      full_details: ""
    },
    {
      "project_id": "p9",
      "icon": "",
      "title": "Prediction du prix de voitures d'occasion",
      "company": "Projet personel",
      "description": "Pipeline de regression qui estime le prix de vente de voitures d'occasion a partir de caracteristiques techniques et commerciales, avec nettoyage des unites, fusion de datasets Kaggle, analyse exploratoire et ensemble learning.",
      "tags": [
        "Machine Learning",
        "Regression",
        "Scikit-learn",
        "XGBoost",
        "LightGBM",
        "Stacking",
        "EDA"
      ],
      "github_link": "https://github.com/IThioye/car-price-regression",
      "demo_link": "https://github.com/IThioye/car-price-regression/blob/main/docs/REPORT.md",
      "full_details": "<h3>Mission</h3><p>Concevoir un modele capable d'estimer le <code>selling_price</code> de voitures d'occasion a partir de variables comme l'annee, le kilometrage, le carburant, la transmission, la cylindree, la puissance maximale, le couple et le nombre de sieges.</p><h3>Methodes</h3><p>Nettoyage des colonnes contenant des unites, conversion du couple en Nm, fusion de deux datasets Kaggle, traitement des valeurs manquantes par interpolation, analyse exploratoire, encodage des variables categorielles, transformation logarithmique et comparaison de modeles de regression avec validation croisee KFold.</p><h3>Livrables</h3><p>Un notebook complet avec EDA, comparaison de modeles par MSE, modele final en stacking et analyse des residus. Le modele final atteint un score R2 de validation d'environ <strong>0.91</strong> et un score R2 sur le dataset traite complet d'environ <strong>0.94</strong>, avec <code>max_power (bhp)</code> et <code>year</code> comme variables les plus influentes.</p>"
}
  ],
  certifications: [
    {
      title: "Microsoft Certified: Azure Data Scientist Associate",
      issuer: "Microsoft",
      date: "2025",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/IbrahimaTHIOYE-2392/321034E6B5AA0D55?sharingId=571CABD87EB452E1"
    },
    {
      title: "AI Product Engineering: From Concept to Market",
      issuer: "UC Berkeley",
      date: "2025",
      link: "https://badgr.com/public/assertions/kltf95JQQQWVjNzApdzw6w"
    }
  ]
};

const DATA = {
  name: { first: "Ibrahima", last: "THIOYE" },
  title: profileData.hero.title,
  bio: profileData.hero.description,
  location: "Paris, France",
  primaryActions: [
    { label: "Voir les projets", action: "projects" },
    { label: "Voir les compétences", action: "skills", secondary: true },
    { label: "Télécharger le CV", href: profileData.hero.cv_path, secondary: true },
    { label: '<i class="fab fa-github"></i>', href: "https://github.com/IThioye", icon: true },
    { label: '<i class="fab fa-linkedin"></i>', href: "https://linkedin.com/in/ibrahima-thioye", icon: true },
    { label: '<i class="fas fa-envelope"></i>', href: "mailto:ibrahimathioye03@gmail.com", icon: true }
  ],
  education: profileData.education.map(function(item) {
    return {
      year: item.year,
      degree: item.degree,
      school: item.institution,
      description: item.details
    };
  }),
  certifications: profileData.certifications.map(function(item) {
    return {
      name: item.title,
      issuer: item.issuer,
      year: item.date,
      link: item.link
    };
  }),
  experience: profileData.experience.map(function(item) {
    return {
      period: item.year,
      role: item.title,
      company: item.company,
      description: item.details,
      tags: item.tags || []
    };
  }),
  skills: profileData.skillSections,
  projects: profileData.projects.map(function(item) {
    return {
      title: item.title,
      category: item.tags[0] || item.company,
      subcategory: item.company,
      description: item.description,
      stack: item.tags,
      links: [
        { label: "Détails", url: "#", kind: "ghost", modal: item.project_id }
      ].concat(item.github_link && item.github_link !== "#" ? [{ label: "GitHub", url: item.github_link, kind: "primary" }] : []).concat(item.demo_link && item.demo_link !== "#" ? [{ label: "Démo", url: item.demo_link, kind: "ghost" }] : []),
      keywords: item.tags.join(" ") + " " + item.company,
      modalId: item.project_id,
      fullDetails: item.full_details,
      icon: item.icon
    };
  })
};
