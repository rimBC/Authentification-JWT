Application web d'authentification développée dans le cadre d'un test technique.
  Frontend **React** + backend **Node.js / Express** avec authentification sécurisée par **JWT** (JSON Web Tokens).

  ## Fonctionnalités

  - Inscription d'un nouvel utilisateur (register)
  - Connexion / déconnexion (login / logout)
  - Authentification par **JWT** stocké côté client
  - Routes protégées accessibles uniquement avec un token valide
  - Hachage des mots de passe (bcrypt)
  - Gestion des erreurs et validation des entrées

  ## 🛠️  Stack technique

  | Côté | Technologies |
  |------|-------------|
  | Frontend | React, React Router, Axios |
  | Backend | Node.js |
  | Auth | JSON Web Token (jsonwebtoken), bcrypt |
  | Base de données | MongoDB |

  ## Prérequis

  - Node.js ≥ 18 et npm
  - Une instance MongoDB accessible

  ## Installation & lancement

  ```bash
  # 1. Cloner le dépôt
  git clone «https://github.com/rimBC/club.git»
  cd club
  ```

  ### Backend

  ```bash
  cd server
  npm install
  npm run dev        
  ```

  ### Frontend

  ```bash
  cd client
  npm install
  npm start          # démarre React sur http://localhost:3000
  ```

  ## Variables d'environnement

  Créer un fichier `.env` :

  ```env
MONGO_URL="mongodb+srv://codex_Thecnical_test_user:hWVbXB2ZVmUKMZdz@cluster0.1we8cie.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
JWT_SECRET="this0is0the0codex0technical0assesment0"
REFRESH_SECRET="fsgsaasghfsa87a6s87sa6"
ACCESS_SECRET="dsjgjhghsd76d87sd687687687hgsdjgsjdh"
  ```

  ## 📡 Endpoints de l'API

  | Méthode | Route | Description |
  |---------|-------|-------------|
  | `POST` | `/api/auth/register` | Créer un compte |
  | `POST` | `/api/auth/login` | Se connecter, retourne un JWT |
  | `GET`  | `/api/auth/me` | Récupérer l'utilisateur courant |


  ## Sécurité — notes

  - Les mots de passe sont hachés avec **bcrypt** avant stockage.
  - Le **JWT** est signé avec une clé secrète et expire après une durée définie.
  - Un middleware vérifie le token sur chaque route protégée.
