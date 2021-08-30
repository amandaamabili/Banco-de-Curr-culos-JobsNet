import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    'name': {type: String, required: true},
    'jobPositionApplied': {type: String},
    'birthday': {type: Date, required: true},
    'single': {type: Boolean},
    'gender': {type: String},
    'address': {type: Object, required: true},
    'phone': {type: String},
    'zipcode': {type: String},
    'phoneNumber': {type: Number},
    'phoneNumber2': {type: Number},
    'contactPhoneNumber': {type: Number},
    'personalNumber': {type: Number},
    'documentId': {type: String, required: true},
    'cpf': {type: String, required: true},
    'hasVehicle': {type: Boolean},
    'hasLicenseDriver': {type: Boolean},
})

export default mongoose.model('User', UserSchema);