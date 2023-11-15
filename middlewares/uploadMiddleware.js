// Importez le module multer qui simplifie le traitement des fichiers dans les requêtes HTTP
const multer = require("multer");

// Configurez le stockage des fichiers avec Multer
const storage = multer.diskStorage({
  //   // La fonction destination spécifie le dossier où les fichiers téléchargés seront enregistrés
  destination: function (req, file, cb) {
    cb(null, "../public/images");
  },
  //   // La fonction filename spécifie le nom du fichier lorsqu'il est enregistré

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Créez une instance de Multer en passant l'objet de configuration du stockage
const uploadMiddleware = multer({ storage: storage });

// Exportez l'instance de Multer configurée pour pouvoir l'utiliser dans d'autres fichiers
module.exports = { uploadMiddleware };
