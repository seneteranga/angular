var univs = [{
    unchk:{
        sigle: "UNCHK",
        nom: "Université numérique Cheikh Hamidou KANE",
    },
    ussein:{
        sigle: "USSEIN",
        nom: "Université Sine-Saloum El Hadji Ibrahima Niasse",
    },
    uasz:{
        sigle: "UASZ",
        nom: "Université Assane Seck de Ziguinchor",
    },
    ugb:{
        sigle: "UGB",
        nom: "Université Gaston Berger",
    },
    ucad:{
        sigle: "UCAD",
        nom: "Université Cheikh Anta Diop",
    },
    uadb:{
        sigle: univs.uadb,
        nom: "Université Alioune Diop de Bambey",
    },
    uam:{
        sigle: "UAM",
        nom: "Université Amadou Mahtar Mbow",
    },
    uidt:{
        sigle: "UIDT",
        nom: "Université Iba Der Thiam",
    },
    isepb:{
        sigle: "ISEPB",
        nom: "Institut Supérieur d'Enseignement Professionnel Bignona",
    },
    isept:{
        sigle: "ISEPT",
        nom: "Institut Supérieur d'Enseignement Professionnel Thiès",
    },
    isepr:{
        sigle: "ISEPR",
        nom: "Institut Supérieur d'Enseignement Professionnel Richard Toll",
    },
    isepatd:{
        sigle: "ISEPATD",
        nom: "Institut Supérieur d'Enseignement Professionnel Amadou Traware (ex. Isep Diamniadio)",
    },
    isepmb:{
        sigle: "ISEPMB",
        nom: "Institut Supérieur d'Enseignement Amadou Traware (ex. Isep Diamniadio)",
    },
    isepma:{
        sigle: "ISEPMA",
        nom: "Institut Supérieur d'Enseignement Professionnel Matam",
    }
}];
var datas = [
    {
        filiere: "Administration Economique et Sociale",
        universite:  univs.unchk
    },
    {
        filiere: "ADMINISTRATIONS DES AFFAIRES MARITIMES",
        universite:  univs.ussein
    },
    {
        filiere: "AGRICULTURE BIOLOGIQUE ET ECOLOGIQUE",
        universite:  univs.ussein
    },
    {
        filiere: "Agriculture Durable et Foresterie (KOLDA)",
        universite:  univs.uasz
    },
    {
        filiere: "Agrobusiness-Entrepreneuriat",
        universite:  univs.isepb
    },
    {
        filiere: "AGROFORESTERIE",
        universite:  univs.ussein
    },
    {
        filiere: "Agroforesterie",
        universite:  univs.uasz
    },
    {
        filiere: "AGROTIC",
        universite:  univs.ussein
    },
    {
        filiere: "Agroécologie",
        universite: univs.ugb
    },
    {
        filiere: "AMENAGEMENT ET GESTION DES AIRSES PROTEGEES",
        universite:  univs.ussein
    },
    {
        filiere: "AMENAGEMENT HYDROAGRICOLE, SYSTEMES D'IRRIGATION, HYDRAULIQUE ET ASSAINISSEMENT",
        universite:  univs.ussein
    },
    {
        filiere: "Analyse et Évaluation des Politiques Publiques",
        universite: univs.ucad
    },
    {
        filiere: "ANGLAIS",
        universite:  univs.unchk
    },
    {
        filiere: "Anglais",
        universite: univs.ugb
    },
    {
        filiere: "AQUACULTURE",
        universite:  univs.ussein
    },
    {
        filiere: "Aquaculture",
        universite: univs.ugb
    },
    {
        filiere: "Arts graphiques et numeriques",
        universite:  univs.unchk
    },
    {
        filiere: "Biologie, Chimie et Géosciences",
        universite: univs.ucad
    },
    {
        filiere: "COMMERCE DES PRODUITS AGRICOLES ET FORESTIERS",
        universite:  univs.ussein
    },
    {
        filiere: "Communication",
        universite: univs.ugb
    },
    {
        filiere: "Communication Digitale",
        universite:  univs.unchk
    },
    {
        filiere: "COMMUNICATION POUR LE DEVELOPPEMENT",
        universite:  univs.ussein
    },
    {
        filiere: "CONSEIL AGROSYLVOPASTORAL ET HALIEUTIQUE",
        universite:  univs.ussein
    },
    {
        filiere: "CYBER-SÉCURITÉ",
        universite:  univs.unchk
    },
    {
        filiere: "DEVELOPPEMENT ECOMMERCE - MARKETING DIGITAL",
        universite: univs.ucad
    },
    {
        filiere: "DEVELOPPEMENT LOCAL",
        universite:  univs.ussein
    },
    {
        filiere: "DEVELOPPEMENT WEB / MOBILE ET MULTIMEDIA",
        universite: univs.ucad
    },
    {
        filiere: "DROIT DE L'ENVIRONNEMENT ET DU FONCIER",
        universite:  univs.ussein
    },
    {
        filiere: "Droit et Informatique -Legaltech",
        universite:  univs.unchk
    },
    {
        filiere: "Développement et Administration d'Applications",
        universite:  univs.uadb
    },
    {
        filiere: "Economie",
        universite:  univs.uam
    },
    {
        filiere: "Economie et Gestion",
        universite:  univs.uasz
    },
    {
        filiere: "Economie et Management",
        universite:  univs.uadb
    },
    {
        filiere: "Economie numérique, développement technologique et digitalisation des affaires", universite: univs.ucad
    },
    {
        filiere: "ECONOMIE, GESTION ET FINANCE RURALE",
        universite:  univs.ussein
    },
    {
        filiere: "ENERGIES RENOUVELABLES ET FROID",
        universite:  univs.ussein
    },
    {
        filiere: "ENVIRONNEMENT ET DEVELPPEMENT DURALE",
        universite:  univs.ussein
    },
    {
        filiere: "Espagnol",
        universite: univs.ugb
    },
    {
        filiere: "FORESTERIE",
        universite:  univs.ussein
    },
    {
        filiere: "Français",
        universite: univs.ugb
    },
    {
        filiere: "GEOMATIQUE ET CLIMATOLOGIE",
        universite:  univs.ussein
    },
    {
        filiere: "Gestion",
        universite:  univs.uam
    },
    {
        filiere: "GESTION DES ADMINISTRATIONS ET DES COLLECTIVITES TERRITORIALES",
        universite:  univs.uidt
    },
    {
        filiere: "GESTION DES ENTREPRISES ET DES ADMINISTRATIONS",
        universite:  univs.uidt
    },
    {
        filiere: "GESTION DES RESSOURCES HALIEUTIQUES ET DES ECOSYSTEMES AQUATIQUES",
        universite:  univs.ussein
    },
    {
        filiere: "Gestion Durable des écosystèmes naturels",
        universite:  univs.isepb
    },
    {
        filiere: "Géographie",
        universite:  univs.uasz
    },
    {
        filiere: "Géographie",
        universite: univs.ugb
    },
    {
        filiere: "Géographie (KOLDA)",
        universite:  univs.uasz
    },
    {
        filiere: "GÉOMATIQUE",
        universite:  univs.uidt
    },
    {
        filiere: "HISTOIRE",
        universite:  univs.ussein
    },
    {
        filiere: "Histoire et Civilisations",
        universite:  univs.uasz
    },
    {
        filiere: "HOTELLERIE, RESTAURATION ET GASTRONOMIE",
        universite:  univs.ussein
    },
    {
        filiere: "INFIRMIER/INFIRMIERE",
        universite:  univs.uidt
    },
    {
        filiere: "INFIRMIER/INFIRMIERE DE BLOC OPERATOIRE",
        universite:  univs.uidt
    },
    {
        filiere: "Infographie",
        universite: univs.ugb
    },
    {
        filiere: "Informatique - Developpement d’applications (web, mobile, gaming, etc.)", universite:  univs.unchk
    },
    {
        filiere: "Ingénierie des Projets du développement",
        universite: univs.ucad
    },
    {
        filiere: "Ingénierie financière et intelligence économique des affaires",
        universite: univs.ucad
    },
    {
        filiere: "Ingénierie technique du Développement durable et Management de l’environnement",
        universite:  univs.uadb
    },
    {
        filiere: "Langues et Cultures africaines",
        universite: univs.ugb
    },
    {
        filiere: "Langues Etrangères Appliquées",
        universite:  univs.uasz
    },
    {
        filiere: "Langues Etrangères Appliquées",
        universite: univs.ugb
    },
    {
        filiere: "Langues Etrangères Appliquées",
        universite:  univs.uidt
    },
    {
        filiere: "Lettres Arts et Civilisations",
        universite:  univs.uidt
    },
    {
        filiere: "Lettres Modernes",
        universite:  univs.uasz
    },
    {
        filiere: "Licence Allemand",
        universite: univs.ucad
    },
    {
        filiere: "Licence Anglais",
        universite: univs.ucad
    },
    {
        filiere: "Licence Arabe",
        universite: univs.ucad
    },
    {
        filiere: "Licence biologie appliquée",
        universite:  univs.uasz
    },
    {
        filiere: "Licence d'Analyse Numérique et Modélisation ANUM (NB:formation délivrée en présentiel, à Dakar)", universite:  univs.unchk
    },
    {
        filiere: "Licence en Fondementaux de Physique et Chimie",
        universite:  univs.uidt
    },
    {
        filiere: "Licence en Ingénierie Informatique",
        universite:  univs.uasz
    },
    {
        filiere: "Licence en Management Informatisé des Organisations",
        universite:  univs.uidt
    },
    {
        filiere: "Licence en psychologie",
        universite: univs.ucad
    },
    {
        filiere: "Licence en Sciences de l'eau et de l'environnement",
        universite:  univs.uidt
    },
    {
        filiere: "Licence Espagnol",
        universite: univs.ucad
    },
    {
        filiere: "Licence Génétique Moléculaire et Bio-informatique (NB: formation délivrée en présentiel, à Dakar)",
        universite:  univs.unchk
    },
    {
        filiere: "Licence Géographie",
        universite: univs.ucad
    },
    {
        filiere: "Licence Histoire",
        universite: univs.ucad
    },
    {
        filiere: "Licence Informatique",
        universite:  univs.uidt
    },
    {
        filiere: "Licence Ingénierie Juridique",
        universite:  univs.uadb
    },
    {
        filiere: "Licence Italien",
        universite: univs.ucad
    },
    {
        filiere: "Licence Lettres Classiques",
        universite: univs.ucad
    },
    {
        filiere: "Licence Lettres Modernes",
        universite: univs.ucad
    },
    {
        filiere: "Licence Linguistique et Science du Langage",
        universite: univs.ucad
    },
    {
        filiere: "Licence Mathematique Informatique",
        universite:  univs.uidt
    },
    {
        filiere: "Licence Philosophie",
        universite: univs.ucad
    },
    {
        filiere: "Licence Portugais",
        universite: univs.ucad
    },
    {
        filiere: "Licence Pro en Energies renouvelables",
        universite: univs.ucad
    },
    {
        filiere: "Licence Robotique (NB: formation délivrée en présentiel, à Dakar)",
        universite:  univs.unchk
    },
    {
        filiere: "Licence Russe",
        universite: univs.ucad
    },
    {
        filiere: "Licence Science Economique et de Gestion",
        universite:  univs.uidt
    },
    {
        filiere: "Licence Sciences Economiques et Gestion",
        universite: univs.ucad
    },
    {
        filiere: "Licence Sciences infirmières",
        universite:  univs.uasz
    },
    {
        filiere: "Licence Sciences obstétricales",
        universite:  univs.uasz
    },
    {
        filiere: "Licence Sociologie",
        universite: univs.ucad
    },
    {
        filiere: "MACHINISME",
        universite:  univs.ussein
    },
    {
        filiere: "Management de Ressources Humaines",
        universite: univs.ucad
    },
    {
        filiere: "MANAGEMENT DES ENTREPRISES AGRICOLES ET AGROALIMENTAIRES",
        universite:  univs.ussein
    },
    {
        filiere: "Management des ONG",
        universite: univs.ucad
    },
    {
        filiere: "MANAGEMENT DES ORGANISATIONS PAYSANNES",
        universite:  univs.ussein
    },
    {
        filiere: "Management des Organisations publiques (KOLDA)",
        universite:  univs.uasz
    },
    {
        filiere: "Management du Tourisme et Hôtellerie",
        universite:  univs.uidt
    },
    {
        filiere: "Management Informatisé des Organisations",
        universite:  univs.uasz
    },
    {
        filiere: "MATHEMATIQUES APPLIQUEES ET INFORMATIQUE",
        universite:  univs.unchk
    },
    {
        filiere: "MATHEMATIQUES, PHYSIQUES, INFORMATIQUE-MPI",
        universite:  univs.ussein
    },
    {
        filiere: "Mathématiques Appliquées aux Sciences Sociales",
        universite:  univs.uam
    },
    {
        filiere: "Mathématiques Appliquées et Sciences Sociales",
        universite: univs.ugb
    },
    {
        filiere: "Mathématiques Physique Chimie Informatique",
        universite:  univs.uadb
    },
    {
        filiere: "Mathématiques Physique et Informatique",
        universite: univs.ugb
    },
    {
        filiere: "Mathématiques Physique Informatique",
        universite:  univs.uasz
    },
    {
        filiere: "Mathématiques, Physique, Informatique",
        universite:  univs.uam
    },
    {
        filiere: "Mathématiques, Physiques Informatique",
        universite: univs.ucad
    },
    {
        filiere: "MEDECINE",
        universite:  univs.uasz
    },
    {
        filiere: "Medecine",
        universite:  univs.uidt
    },
    {
        filiere: "Multimédia – Internet – Communication",
        universite:  univs.unchk
    },
    {
        filiere: "Médecine",
        universite: univs.ucad
    },
    {
        filiere: "Médecine",
        universite:  univs.uadb
    },
    {
        filiere: "Médecine",
        universite: univs.ugb
    },
    {
        filiere: "Méthodes Statistiques Appliquées aux Politiques publiques",
        universite: univs.ucad
    },
    {
        filiere: "Métier du rail - Technicien Supérieur en Maintenance du Matériel roulant",
        universite:  univs.isept
    },
    {
        filiere: "Métiers des Arts et de la Culture",
        universite: univs.ugb
    },
    {
        filiere: "Métiers du Patrimoine",
        universite: univs.ugb
    },
    {
        filiere: "NUTRITION HUMAINE ET DIETETIQUE",
        universite:  univs.ussein
    },
    {
        filiere: "NUTRITION HUMAINE ET SCIENCES DES ALIMENTS",
        universite:  univs.ussein
    },
    {
        filiere: "Odontologie",
        universite: univs.ucad
    },
    {
        filiere: "PECHE",
        universite:  univs.ussein
    },
    {
        filiere: "Pharmacie",
        universite: univs.ucad
    },
    {
        filiere: "Pharmacie",
        universite:  univs.uidt
    },
    {
        filiere: "Physique Chimie",
        universite:  univs.uasz
    },
    {
        filiere: "Physique Chimie Science de la Matière",
        universite: univs.ucad
    },
    {
        filiere: "PRODUCTION TOURISTIQUE ET MANAGEMENT CULTUREL",
        universite:  univs.ussein
    },
    {
        filiere: "Production Végétale",
        universite:  univs.isepb
    },
    {
        filiere: "Productions Animales et Elevage",
        universite: univs.ugb
    },
    {
        filiere: "PRODUCTIONS DES SEMENCES ET PLANTES",
        universite:  univs.ussein
    },
    {
        filiere: "PRODUCTIONS HORTICOLES ET TRAVAUX PAYSAGERS",
        universite:  univs.ussein
    },
    {
        filiere: "Productions Végétales et Agronomie",
        universite: univs.ugb
    },
    {
        filiere: "PROTECTION PHYTOSANITAIRE",
        universite:  univs.ussein
    },
    {
        filiere: "QUALITE DES DENREES ALIMENTAIRES D'ORIGINE ANIMALE",
        universite:  univs.ussein
    },
    {
        filiere: "QUALITE HYGIENE SECURITE ENVIRONNEMENT",
        universite:  univs.uidt
    },
    {
        filiere: "SAGE FEMME",
        universite:  univs.uidt
    },
    {
        filiere: "Santé Communautaire",
        universite:  univs.uadb
    },
    {
        filiere: "Science Politique",
        universite:  univs.unchk
    },
    {
        filiere: "Science Politique",
        universite: univs.ugb
    },
    {
        filiere: "Sciences de Gestion",
        universite:  univs.uadb
    },
    {
        filiere: "Sciences de l'éducation",
        universite: univs.ugb
    },
    {
        filiere: "Sciences de la Mer et du Littoral",
        universite:  univs.uam
    },
    {
        filiere: "Sciences de l’Information et de la Communication",
        universite:  univs.uam
    },
    {
        filiere: "SCIENCES ECONOMIQUES ET DE GESTION",
        universite:  univs.unchk
    },
    {
        filiere: "Sciences Economiques et Gestion",
        universite: univs.ugb
    },
    {
        filiere: "Sciences Infirmières  (KOLDA)",
        universite:  univs.uasz
    },
    {
        filiere: "SCIENCES JURIDIQUES",
        universite:  univs.unchk
    },
    {
        filiere: "Sciences Juridiques",
        universite:  univs.uasz
    },
    {
        filiere: "Sciences Juridiques",
        universite: univs.ucad
    },
    {
        filiere: "Sciences Juridiques",
        universite: univs.ugb
    },
    {
        filiere: "Sciences Obstétricales (KOLDA)",
        universite:  univs.uasz
    },
    {
        filiere: "Sciences Politique",
        universite: univs.ucad
    },
    {
        filiere: "Sciences Sociales des Religions",
        universite: univs.ugb
    },
    {
        filiere: "SOCIO-ANTHROPOLOGIE DU DEVELOPPEMENT RURAL",
        universite:  univs.ussein
    },
    {
        filiere: "SOCIOLOGIE",
        universite:  univs.unchk
    },
    {
        filiere: "Sociologie",
        universite:  univs.uasz
    },
    {
        filiere: "Sociologie",
        universite: univs.ugb
    },
    {
        filiere: "Systèmes, Réseaux et Télécoms",
        universite:  univs.uadb
    },
    {
        filiere: "Technicien Superieur en Conseil Agricole",
        universite:  univs.isept
    },
    {
        filiere: "Technicien Superieur en Developpement Web et Mobile",
        universite:  univs.isept
    },
    {
        filiere: "Technicien Suprieur en Maintenance des quipements de Transformation Agroalimentaire", universite: univs.isepr
    },
    {
        filiere: "Technicien Suprieur en Production Avicole",
        universite: univs.isepr
    },
    {
        filiere: "Technicien Suprieur en Production Horticole",
        universite: univs.isepr
    },
    {
        filiere: "Technicien Supérieur  en Administration de Bases de Données",
        universite:  univs.isepatd
    },
    {
        filiere: "Technicien Supérieur Développement Front - End",
        universite:  univs.isepatd
    },
    {
        filiere: "Technicien Supérieur Electricité - Electronique Automobile",
        universite:  univs.isepatd
    },
    {
        filiere: "Technicien Supérieur en Administration des Systèmes et Réseaux Informatiques",
        universite:  univs.isept
    },
    {
        filiere: "Technicien Supérieur en Agro-Ecologie Végétale",
        universite:  univs.isepmb
    },
    {
        filiere: "Technicien Supérieur en Analyse de Performance Digitale",
        universite:  univs.isepatd
    },
    {
        filiere: "Technicien Supérieur en Arts graphique et numérique",
        universite:  univs.isept
    },
    {
        filiere: "Technicien Supérieur en Carrosserie et Peinture Automobile",
        universite:  univs.isepatd
    },
    {
        filiere: "Technicien Supérieur en Conseil info-énergie",
        universite:  univs.isept
    },
    {
        filiere: "Technicien Supérieur en Contrôle Technique et Entretien des Bâtiments et Travaux Publics",
        universite:  univs.isept
    },
    {
        filiere: "Technicien Supérieur en Création et Management de Produits Multimédia",
        universite:  univs.isept
    },
    {
        filiere: "Technicien Supérieur en Développement Back - End",
        universite:  univs.isepatd
    },
    {
        filiere: "Technicien Supérieur en Développement Territorial",
        universite:  univs.isepmb
    },
    {
        filiere: "Technicien Supérieur en Eco-Construction",
        universite:  univs.isepmb
    },
    {
        filiere: "Technicien Supérieur en Electromécanique Automobile",
        universite:  univs.isepatd
    },
    {
        filiere: "Technicien Supérieur en Energies renouvelables",
        universite:  univs.isept
    },
    {
        filiere: "Technicien Supérieur en Entrepreneuriat Agricole",
        universite:  univs.isept
    },
    {
        filiere: "Technicien Supérieur en Exploitation Agricole",
        universite:  univs.isept
    },
    {
        filiere: "Technicien Supérieur en Froid Climatisation Automobile et Industriel",
        universite:  univs.isepatd
    },
    {
        filiere: "Technicien Supérieur en Gestion des Activités de Contact Humain",
        universite:  univs.isept
    },
    {
        filiere: "Technicien Supérieur en Gestion des Affaires administratives et financières",
        universite:  univs.isept
    },
    {
        filiere: "Technicien supérieur en Gestion des Infrastructures  et Production Aquacoles",
        universite:  univs.isepma
    },
    {
        filiere: "Technicien Supérieur en Gestion et Maintenance des Ouvrages d’Assainissement",
        universite:  univs.isept
    },
    {
        filiere: "Technicien Supérieur en Gestion Immobilière",
        universite:  univs.isept
    },
    {
        filiere: "Technicien Supérieur en Installation de Réseaux d’Irrigation et Sanitaire",
        universite:  univs.isepma
    },
    {
        filiere: "Technicien supérieur en Installation solaire photovoltaïque",
        universite:  univs.isepma
    },
    {
        filiere: "Technicien Supérieur en Irrigation et Gestion de l'eau",
        universite: univs.isepr
    },
    {
        filiere: "Technicien Supérieur en Journalisme Reporter d’Images",
        universite:  univs.isept
    },
    {
        filiere: "Technicien supérieur en Logistique et Distribution des produits agricoles et agroalimentaires",
        universite: univs.isepr
    },
    {
        filiere: "Technicien Supérieur en Maintenance des agroéquipements",
        universite: univs.isepr
    },
    {
        filiere: "Technicien Supérieur en Management de Produits Touristiques",
        universite:  univs.isept
    },
    {
        filiere: "Technicien Supérieur en Management des activités de loisirs",
        universite:  univs.isept
    },
    {
        filiere: "Technicien supérieur en Management des Métiers de l'alimentation",
        universite:  univs.isept
    },
    {
        filiere: "Technicien Supérieur en Management des Produits et Services Culturels",
        universite:  univs.isept
    },
    {
        filiere: "Technicien Supérieur en Management du Transport Ferroviaire",
        universite:  univs.isept
    },
    {
        filiere: "Technicien Supérieur en Production Agricole",
        universite: univs.isepr
    },
    {
        filiere: "Technicien Supérieur en Production animale",
        universite:  univs.isept
    },
    {
        filiere: "Technicien Supérieur en Production Cinématographique et Audiovisuelle",
        universite:  univs.isept
    },
    {
        filiere: "Technicien supérieur en Production de Lait et de Viande",
        universite:  univs.isepma
    },
    {
        filiere: "Technicien Supérieur en Production de Semences et Pépinères",
        universite:  univs.isepma
    },
    {
        filiere: "Technicien Supérieur en Production de Viande et Lait",
        universite: univs.isepr
    },
    {
        filiere: "Technicien Supérieur en Productions Horticoles",
        universite:  univs.isepma
    },
    {
        filiere: "Technicien Supérieur en Réseaux et Télécommunications",
        universite:  univs.isept
    },
    {
        filiere: "Technicien Supérieur en Réseaux, Sécurité et Internet des Objets",
        universite:  univs.isepatd
    },
    {
        filiere: "Technicien Supérieur en Signalisation, Energie et Télécommunication",
        universite:  univs.isept
    },
    {
        filiere: "Technicien Supérieur en Suivi Technique et Gestion des Ouvrages Hydrauliques",
        universite:  univs.isept
    },
    {
        filiere: "Technicien Supérieur en Systèmes, Sécurité et Cloud",
        universite:  univs.isepatd
    },
    {
        filiere: "Technicien supérieur en Technologie de Transformation et de Conservation de Produits Agroalimentaires",
        universite:  univs.isepma
    },
    {
        filiere: "Technicien Supérieur en transformation et conservation des produits agricoles et agroalimentaires",
        universite: univs.isepr
    },
    {
        filiere: "Technicien Supérieur en Transport Logistique et Mobilité Urbaine",
        universite:  univs.isept
    },
    {
        filiere: "Technicien supérieur Géologue Prospecteur",
        universite:  univs.isepma
    },
    {
        filiere: "Technologies Agroalimentaires",
        universite: univs.ugb
    },
    {
        filiere: "Tourisme",
        universite:  univs.uasz
    },
    {
        filiere: "TRANSFORMATION AGROALIMENTAIRE",
        universite:  univs.ussein
    },
    {
        filiere: "TRANSFORMATION DES  AGRORESSOURCES",
        universite:  univs.ussein
    },
    {
        filiere: "TS- Energies Renouvelables et Production Durable",
        universite:  univs.isepb
    },
    {
        filiere: "TS- Gestion d'Exploitation Agroforestière",
        universite:  univs.isepb
    },
    {
        filiere: "TS- Gestion d'Unité de Transformation Agroalimentaire",
        universite:  univs.isepb
    },
    {
        filiere: "TS- Production Animale",
        universite:  univs.isepb
    },
    {
        filiere: "ZOOTECHNIE ET SANTE ANIMALE",
        universite:  univs.ussein
    }
]

