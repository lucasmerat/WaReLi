import Media from './media';
import DS from 'ember-data';
const { attr } = DS;

export default Media.extend({
    type: attr("string", {
        defaultValue() { return "Song" }
    }),
    showRoute: "add.songs.song"
});
