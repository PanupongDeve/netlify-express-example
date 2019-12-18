const userRepository = require('../repositories/userRepository');

const getAll = async (req, res) => {
    try {
        const response = await userRepository.getAll();
        res.json(response);
    } catch (error) {
        
    }
    
}

const getById = async (req, res) => {
    try {
        const response = await userRepository.getById();
        res.json(response);
    } catch (error) {
        
    }
    
}


const create = async (req, res) => {
    try {
        const response = await userRepository.create();
        res.json(response); 
    } catch (error) {
        
    }
    
}

const update = async (req, res) => {
    try {
        const response = await userRepository.update();
        res.json(response);   
    } catch (error) {
        
    }
    
}

const remove = async (req, res) => {
    try {
        const response = await userRepository.remove();
        res.json(response);
    } catch (error) {
        
    }
}

const userController = {
    getAll,
    getById,
    create,
    update,
    remove
}

module.exports = userController;