import Component from '@ember/component';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default Component.extend({
    init() {
        this._super(...arguments);
        console.log(this);
    },
    tagName: "",
    store: service(),
    errorFlash: '',
    createResourceTask: task(function * (title, clearTitleValue) {
        try {
            const resource = this.store.createRecord(this.modelName, { title });
            yield resource.save();
            clearTitleValue();
            resource.transitionToShow();
        } catch (e) {
            console.warn("There is an error", e)
            const errors = e.errors || [];
            this.set("errorFlash", errors.firstObject || "");
        } 
    }),
});
