import Component from '@ember/component';

export default Component.extend({
    classNames: ["flex", "flex-row", "justify-center"],
    actions: {
        async markFinished(e) {
            // this.item.store.findRecord(this.item.type, this.item.id, {reload: true}).then(function(item){
            //     item.set("finished", e.target.checked);
            // })
            this.item.set("finished", e.target.checked);
            await this.item.save();
        }
    }
});
