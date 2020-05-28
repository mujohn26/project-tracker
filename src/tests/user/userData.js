import faker from 'faker';


const userData = {
  user: {
    name: faker.name.firstName(),
    username: faker.name.lastName(),
    email: 'user123@gmail.com',
  },
  secondUser: {
    name: faker.name.firstName(),
    username: faker.name.lastName()
  }
};
export default userData;
