const { Octokit } = require("@octokit/rest");
require('dotenv').config();
const octokit = new Octokit({ 
    auth: process.env.GITHUB_TOKEN,
    baseUrl: 'https://api.github.com',
    log: {
        debug: () => {},
        info: () => {},
        warn: console.warn,
        error: console.error
    },
    request: {
        agent: undefined,
        fetch: undefined,
        timeout: 0
    }
});
octokit.rest.repos.listCommits({
    owner : "mamutjan0909",
    repo : "engineering-training",
  }).then(resp => console.log(resp));
const jiraLinks = [
  'https://totalwine.atlassian.net/browse/TT-2',
  'https://totalwine.atlassian.net/browse/TT-16',
  'https://totalwine.atlassian.net/browse/TT-17',
  'https://totalwine.atlassian.net/browse/TT-18',
  'https://totalwine.atlassian.net/browse/TT-19',
];

const jiraTitles = [
  'Create a public repository under your GitHub account',
  'Create a new script file, and import it into index.html and add a console log',
  'JavaScript: Variables',
  'JavaScript: Event Listeners - Add Toggle Button Inside of Modal',
  'JavaScript: Functions - Write a function to toggle hidden class on modal',
];

const jiraTemplate = { icon: 'bi bi-check-circle-fill' };

const errorJiraTemplate = { icon: 'bi bi-x-circle' };

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getIcon() {
  let rNum = getRandomInt(3);
  return rNum >= 1 ? jiraTemplate : errorJiraTemplate;
}

class DataHandler {
  constructor(links, titles) {
    this.links = links;
    this.titles = titles;
    this.jirasObject = [];
    this.createJiraObject();
  }
  createJiraObject() {
    for (let i = 0; i < this.titles.length; i++) {
      let icon = getIcon();
      this.jirasObject.push({
        link: this.links[i],
        title: this.titles[i],
        ...icon,
      });
    }
  }
}

const dataHandler = new DataHandler(jiraLinks, jiraTitles);

module.exports = dataHandler;
