import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    classNames: ["w-1/2", "flex", "justify-center"],
    titleValue: "",
    router: service(),
    store: service(),
    actions: {
        async addItem() {
           let route = this.router.currentRoute.parent.localName;
           let singularRoute = this.router.currentRoute.parent.localName.substr(0, route.length-1);
           const item = this.store.createRecord(singularRoute, { title: this.titleValue });
           await item.save();
           this.set('titleValue', "");
           this.router.transitionTo(`add.${route}.${singularRoute}`, item.id)
        }
    },
});
