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
    //descrição do caso de testes
    test('acessa a rota da home', async () => {
       //qual a rota que ele deve acessar e qual requisição deve fazer
       const response = await request(server).get('/');
       //qual o status esperado 
       expect(response.status).toEqual(200);
       //se todos esses passos passarem, verifica o conteúdo exibido dentro desta rota
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