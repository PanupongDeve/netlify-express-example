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
        const response = await userRepository.getById(req.params.id);
        res.json(response);
    } catch (error) {
        
    }
    
}


const create = async (req, res) => {
    try {
        const response = await userRepository.create(req.body);
        res.json(response); 
    } catch (error) {
        
    }
    
}

const update = async (req, res) => {
    try {
        const response = await userRepository.update(req.params.id, req.body);
        res.json(response);   
    } catch (error) {
        
    }
    
}

const remove = async (req, res) => {
    try {
        const response = await userRepository.remove(req.params.id);
        res.json(response);
    } catch (error) {
        
    }
}

const softRemove = async (req, res) => {
    try {
        const response = await userRepository.softRemove(req.params.id);
        res.json(response);
    } catch (error) {
        
    }
}

const reStore = async (req, res) => {
    try {
        const response = await userRepository.reStore(req.params.id);
        res.json(response);
    } catch (error) {
        
    }
}

const userController = {
    getAll,
    getById,
    create,
    update,
    remove,
    reStore,
    softRemove
}

module.exports = userController;