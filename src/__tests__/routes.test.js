const request = require('supertest')
const server = require('../app')

beforeAll(async ()=>{
    console.log("Iniciando Tests")
})

afterAll(() => {
    server.close();
    console.log('servidor fechado');
});



describe('inicio dos testes', () => {
    test('acessa a rota da home', async () => {
       const response = await request(server).get('/');
       expect(response.status).toEqual(200);
       expect(response.text).toContain('Rota Padrão');
 
    });
 
    test('acessa a rota dos produtos', async () => {
       const response = await request(server).get('/produtos');
       expect(response.text).toContain('Rota Produtos');
    });
 
    test('acessa a rota dos users', async () => {
       const response = await request(server).get('/users');
       expect(response.text).toContain('Rota Usuários');
 
    });

})