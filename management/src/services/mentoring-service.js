import { mentoringCollection } from '../data/firebase'

class MentoringService {
  constructor () {
    this.keyCache = 'mentoring'
    this.repository = mentoringCollection
  }
  get = async () => {
    let collection = await this.repository.get()
    let mentoring = collection.docs.map((doc) => { return { id: doc.id, ...doc.data() } })
    return mentoring
  }

  getById = async (id) => {
    let mentoring = await this.repository.doc(id).get()
    return mentoring.data()
  }
}

export default MentoringService
