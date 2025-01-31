const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe-app',

  filename: "remoteEntry.js",

  exposes: {
    './ProfileModule': './projects/mfe-app/src/app/profile/profile.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  }, 

});
