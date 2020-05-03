//axios request
const axios = require('axios');

async function gitProfile(userName) {
  const { data } = await axios.get(`https://api.github.com/users/${userName}`);
}
gitProfile();

async function gitEmail(userName) {
  const { data } = await axios.get(`https://api.gihub.com/users/${userName}`);

 };

 function badgeChange(license){

 };
function generateMarkdown(data) {
    return `
  # ${data.title}
  
  `;
  }
  
  module.exports = generateMarkdown;
  