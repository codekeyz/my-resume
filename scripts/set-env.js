const fs = require('fs');

const env = process.env.ENVIRONMENT || 'test';

const targetPath = `./src/environments/environment.${env}.ts`;

const envConfigFile = `export const environment = {
     production: ${env === 'prod'},
     apiKey: "${process.env.APIKEY}",
     authDomain: "${process.env.AUTHDOMAIN}",
     databaseURL: "${process.env.DATABASEURL}",
     projectId: "${process.env.PROJECTID}",
     storageBucket: "",
     messagingSenderId: "${process.env.MESSAGINGSENDERID}",
     appId: "${process.env.APPID}"
   };`;

fs.writeFile(targetPath, envConfigFile, function(err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});
