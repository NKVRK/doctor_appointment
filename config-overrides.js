const { override, disableEsLint, addWebpackModuleRule } = require('customize-cra');

     module.exports = override(
       // Disable source map loading for react-datepicker
       (config) => {
         config.module.rules.forEach((rule) => {
           if (String(rule.test) === String(/\.(js|mjs|jsx|ts|tsx)$/)) {
             const sourceMapLoader = rule.use.find((loader) => loader.loader && loader.loader.includes('source-map-loader'));
             if (sourceMapLoader) {
               sourceMapLoader.options = {
                 ...sourceMapLoader.options,
                 filterSourceMap: {
                   include: (sourcePath) => !sourcePath.includes('react-datepicker'),
                 },
               };
             }
           }
         });
         return config;
       }
     );