import User from '../Model/userModel.js';
export const create = async(req, res) => {
    try {
        const userData = new User(req.body);
        if(!userData) {
            return res.status(400).json({ message: 'Les donnees ne sont pas valides' });
        }
        const savedData= await userData.save();
        res.status(201).json({ message: 'Utilisateur cree avec succes', savedData });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getAll = async(req, res) =>{
    try {
        const users = await User.find();
        if(!users) {
            return res.status(400).json({ message: 'Les donnees ne sont pas valides' });
        }
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getOne = async(req, res) =>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist) {
            return res.status(400).json({ message: 'Les donnees ne sont pas valides' });
        }
        res.json(userExist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}   

export const update = async(req, res) =>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist) {
            return res.status(400).json({ message: 'Les donnees ne sont pas valides' });
        }
        const updateData = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.json({message:"Utilisateur mis a jour avec succes", updateData});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteUser = async(req, res) =>{
    try {
        const id = req.params.id;
        const userExist = await User.findByIdAndDelete(id);
        if(!userExist) {
            return res.status(400).json({ message: 'Les donnees ne sont pas valides' });
        }
        res.json({ message: 'Utilisateur supprime avec succes' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}