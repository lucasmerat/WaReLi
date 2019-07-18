import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default Component.extend({
    classNames: ["w-1/2", "flex", "justify-center"],
    errorFlash: "",
    titleValue: "",
    router: service(),
    store: service(),
    createResourceTask: task(function * () {
        try {
            const resource = this.createResource(this.titleValue);
            yield resource.save();
            this.set("titleValue", "");
            resource.transitionToShow();
        } catch (e) {
            this.set("errorFlash", e.errors[0]);
        } 
    }),
    actions: {
        addItem(e) {
           e.preventDefault();
           this.createResourceTask.perform(this.titleValue);
        }
    },
});
