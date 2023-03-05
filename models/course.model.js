const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    code: { type: String, required: [true, 'Course code must be provided'] },
    name: { type: String, required: [true, 'Course name must be provided'] },
    credits: { type: Number, required: [true, 'Number of course credits must be provided'] },
    faculty: { type: String, required: [true, 'Course faculty must be provided'] },
    department: { 
        type: String, 
        required: [true, 'Course department must be provided'],
        enum: {
            values: ['All', 'Software Engineering', 'Networks and Telecommunication Systems', 'Information Management'],
            message: '{VALUE} is not supported'
        } 
    },
    allocations: [
        {
            academicYear: { type: String, required: false },
            semester: { type: String, required: false },
            lecturers: { type: Array, required: false },
            groups: { type: Array, required: false },
        }
    ],
}) 

module.exports = mongoose.model('Course', courseSchema);