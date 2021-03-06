'use strict';

var series = require('../src/series');

module.exports = function(program, next) {
  program
    .command('deploy <source> <destination>')
    .description('Deploy a project to another server. Source and destination may be the project name on form.io or the full url to any project on a server such as https://test.form.io or https://form.io/project/{projectId}. Source may also be a local json file.')
    .option('--src-key [key]', 'The API Key of the source project.')
    .option('--src-username [username]', 'The source username to authenticate with')
    .option('--src-password [password]', 'The source password')
    .option('--dst-key [key]', 'The API Key of the destination project.')
    .option('--dst-username [username]', 'The destination username to authenticate with')
    .option('--dst-password [password]', 'The destination password')
    .action(series([
      require('../src/deploy')
    ], next));
};
