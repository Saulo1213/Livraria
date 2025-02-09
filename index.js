const express = require('express');
const exphbs = require('express-handlebars');
const livroRoutes = require('./routes/livroRoutes'); 
const sequelize = require('./config/database');
const router = require('./routes/livroRoutes');
const methodOverride = require('method-override')

const app = express();
const port = 3000;
// Configurar o Handlebars
app.engine ('handlebars', exphbs.engine());

app.set('view engine', 'handlebars');

// Middleware para processar dados do formulário app.use (express.urlencoded({ extended: true }));



    // Middleware para processar dados do formulário
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // Adicionar method-override

// Rotas
app.use('/livros', livroRoutes);

app.get('/', (req, res) => {
    res.render('dashboard');
    });
    
// Iniciar o servidor
async function iniciarServidor() {
    try {
        await sequelize.sync ({force:true});
        console.log('Conexão com o banco de dados estabelecida com sucesso!');


app.listen (port, () => {
    console.log(`Servidor rodando em http://localhost: ${port}`);
});
} catch (error) {

console.error('Erro ao conectar ao banco de dados: ', error);
}
}

iniciarServidor();


