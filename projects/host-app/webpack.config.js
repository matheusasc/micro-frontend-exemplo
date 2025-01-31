const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'host-app',

  // exposes: {
  //   './Component': './projects/host-app/src/app/app.component.ts',
  // },

  remotes: {
    'mfe-app': 'mfeApp@http://localhost:4300/remoteEntry.js',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },


});
