import Controller from '@ember/controller';


export default Controller.extend({
    titleValue: "",
    actions: {
        addItem() {
           let route = this.target.currentRoute.parent.localName;
           let singularRoute = this.target.currentRoute.parent.localName.substr(0, route.length-1);
           const item = this.store.createRecord(singularRoute, { title: this.titleValue });
           item.save();
           this.set('titleValue', "");
        }
    },
});
