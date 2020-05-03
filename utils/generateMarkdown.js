//axios request
const axios = require('axios');

async function gitProfile(userName) {
  const { data } = await axios.get(`https://api.github.com/users/${userName}`);
  if(data.avatar_URL != null){
    return `<img src="https://avatars1.githubusercontent.com/u/${data.id}?v=4" style="border-radius: 16px" width="30"/>`;
  }
}

// async function gitEmail(userName) {
//   const { data } = await axios.get(`https://api.gihub.com/users/${userName}`);

//  };
// gitEmail();

 async function badgeChange(license){
  switch (license) {
    case "MIT":
      return "[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
    case "APACHE 2.0":
      return "[![License](https://img.shields.io/badge/License-APACHE%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[![License](https://img.shields.io/badge/License-GPL%203.0-purple.svg)](https://opensource.org/licenses/GPL-3.0)";
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD%203-black.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "None":
      return "[![License](https://img.shields.io/badge/License-None-Red.svg)]";
  }


 };
async function generateMarkdown(data) {
    return `
    ## ${data.title}
    
    ## Description 
    
    ${data.description}

    ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    *   [Github Profile Picture](#githubprofile)
    *   [Email](#email)

    ## Installation

    ${data.installation}

    ## Usage

    ${data.uage}

    ## License

      ${badgeChange(data.license)}

    ## Contributing

    ${data.contributing}

    ## Tests

    ${data.tests}

    ## Questions
      ${data.userName}

      ## Github Profile Picture

      ${await gitProfile(data.userName)}

      ## Github Email

      <${data.userEmail}>


  `;
  }
  
  module.exports = generateMarkdown;
  