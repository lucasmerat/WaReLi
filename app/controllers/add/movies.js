import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default Controller.extend({
    router: service(),
    persistedMovies: computed('model.@each.{isNew}', function() {
        return this.model.filterBy('isNew', false);
    }),
    createMovie: function (title) {
        return this.store.createRecord("movie", { title });
    }
    // createMovie: task(function * (title) {
    //     const item = this.store.createRecord("movie", { title });
    //     yield item.save();
    //     this.router.transitionTo('add.movies.movie', item.id);
    // })
});
