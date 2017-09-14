/* global chance */
const DataGenerator = {};
const methods = ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'HEAD'];
const methodsSize = methods.length - 1;

var LAST_TIME = Date.now();

DataGenerator.createProjectObject = function() {
  var project = {
    _id: chance.string({length: 12}),
    name: chance.sentence({words: 2}),
    order: 0,
    description: chance.paragraph()
  };
  return project;
};

DataGenerator.genRequestObject = function(projectData) {
  var methodIndex = chance.integer({min: 0, max: methodsSize});
  var url = chance.url();
  var name = chance.sentence({words: 2});
  LAST_TIME -= chance.integer({min: 1.8e+6, max: 8.64e+7});
  var method = methods[methodIndex];
  var id = encodeURIComponent(name) + '/' + encodeURIComponent(url) + '/' + method;
  if (projectData) {
    id += '/' + projectData;
  }
  var obj = {
    _id: id,
    method: method,
    url: url,
    headers: 'x-test: true',
    created: LAST_TIME,
    updated: LAST_TIME,
    name: name
  };
  if (projectData) {
    obj.projectOrder = chance.integer({min: 0, max: 10});
    obj.legacyProject = projectData;
  }
  return obj;
};

DataGenerator.generateRequests = function(projects, size) {
  size = size || 25;
  var result = [];
  const projectsSize = projects.length - 1;
  for (var i = 0; i < size; i++) {
    var projectsIndex = chance.integer({min: 0, max: projectsSize});
    let projectData = projects[projectsIndex];
    result.push(DataGenerator.genRequestObject(projectData._id));
  }
  return result;
};

DataGenerator.generateProjects = function(size) {
  size = size || 5;
  var result = [];
  for (var i = 0; i < size; i++) {
    result.push(DataGenerator.createProjectObject());
  }
  return result;
};

DataGenerator.generateData = function(size) {
  var projects = DataGenerator.generateProjects();
  var requests = DataGenerator.generateRequests(projects, size);
  var savedDb = new PouchDB('saved-requests');
  var projectsDb = new PouchDB('legacy-projects');
  return projectsDb.bulkDocs(projects)
  .then(() => savedDb.bulkDocs(requests));
};

DataGenerator.destroyData = function() {
  var savedDb = new PouchDB('saved-requests');
  var projectsDb = new PouchDB('legacy-projects');
  return savedDb.destroy().then(() => projectsDb.destroy());
};
