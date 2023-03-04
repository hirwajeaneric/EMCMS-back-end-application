const mongoose = require('mongoose');

const claimSchema = new mongoose.Schema({
    fullName: { type: String, required: [ true, 'Full name must be provided' ] },
    registrationNumber: { type: String, required: [ true, 'Registration number must be provided' ] },
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
                name: { type: String, required: [true, 'Course Lecturer must be provided']}
            },
            group: { type: String, required: [true, 'Course group attended must be provided'] },
            reason: { type: String, required: [true, 'Reason for missing the exam must be provided'] },
            examPermit: { type: String, required: [true, 'Exam permit card must be provided'] },
            proofOfTuitionPayment: { type: String, required: [true, 'A registration form that proves that you have submitted full semester payment must be provided'] },
            proofOfclaimPayment: { type: String, required: false },
            otherAttachments: { type: String, required: false },
        }
    ],
    totalClaimCost: { type: Double, required: true },
    studentSignature: { type: String,  required: false },
    hodDeanSignature: {
        signature: { type: String, required: false },
        comment: { type: String, required: false },
        dateOfSignature: { type: Date, required: false },  
    }, 
    lecturerSignature: {
        signature: { type: String, required: false },
        comment: { type: String, required: false },
        dateOfSignature: { type: Date, required: false },  
    },
    registrationOfficerSignature: {
        signature: { type: String, required: false },
        comment: { type: String, required: false },
        dateOfSignature: { type: Date, required: false },  
    },
    studentDisciplineOfficerSignature: {
        signature: { type: String, required: false },
        comment: { type: String, required: false },
        dateOfSignature: { type: Date, required: false },  
    },
    accountantSignature: {
        signature: { type: String, required: false },
        comment: { type: String, required: false },
        dateOfSignature: { type: Date, required: false },  
    },
    examinationOfficerSignature: {
        signature: { type: String, required: false },
        comment: { type: String, required: false },
        dateOfSignature: { type: Date, required: false },  
    },
    submitDate: { type: Date, default: Date.now() }
}) 

module.exports = mongoose.model('Claim', claimSchema);