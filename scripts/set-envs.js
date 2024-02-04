const { writeFileSync, mkdirSync } = require('fs');
require('dotenv').config();

const targetPath = './src/environments/environments.ts'

const envFileContent = `
export const environment = {
    url_api: "${ process.env['URL_API']}",
};
`;

mkdirSync('./src/environments', { recursive: true});

writeFileSync( targetPath, envFileContent );