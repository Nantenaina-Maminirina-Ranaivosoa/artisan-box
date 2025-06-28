const express = require('express');
const app = express();
const PORT = 5000;

// (endpoint) pour tester l'API
app.get('/api', (req, res) => {
  res.json({ message: "Bonjour" });
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});