
const envs = {
  'homologacao': 'https://api-homologacao.com',
   'desenvolvimento': 'https://api-desenvolvimento.com',
   'producao': 'https://api-producao.com'
 };

const apiUrl = envs.desenvolvimento; // Defina o valor padrão para homologação

export default apiUrl;