module.exports = {
  sidebar: {
    "Visión general": ["overview"],
    "Conceptos importantes": ['ssi-concepts'],
    Producto: ['aidi-definiciones', 'producto-emisores',],
    "Contribuciones": ['contribuciones', 'code-fo-conduct'],
    Developers: [
      {
        "Solución": [
          "arquitectura-overview",
          {
            "Descripción técnica": [
              "arquitectura-mouro",
              "arquitectura-issuer",
              "arquitectura-server",
              "arquitectura-ronda",
              "delegation",
            ]
          },
          "uport",
        ]
      },

      { "Troubleshooting": ["troubleshooting", "troubleshooting-rsk", 'revokation'] },
      { "Multiblockchain": ['multiblockchain', 'multiblockchain-scripts'] }
    ],
  },
};
