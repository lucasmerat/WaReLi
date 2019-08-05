import Component from '@ember/component';

export default Component.extend({
    classNames: ["flex", "flex-row", "items-center"],
    actions: {
        async markFinished(e) {
            this.item.set("dateFinished", Date());
            this.item.set("finished", e.target.checked);
            await this.item.save();
        }
    }
});
