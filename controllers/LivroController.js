const Livro = require('../models/Livro');

class LivroController {
    async listar(req, res) {
        const livros = await Livro.findAll ({raw:true});
        res.render('livros/listar', { livros });
    }
   async formularioCadastro(req, res) {
        res.render('livros/cadastrar');
    }

    async cadastrar(req, res) {
        const { titulo, autor, ano } = reg.body;
        await Livro.create({ titulo, autor, ano });
        res.redirect('/livros');
    }
    
    async formularioEditar(req, res) {
        const livro = await Livro.findByPk(req.params.id);
        res.render('livros/editar', { livro });
        }
        
        async editar(req, res) {
        const { titulo, autor, ano } = req.body;
        await Livro.update({ titulo, autor, ano }, { where: { id:
        req.params.id } });
        res.redirect('/livros');
        }
        async remover(req, res) {
        await Livro.destroy({ where: { id: req.params.id } });
        res.redirect('/livros');
        }
        }
        module.exports = new LivroController();
