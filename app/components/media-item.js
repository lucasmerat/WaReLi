import Component from '@ember/component';

export default Component.extend({
    classNames: ["flex", "flex-row", "justify-center"],
    actions: {
        async markFinished(e) {
            this.item.set("finished", e.target.checked);
            await this.item.save();
        }
    }
});
