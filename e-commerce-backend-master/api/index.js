const app = require('../server');

// Cette fonction est appelée pour gérer toutes les requêtes HTTP
module.exports = (req, res) => {
  app(req, res); // Appelle l'instance Express pour traiter la requête
};
