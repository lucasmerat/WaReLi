import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        let id = params.id;
        return this.store.findRecord("song", id);
    }
});
