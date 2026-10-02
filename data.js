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
    { category: "Intelligence Artificielle", items: ["Classification", "Régression", "Clustering", "Computer Vision", "NLP", "Object Detection", "Segmentation", "LLM","RAG","OCR"] },
    { category: "Programmation", items: ["Python", "R", "SQL", "Bash"] },
    { category: "Librairies ML/DL", items: ["Scikit-learn", "TensorFlow", "PyTorch", "OpenCV", "HuggingFace","MLflow"] },
    { category: "Interfaces et Déploiement", items: ["Git/GitHub", "Docker", "Flask", "Streamlit"] },
    { category: "Visualisation de données", items: ["PowerBI", "Tableau", "Matplotlib", "Seaborn"] },
    { category: "ETL & Gestion de données", items: ["Pandas", "NumPy", "Beautiful Soup", "Scrapy"] },
    { category: "Outils de développement", items: ["VS Code", "Codex", "AntiGravity", "Jupyter Notebook"] }
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
      full_details: "<h3>Objectif</h3><p>Concevoir un système d'IA capable de simuler un <strong>brainstorming spécialisé</strong> en utilisant plusieurs agents LLM agissant de manière asynchrone pour explorer des concepts interdisciplinaires.</p><h3>Technologies clés</h3><ul><li><strong>Modèles :</strong> LLM open-source exécutés localement via Ollama.</li><li><strong>Interface :</strong> Flask pour le backend et HTMX pour le frontend dynamique.</li></ul><h3>Impact</h3><p>Ce projet démontre une maîtrise de l'architecture agentive, du RAG avancé et de la détection proactive des biais dans les systèmes autonomes.</p>"
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
    },
    {
      "project_id": "p10",
      "icon": "",
      "title": "GitHub Repository Reviewer Agent",
      "company": "Projet personnel",
      "description": "Agent FastAPI qui analyse un depot GitHub public et retourne une revue structuree de sa qualite portfolio, avec outils GitHub API, analyse statique, guardrails, monitoring, evaluation et deux modes d'inference LLM via Mistral ou Ollama.",
      "tags": [
        "Agentic AI",
        "FastAPI",
        "LLM",
        "Mistral",
        "Ollama",
        "GitHub API",
        "Guardrails",
        "Evaluation",
        "Monitoring",
        "Hugging Face Spaces"
      ],
      "github_link": "https://github.com/IThioye/github-repo-reviewer-agent",
      "demo_link": "https://huggingface.co/spaces/IbrahimaThioye/github-repo-reviewer",
      "full_details": "<h3>Mission</h3><p>Concevoir un agent capable de recevoir l'URL d'un depot GitHub public et de produire une analyse claire de sa qualite portfolio: resume du projet, langages principaux, structure du depot, instructions d'installation, instructions d'execution, forces, faiblesses, ameliorations possibles, avertissements de securite ou maintenabilite, score portfolio et recommandation finale.</p><h3>Methodes</h3><p>Developpement d'une API avec <code>FastAPI</code>, creation d'un handler agentique centralise, integration de deux outils principaux: un outil <code>GitHub API</code> pour recuperer les metadonnees, le README, les langages et l'arborescence, et un analyseur statique pour detecter le type de projet, les fichiers importants, les fichiers manquants, les signaux de qualite et les avertissements. Le systeme inclut des guardrails pour accepter uniquement les URL <code>github.com</code>, bloquer les injections de prompt, refuser les depots prives ou inaccessibles, limiter le nombre de fichiers analyses et eviter toute execution de code externe. L'inference LLM est configurable via <code>config.yaml</code> avec deux modes: <code>mistral</code> pour l'API Mistral et <code>ollama</code> pour une execution locale.</p><h3>Livrables</h3><p>Une application complete deployable sur <code>Hugging Face Spaces</code> avec frontend web, endpoint <code>/review</code>, endpoint <code>/health</code>, logs JSONL dans <code>monitoring/logs.jsonl</code>, scripts d'evaluation, dataset de test et mini-rapport final. L'evaluation stockee montre un taux de succes de <strong>100%</strong>, une latence moyenne d'environ <strong>3535 ms</strong>, un taux de succes des outils de <strong>100%</strong> et une precision de detection du type de projet de <strong>100%</strong> sur le jeu de liens de test.</p>"
    },
    {
      "project_id": "p11",
      "icon": "",
      "title": "Climate Displacement Evidence Agent",
      "company": "Projet academique",
      "description": "Agent RAG securise qui analyse un corpus de rapports sur les deplacements climatiques et produit des syntheses comparatives citees, avec recherche hybride, reranking, serveur MCP, guardrails, raisonnement par Self-Consistency, critique independant, evaluation RAGAS et observabilite Langfuse.",
      "tags": [
        "Agentic AI",
        "RAG",
        "Flask",
        "Mistral",
        "Ollama",
        "MCP",
        "Hybrid Search",
        "Cross-Encoder",
        "Guardrails",
        "RAGAS",
        "Langfuse",
        "Climate Tech"
      ],
      "github_link": "https://github.com/IThioye/climate-displacement-agent",
      "demo_link": "",
      "full_details": "<h3>Mission</h3><p>Concevoir un agent de recherche destine aux analystes humanitaires afin de comparer les risques et les preuves documentees concernant les deplacements lies aux catastrophes et au changement climatique. L'agent interroge un corpus controle de rapports institutionnels, distingue les observations historiques des projections, identifie les limites des donnees et genere une synthese structuree au format <code>EVIDENCE / ANALYSIS / CONCLUSION / CONFIDENCE</code>. Chaque reponse est accompagnee de references indiquant le document, l'editeur, l'annee, la page et l'URL de la source.</p><h3>Methodes</h3><p>Developpement d'une application avec une interface conversationnelle <code>Flask</code> et une page d'administration pour consulter les executions, les journaux, la latence, les couts estimes et l'utilisation des outils. Le pipeline RAG applique une recherche hybride combinant <code>BM25</code> et embeddings denses, puis fusionne les classements avec <code>Reciprocal Rank Fusion</code>. Une strategie de decoupage parent-enfant permet de rechercher des passages precis tout en retournant un contexte plus complet. Les passages candidats sont ensuite classes par un <code>cross-encoder</code> avant l'assemblage du contexte. L'agent applique un filtrage d'entree L1 avec normalisation Unicode et detection d'injections, une autorisation d'action L4 fondee sur une matrice de risque, une limitation des appels et du budget avec <code>TokenBudget</code>, ainsi qu'une sanitisation du contenu documentaire. Trois brouillons sont generes avec une strategie de <code>Self-Consistency k=3</code>, puis un second role d'agent critique controle les citations, l'incertitude et la distinction entre faits observes et projections. L'inference est configurable avec l'API <code>Mistral</code> ou un modele local via <code>Ollama</code>.</p><h3>Livrables</h3><p>Une application complete avec interface utilisateur de type chatbot, affichage en direct des etapes operationnelles, panneau administrateur, journalisation SQLite, corpus documentaire local et scripts d'ingestion et d'evaluation. Un serveur <code>FastMCP</code> expose quatre outils: recherche de preuves, comparaison de regions, consultation des metadonnees d'une source et enregistrement d'un constat verifie. L'observabilite <code>Langfuse</code> couvre l'agent principal, les appels d'outils, la chaine de Self-Consistency, les generations LLM et le critique. L'evaluation repose sur dix questions et compare une baseline TF-IDF au pipeline final. Les resultats enregistres montrent une amelioration du MRR de <strong>0,900 a 0,933</strong>, du context recall de <strong>0,800 a 0,833</strong> et du context precision de <strong>0,642 a 0,700</strong>. La suite automatisee contient <strong>15 tests reussis</strong>, notamment les tests de securite contre les injections de prompt.</p>"
    },
    {
      "project_id": "p12",
      "icon": "",
      "title": "Génération de données synthétiques pour la normalisation du wolof",
      "company": "Projet de fin d'études · aivancity",
      "description": "Benchmark de six stratégies de génération formel→informel pour entraîner un Transformer d'édition caractère par caractère à normaliser des commentaires wolof authentiques et code-switchés.",
      "tags": [
        "Deep Learning",
        "NLP",
        "Synthetic Data",
        "Transformers",
        "Wolof",
        "PyTorch",
        "Hugging Face",
        "Recherche"
      ],
      "github_link": "https://github.com/IThioye/wolof_synthetic_data_generation",
      "case_study_link": "wolof-normalization.html",
      "demo_link": "",
      "full_details": "<h3>Question de recherche</h3><p>Mesurer, sous une architecture et un protocole identiques, dans quelle mesure différentes stratégies de génération synthétique améliorent la normalisation de commentaires YouTube en wolof informel et code-switché français–wolof.</p><h3>Ce que montre l'étude</h3><p>Une démonstration explique la normalisation caractère par caractère, puis relie les 3 330 cibles formelles aux 201 paires Gold réparties en 142 exemples d'entraînement, 30 de développement et 29 de test. Les six conditions, l'architecture et les limites sont présentées sans faire passer le benchmark pour un produit fini.</p><h3>Résultat</h3><p>La meilleure condition synthétique réduit le CER de 0,220 à 0,191 sur le test gelé, soit un gain relatif de 13,1 %. Le corpus reste petit et le taux de surcorrection élevé.</p><p><a class='project-link' href='wolof-normalization.html'>Explorer l'étude interactive →</a></p>"
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
      ].concat(item.case_study_link ? [{ label: "Explorer", url: item.case_study_link, kind: "primary", internal: true }] : []).concat(item.github_link && item.github_link !== "#" ? [{ label: "GitHub", url: item.github_link, kind: item.case_study_link ? "ghost" : "primary" }] : []).concat(item.demo_link && item.demo_link !== "#" ? [{ label: "Démo", url: item.demo_link, kind: "ghost" }] : []),
      keywords: item.tags.join(" ") + " " + item.company,
      modalId: item.project_id,
      fullDetails: item.full_details,
      icon: item.icon
    };
  })
};
