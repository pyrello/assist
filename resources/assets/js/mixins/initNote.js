import Note from '../models/Note'
import ModelMixin from './ModelMixin'

export default {
    ...new ModelMixin({
        name: 'note',
        storeName: 'notes',
        model: Note,
    }),
}