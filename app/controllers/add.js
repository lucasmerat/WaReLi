import Controller from '@ember/controller';


export default Controller.extend({
    titleValue: "",
    actions: {
        addItem() {
           let route = this.target.currentRoute.localName;
           let singularRoute = this.target.currentRoute.localName.substr(0, route.length-1);
           const item = this.store.createRecord(singularRoute, { title: this.titleValue });
           item.save();
        },
        updateComplete() {
            console.log("Updating")
        }
    },
});
