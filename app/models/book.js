import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
    title: attr("string"),
    finished: attr("boolean", {
        defaultValue() { return false }
    }),
    notes: attr("string"),
    type: attr("string", {
        defaultValue() { return "Book" }
    })
});
