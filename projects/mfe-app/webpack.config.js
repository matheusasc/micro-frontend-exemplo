const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({


    output: {
      module: true, // Habilita suporte a módulos ES
    },
    experiments: {
      outputModule: true, // Habilita suporte a módulos ES
    },
  
  name: 'mfe-app',

  filename: "remoteEntry.js",

  exposes: {
    './ProfileModule': './projects/mfe-app/src/app/profile/profile.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  }, 

});
