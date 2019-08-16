import DS from 'ember-data';
import { inject as service } from '@ember/service';
const { Model, attr } = DS;

export default Model.extend({
    router: service(),
    title: attr("string"),
    finished: attr("boolean", {
        defaultValue() { return false }
    }),
    dateFinished: attr("date"),
    notes: attr("string"),
    transitionToShow () {
        this.router.transitionTo(this.showRoute, this.id);
    }, 
});
