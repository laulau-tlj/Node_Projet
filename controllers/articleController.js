//Je fais un import de mon model article et je le place dans une variable
const {ArticleModel, } = require('../models/article')

module.exports = {
    //Création de nouveau article
    createArticle: (req, res) => {
        //Je crée une variable qui va contenir les données créées
        const article = new ArticleModel({
            title: req.body.title,
            description: req.body.description

        })

        //Je sauvegarde les données de la variable article
        article.save((err, article) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            res.status(200).json({
                message: "success", article
            })
        })
    },

    //je récupère les articles
    getArticles: (req, res) => {
        //Je récupère tous les articles
        ArticleModel.find((err, articles) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                if (!articles) {
                    res.status(404).json({
                        "articles": []
                    })
                } else {
                    console.log(articles)
                    res.render('pages/index', {
                        articles: articles
                    })
                }
                
            }
        })
        // getArticles()
    },
    
}