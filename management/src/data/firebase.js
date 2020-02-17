import { firebase } from '@firebase/app'
import '@firebase/firestore'
import 'firebase/auth'
// firebase init goes here
const config = {
    
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const feedbacksCollection = db.collection('feedbacks')
const mentoringCollection = db.collection('mentoring')
export {
    db,
    auth,
    currentUser,
    usersCollection,
    feedbacksCollection,
    mentoringCollection
}
