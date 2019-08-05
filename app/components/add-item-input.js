import Component from '@ember/component';

export default Component.extend({
    classNames: ["w-1/2", "flex", "justify-center"],
    errorFlash: "",
    titleValue: "",
    clearTitleValue() {
        this.set("titleValue", "");
    },
    actions: {
        addItem(e) {
           e.preventDefault();
           this.createResourceTask.perform(this.titleValue, this.clearTitleValue.bind(this));
        }
    },
});
