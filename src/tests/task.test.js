import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import taskData from './user/tastData';

chai.use(chaiHttp);
chai.should();
const { task, secondTask } = taskData;
describe('taskstests', () => {
  it('task created successfully', (done) => {
    chai.request(app).post('/api/tasks')
      .send(task).end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.an('object');
        done();
      });
  });
  it('task creation should return error ', (done) => {
    chai.request(app).post('/api/tasks')
      .send(secondTask).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an('object');
        done();
      });
  });
});
