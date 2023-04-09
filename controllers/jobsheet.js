const { where } = require("sequelize");
const db = require("../models");
const Quiz = db.quizzes;

exports.submitOne = async (req,res) => {
    //data yang didapatkan dari inputan oleh pengguna 
    const jobsheet = {
        quizId: req.body.quizId,
        answer: req.body.answer,
    };

    try {
        var quiz = await Quiz.findOne({
            where: {
                id: req.body.quizId
            }
        });

        if (req.body.answer == quiz.key) {
            res.status(200).json({
                "message": "benar"
            })
        } else {
            res.status(200).json({
                "message": `jawaban benar adalah ${quiz.key}`
            })
        } 
    }catch (e) {
        res.status(500).json({message: e.message });
            

    }
};