import faker from 'faker';


const projectData = {
  project: {
    name: faker.name.firstName(),
    body: 'project tracking application',
    status: 'active',
  },
  secondProject: {
    name: faker.name.firstName(),
    body: 'project tracking'
  }
};
export default projectData;
