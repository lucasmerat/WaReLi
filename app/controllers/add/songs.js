import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
    router: service(),
    persistedSongs: computed('model.@each.{isNew}', function() {
        return this.model.filterBy('isNew', false);
    }),
    createSong: function (title) {
        return this.store.createRecord("song", { title });
    }
});
