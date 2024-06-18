"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envs = {
    'homologacao': 'https://api-homologacao.com',
    'desenvolvimento': 'https://api-desenvolvimento.com',
    'producao': 'https://api-producao.com'
};
const apiUrl = envs.desenvolvimento; // Defina o valor padrão para homologação
exports.default = apiUrl;
