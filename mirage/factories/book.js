import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
    title() {
        return `Book ${Math.floor(Math.random() * 10)}`
    }
});
