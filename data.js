const profileData = {
  // 1. Hero
  hero: {
    name: "Ibrahima THIOYE",
    title: "Data Scientist & Ingénieur IA",
    description:
      "Étudiant en Master en Intelligence Artificielle et Science des Données, spécialisé en Machine Learning, Deep Learning et systèmes multi-agents. Passionné par l’automatisation intelligente des processus métiers et la création de solutions IA à fort impact.",
    cv_path: "cv_Ibrahima_THIOYE.pdf"
  },

  // 2. Formation
  education: [
    {
      year: "2021 - 2026",
      degree: "Diplôme d’études supérieures en Intelligence Artificielle et Science des Données (RNCP Niveau 7)",
      institution: "aivancity – Paris / Villejuif",
      details:
        "Formation spécialisée en Machine Learning, Deep Learning (NLP, LLM, OCR, RAG, Computer Vision), analyse de données et systèmes intelligents."
    }
  ],

  // 3. Expériences professionnelles (dédupliquées)
  experience: [
    {
      year: "01/2025 - 12/2025",
      title: "Alternant Développeur Data / IA",
      company: "ATC",
      details:
        "Automatisation de processus métiers via des solutions IA & Data. Développement d’outils automatisés pour la génération de rapports Word et tableaux de bord Excel (réduction de 6h à 3 minutes). Mise en place d’un système de résumé de documents confidentiels avec anonymisation des données sensibles à l’aide de modèles NER et LLM."
    },
    {
      year: "06/2024 - 09/2024",
      title: "Data Analyst / Data Scientist (Stage)",
      company: "PicturifyAI",
      details:
        "Développement d’un funnel marketing de conversion data-driven et alimenté par l’IA. Collecte, traitement et structuration de données de leads. Déploiement d’un modèle de machine learning pour la prédiction de conversion et automatisation du workflow via des outils no-code."
    },
    {
      year: "09/2023 - 12/2023",
      title: "Data Scientist",
      company: "Ba&sh",
      details:
        "Développement d’un modèle de prédiction des retours de commandes en ligne. Analyse et visualisation des données, préparation des datasets et entraînement d’un modèle Random Forest atteignant 91 % de précision."
    },
    {
      year: "01/2023 - 03/2023",
      title: "Data Scientist",
      company: "TinyCoaching",
      details:
        "Conception d’un modèle de machine learning pour la personnalisation des parcours d’apprentissage. Analyse des données pédagogiques, création d’un système de recommandation basé sur les préférences utilisateurs."
    },
    {
      year: "07/2023 - 09/2023",
      title: "Web Scraping / Data Analyst (Stage)",
      company: "Consult Trends",
      details:
        "Automatisation de la collecte de données de véhicules (images, marque, modèle) depuis plusieurs sources. Structuration des données et restitution via des tableaux de bord."
    },
    {
      year: "05/2022 - 07/2022",
      title: "Data Analyst (Stage)",
      company: "Custeed",
      details:
        "Création d’une pipeline de données reliant MongoDB à Power BI via Python. Automatisation de rapports, conception de tableaux de bord et communication des analyses aux parties prenantes."
    }
  ],

  // 4. Catégories de filtres
  filterCategories: {
    "Machine Learning": ["Classification", "Régression", "Clustering", "Recommandation"],
    "Deep Learning": ["NLP", "LLM", "OCR", "RAG", "Computer Vision"],
    "Data Analysis": ["Power BI", "Visualisation", "SQL", "ETL"],
    "Web Scraping": ["Python", "Collecte de données", "Automatisation"],
    "Agentic AI": ["Multi-agents", "Prompt Engineering", "LLM Open-Source"]
  },

  // 5. Projets (issus des CV, regroupés)
  projects: [
    {
      project_id: "p1", // Unique ID
      icon: "🤖",
      title: "Système IA multi-agents local",
      company: "Projet personnel",
      description:
        "Développement d’un système multi-agents capable de découvrir et expliquer les liens entre concepts de disciplines différentes. Agents asynchrones, réponses personnalisées selon le profil utilisateur et détection des biais.",
      tags: ["Agentic AI", "LLM", "Multi-agents", "Flask", "Python"],
      github_link: "https://github.com/IThioye/multi-agent-system-demo", // Placeholder
      demo_link: "#", // No demo link
      full_details: "<h3>Objectif</h3><p>Concevoir un système d'IA capable de simuler un <strong>brainstorming spécialisé</strong> en utilisant plusieurs agents LLM (Langage Model) agissant de manière asynchrone pour explorer des concepts interdisciplinaires.</p><h3>Technologies Clés</h3><ul><li><strong>Orchestration:</strong> LangChain / CrewAI (ou équivalent).</li><li><strong>Modèles:</strong> LLM Open-Source (e.g., Llama 3) exécutés localement via Ollama.</li><li><strong>Interface:</strong> Flask pour le backend, HTMX pour le frontend dynamique.</li></ul><h3>Impact</h3><p>Ce projet démontre une maîtrise de l'architecture agentive, du RAG avancé, et de la détection proactive des biais dans les systèmes autonomes.</p>"
    },
    {
      project_id: "p2",
      icon: "📄",
      title: "Résumé intelligent de documents confidentiels",
      company: "ATC",
      description:
        "Système d’automatisation pour le résumé de documents sensibles avec anonymisation des données via NER et LLM, intégré à des workflows métiers existants.",
      tags: ["Deep Learning", "NLP", "LLM", "RAG", "Automatisation"],
      github_link: "https://github.com/IThioye/confidential-summarizer",
      demo_link: "#",
      full_details: "Détails complets du projet ATC (à compléter)."
    },
    {
      project_id: "p3",
      icon: "📈",
      title: "Prédiction de conversion de leads",
      company: "PicturifyAI",
      description:
        "Modèle de machine learning pour prédire la conversion de leads marketing et automatisation complète du funnel data-driven.",
      tags: ["Machine Learning", "Classification", "Python", "Data Analysis"],
      github_link: "https://github.com/IThioye/lead-conversion-model",
      demo_link: "http://picturify.ai/demo",
      full_details: "Détails complets du projet PicturifyAI (à compléter)."
    },
    {
      project_id: "p4",
      icon: "🛍️",
      title: "Prédiction des retours clients e-commerce",
      company: "Ba&sh",
      description:
        "Modèle prédictif des retours de commandes en ligne avec 91 % de précision, basé sur l’analyse comportementale et transactionnelle.",
      tags: ["Machine Learning", "Classification", "Random Forest", "Power BI"],
      github_link: "https://github.com/IThioye/ecommerce-returns-prediction",
      demo_link: "#",
      full_details: "Détails complets du projet Ba&sh (à compléter)."
    },
    {
      project_id: "p5",
      icon: "🎓",
      title: "Système de recommandation pédagogique",
      company: "TinyCoaching",
      description:
        "Développement d’un modèle adaptatif pour personnaliser les parcours d’apprentissage en fonction des préférences et performances des utilisateurs.",
      tags: ["Machine Learning", "Recommandation", "Python", "Data Analysis"],
      github_link: "https://github.com/IThioye/educational-recommender",
      demo_link: "#",
      full_details: "Détails complets du projet TinyCoaching (à compléter)."
    }
  ],

  // 6. Articles (optionnel / orienté expertise)
  articles: [
    {
      category: "Agentic AI",
      read_time: "6 min",
      title: "Construire un système IA multi-agents avec des LLM open-source",
      excerpt:
        "Retour d’expérience sur la conception d’agents spécialisés, l’orchestration asynchrone et la détection des biais dans des systèmes IA complexes.",
      date: "2025",
      link: "#"
    },
    {
      category: "Data Science",
      read_time: "5 min",
      title: "De l’analyse de données à la prédiction métier",
      excerpt:
        "Comment transformer des données brutes en modèles prédictifs à valeur ajoutée pour les équipes business.",
      date: "2024",
      link: "#"
    }
  ]
};