import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
    title() {
        return `Song ${Math.floor(Math.random() * 10)}`
    }
});
