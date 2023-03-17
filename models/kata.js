module.exports = (sequelize, Sequelize) => {
    const Kata = sequelize.define('kata',{
        kata: {
            type: Sequelize.STRING
        },
        makna: {
            type: Sequelize.STRING
        }
  
        
    });
      return Kata;  
    
  }