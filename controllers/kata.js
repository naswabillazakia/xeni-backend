const db = require("../models");
const Kata = db.kata;
exports.create = async (req,res) => {
    try {
        const data = await Kata.create(req.body)
        res.json({
            message: "kata sukses terbuat ",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}
exports.getAll = async(req,res) => {
    try{
        const kata = await Kata.findAll()
        res.json({
            message: "Kata retrieved successfully .",
            data : kata,
        });
    } catch (error){
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};
   exports.update = async (req,res) => {
    const id = req.params.id
    try {
        const kata = await Kata.findByPk(id, {rejectOnEmpty: true})
        kata.update(req.body, {
            where: {id}
        })
        res.json({
            message: "kata update successfully.",
            data: kata,
        });
    } catch (error){
        res.status (500).json({
            message: error.message || "some error occurred while retrieving quiz",
        data: null,
        });
    }
}
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const kata= await Kata.findByPk(id, { rejectOnEmpty: true})
        kata.destroy ()

        res.json({
            message: "Quiz deleted successfully"
        });
    } catch (error){
        res.status(500).json({
            message: error.message || "some error occurred while retrieving quiz",
            data : null,
        });

    }
}
exports.findOne = async (req, res)=> {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id,{ rejectOnEmpty: true})
        res.json({
            message : `Quizz retrieved successfully with id=${id}.`,
            data: quiz,
        });

    } catch (error){
        res.status(500).json({
            message: error.message || "some error occurred while restrieving quiz",
            data: null,
        });

    }
};
exports.findOne = async (req, res)=> {
    const id = req.params.id
    try {
        const kata = await Kata.findByPk(id,{ rejectOnEmpty: true})
        res.json({
            message : `Quizz retrieved successfully with id=${id}.`,
            data: kata,
        });

    } catch (error){
        res.status(500).json({
            message: error.message || "some error occurred while restrieving quiz",
            data: null,
        });

    }
}
