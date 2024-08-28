const bcrypt = require("bcryptjs")
const User = require("../models/User");


//? -------Registration--------
const register = async (req, res)=>{
    try {
        const {username, email, password} = req.body

        //* Validating
        if (!username || !email || !password) {
            res.status(400)
            throw new Error('Please all fields are required') 
        }

        //* Checking the email is taken or not
        const userExists = await User.findOne({email});
        if (userExists) {
            res.status(400)
            throw new Error('User already exists')
        }

        //* Hash the user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        //* Create the user
        const newUser = new User({
            username,
            password,
            email
        })

        //* Add the date when trial will end?
        newUser.trialExpires = new Date(
            new Date().getTime() + newUser.trialPeriod * 24 * 60 *60 * 1000
        );

        //* Save the user
        await newUser.save();

        res.json({
            status: true,
            message: 'Registration is Successfull',
            user: {
                username,
                hashedPassword,
                email,
            },
        });
    } catch (error) {
        throw new Error(error); 
    }
};

//? -------Login--------
//? -------Logout--------
//? -------Profile--------
//? -------Check user Auth status--------


//! Exporting controllers
module.exports = {
    register,
};