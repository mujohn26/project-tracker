import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import userData from './user/userData';
import db from '../database/models';

chai.use(chaiHttp);
chai.should();
const { user, secondUser } = userData;
describe('user tests', () => {
  before(async () => {
    await db.user.create(secondUser);
  });
  it('user created successfully', (done) => {
    chai.request(app).post('/api/users')
      .send(user).end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.an('object');
        done();
      });
  });
  it('user should return error ', (done) => {
    chai.request(app).post('/api/users')
      .send(secondUser).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an('object');
        done();
      });
  });
  it('get users', (done) => {
    chai.request(app).get('/api/users/?filterBy=surname&order=ASC&page=1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        chai.expect(res.body.message).to.eq('user returned successfully');
        done();
      });
  });
});
