import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import projectData from './user/projectData';

chai.use(chaiHttp);
chai.should();
const { project, secondProject } = projectData;
describe('project tests', () => {
  it('project created successfully', (done) => {
    chai.request(app).post('/api/projects')
      .send(project).end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.an('object');
        done();
      });
  });
  it('project creation should return error ', (done) => {
    chai.request(app).post('/api/projects')
      .send(secondProject).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an('object');
        done();
      });
  });
});
