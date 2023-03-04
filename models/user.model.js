const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: [true, 'Full name must be provided'] },
    registrationNumber: { type: String, required: false, },
    email: { type: String, required: [true, 'Email must be provided'] },
    phone: { type: String, required: [true, 'Phone number must be provided'] },
    role: { type: String, required: false, },
    password: { type: String, required: [true, 'Password must be provided'] },
    token: { type: String, required: false },
    faculty: { type: String, required: false },
    department: { type: String, required: false },
    courses: [
        {
            semester: { type: Number, required: false },
            academicYear: { type: String, required: false },
            courseCode: { type: String, required: false },
            courseName: { type: String, required: false },
            groups: { type: Array, required: false },
            faculty: { type: String, required: false },
            department: { type: String, required: false }
        }
    ],
}) 

module.exports = mongoose.model('User', userSchema);