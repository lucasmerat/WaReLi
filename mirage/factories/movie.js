import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
    title() {
        return `Movie ${Math.floor(Math.random() * 10)}`
    }
});
