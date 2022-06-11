describe('Login e registro de usuários no alura pic', ()=>{
    beforeEach(()=>{
        cy.visit('https://alura-fotos.herokuapp.com')
    })
    it('verificar mensagens validacao',()=>{
        cy.registro()
        cy.contains('ap-vmessage','Email is required!').should('be.visible')
        cy.contains('button','Register').click()
        cy.contains('ap-vmessage','Full name is required!').should('be.visible')
        cy.contains('ap-vmessage','User name is required!').should('be.visible')
        cy.contains('ap-vmessage','Password is required!').should('be.visible')
    })
    it('verificar mensagens de email',()=>{
        cy.registro()
        cy.get('input[formcontrolname="email"]').type('alisson')
        cy.contains('ap-vmessage','Invalid e-mail').should('be.visible')
        
    })
    it('verificar mensagens de senha com menos de 8 caracteres',()=>{
        cy.contains('a','Register now').click()
        cy.get('input[formcontrolname="password"]').type('123')
        cy.contains('button','Register').click()
        cy.contains('ap-vmessage','Mininum length is 8').should('be.visible')
        
    })
    it('Verificar mensagem de nome com caixa baixa',()=>{
        cy.contains('a','Register now').click()
        cy.get('input[formcontrolname="userName"]').type('TESTE')
        cy.contains('button','Register').click()
        cy.contains('ap-vmessage','Must be lower case').should('be.visible')
    })
    it('Verifica login de usuário valido',()=>{
        cy.login('flavio','123')
        cy.contains('a','(Logout)').should('be.visible')
        })
    it('Verifica login de usuário invalido',()=>{
        cy.login('alisson', '1234')
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Invalid user name or password')
        })
    })

    const usuarios = require('../../fixtures/user.json')
    usuarios.forEach(usuario =>{
        it.only('Verificar cadastro do usuário',()=>{
            cy.cadastrar(
                usuario.email,
                usuario.fullName,
                usuario.userName,
                usuario.password
            )
        })
    })
})