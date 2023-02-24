const res = require("express/lib/response");
const db = require("../models");//sama kaya bawah
const Quiz = db.quizzes; // untuk menghubungkan controler model dan router 

//CREATE: Untuk menambahkan data kedalam tabel quiz
exports.create = async (req,res)=> {
    try {
        const data = await Quiz.create(req.body)
        res.json({
            message: "quiz created successfully.",
            data: data,
        })
    } catch (error) {   
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

// READ: MENAMPILKAN Atau mengambil semua data quiz sesuai model dari database
exports.getAll = async(req,res) => {
    try{
        const quizzes = await Quiz.findAll()
        res.json({
            message: "Quizzes retrieved successfully .",
            data : quizzes,
        });
    } catch (error){
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

// mengubah data sesuai id yang dikirimkan 
exports.update = async (req,res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
        quiz.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Quizzes update successfully.",
            data: quiz,
        });
    } catch (error){
        res.status (500).json({
            message: error.message || "some error occurred while retrieving quiz",
        data: null,
        });
    }
}

// menghapus data sesuai id yang dikirimkan 
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true})
        quiz.destroy ()

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

// mengambil data sesuai id yang dikirimkan 
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

// Menampilkan atau mengambil semua data quiz berdasarkan kategory tertentu
exports.getByCategory = async (req,res)=> {
   const id = req.params.id
   const quizzes = await Quiz.findAll({
       where : {
           category : id
       }
   }) 
   res.json ({
       message: `Quizz retrieved successfully with cateroryId=${id}.`,
       data: quizzes,
   })
}

// menampilkan atau mengambil semua data quiz berdasarkan level tertentu
exports.getByQuizId = async (req, res)=> {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where: {
             QuizId : id
        }

        
    })
    res.json ({
        message: `Quizzes retrived successfully with LevelId=${id}.`,
        data: quizzes,
    });
    
}    
