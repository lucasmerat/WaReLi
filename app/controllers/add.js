import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    titleValue: "",
    router: service(),
    actions: {
        async addItem() {
           let route = this.target.currentRoute.parent.localName;
           let singularRoute = this.target.currentRoute.parent.localName.substr(0, route.length-1);
           const item = this.store.createRecord(singularRoute, { title: this.titleValue });
           await item.save();
           this.set('titleValue', "");
           this.router.transitionTo("add.books.book", item.id)
        }
    },
});
