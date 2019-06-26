import Controller from '@ember/controller';

export default Controller.extend({
    titleValue: "",
    types: ["Book", "Movie", "Song"],
    selectedType: "Book",

    actions: {
        changeSelectedType(e) {
            this.set("selectedType", e.target.value)
        },
        addItem() {
            
           const item = this.store.createRecord(this.selectedType, { title: this.titleValue });
           item.save();
        }
    }
});
