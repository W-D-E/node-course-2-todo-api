const expect =  require('expect');
const request = require('supertest');

//requiring the server.js to test the express routes with supertest ( ici request )
const {app} = require('./../server');
//requiring the Todo model
const {Todo} = require('./../models/todo');

//dummy todos array
const todos = [{
  text: 'First todo',
}, {
  text: 'Second todo'
}];

//On utilise BeforeEach to pour s'assurer que certaine choses soits
//bien en place avant CHAQUE 'it' tests
// beforeEach((done) => {
//   //supprime tous les docs de todos
//   Todo.remove({}).then(() => done());
// });
//modifiée pour route GET /todos
beforeEach((done) => {
  //supprime tous les docs de todos
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});
//on démarre chaque test avec zéros todos

describe('POST /todos', () => {
  //this is an asynchronous test. on doit spécifier 'done' sinon le test
  //ne fonctionnera pas comme prévu
  it('should create a new todo', (done) => {
    var text = 'Text of the todo';

    request(app)
    .post('/todos')
    .send({text})//envoi les données avec le body et tranformera l'objet en JSON automatiquement
    .expect(200)
    .expect((res) => {
      expect(res.body.text).toBe(text);
    })
    .end((err, res) => {
      if(err) {
        return done(err);
      }

      Todo.find({text}).then((todos) => {
        expect(todos.length).toBe(1);//if either of these fail the test is still going to pass
        expect(todos[0].text).toBe(text);//if either of these fail the test is still going to pass
        done();
        //to catch any error that happends in the callback
      }).catch((e) => {
        done(e);
      });
    });
  });

  it('should not create todo with invalid body data', (done) => {

    var text = '';
    request(app)
    .post('/todos')
    .send({text})
    .expect(400)
    .end((err, res) => {
      if (err) {
        return done(err);
      }

      Todo.find().then((todos) => {
        expect(todos.length).toBe(2);
        done();
      }).catch((e) => {
        done(e);
      });
    });
  });
});

describe('GET /todos', () => {

  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});
