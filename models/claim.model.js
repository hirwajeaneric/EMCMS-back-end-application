const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const claimSchema = new mongoose.Schema({
    fullName: { type: String, required: [ true, 'Full name must be provided' ], trim: true },
    registrationNumber: { 
        type: String, 
        required: [ true, 'Registration number must be provided'], 
        trim: true, 
        maxlength: [5, 'Registration number must be 5 digits long.'], 
        minlength: [5, 'Registration number must be 5 digits long.'], 
    },
    email: { type: String, required: [ true, 'Email must be provided' ] },
    phone: { type: String, required: [ true, 'Phone number must be provided' ] },
    faculty: { type: String, required: [ true, 'Faculty must be provided' ] },
    department: { type: String, required: [ true, 'Department must be provided' ] },
    courses: [
        { 
            courseName: { type: String, required: [true, 'Course name must be provided'] },
            courseCode: { type: String, required: [true, 'Course code must be provided'] },
            semester: { type: Number, required: [true, 'Semester must be provided'] },
            academicYear: { type: String, required: [true, 'Academic year must be provided'] },
            credits: { type: Number, required: [true, 'Credits must be provided'] },
            lecturer: { 
                id: { type: Schema.Types.ObjectId, required: 'true', ref: 'User' },
                name: { type: String, required: [true, 'Course Lecturer must be provided']},
                comment: { type: String, required: false },
                attachment: { type: String, required: false },
                signature: { type: Boolean, default: false, required: false },
                dateOfSignature: { type: Date, required: false },
            },
            group: { type: String, required: [true, 'Course group attended must be provided'] },
            reason: { type: String, required: [true, 'Reason for missing the exam must be provided'] },
            examPermit: { type: String, required: [true, 'Exam permit card must be provided'] },
            proofOfTuitionPayment: { type: String, required: [true, 'A registration form that proves that you have submitted full semester payment must be provided'] },
            proofOfClaimPayment: { type: String, required: false },
            otherAttachments: { type: String, required: false },
        }
    ],
    totalClaimCost: { type: Number, required: true },
    studentSignature: { type: Boolean, default: false, required: false },
    hodDeanSignature: {
        signature: { type: Boolean, default: false, required: false },
        comment: { type: String, required: false },
        dateOfSignature: { type: Date, required: false },  
    }, 
    registrationOfficerSignature: {
        signature: { type: Boolean, default: false, required: false },
        comment: { type: String, required: false },
        dateOfSignature: { type: Date, required: false },  
    },
    studentDisciplineOfficerSignature: {
        signature: { type: Boolean, default: false, required: false },
        comment: { type: String, required: false },
        dateOfSignature: { type: Date, required: false },  
    },
    accountantSignature: {
        signature: { type: Boolean, default: false, required: false },
        comment: { type: String, required: false },
        dateOfSignature: { type: Date, required: false },  
    },
    examinationOfficerSignature: {
        signature: { type: Boolean, default: false, required: false },
        comment: { type: String, required: false },
        dateOfSignature: { type: Date, required: false },  
    },
    submitDate: { type: Date, default: Date.now() }
}) 

module.exports = mongoose.model('Claim', claimSchema);