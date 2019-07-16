import Controller from '@ember/controller';

export default Controller.extend({
    newNotes: "",
    isEditing: false,
    actions: {
        editNotes() {
            this.store.findRecord("song", this.model.id).then(record=> {
                this.set("newNotes", record.notes);
            });
            this.set("isEditing", true);
        }, 
        async saveNotes() {
            let updatedNotesModel = this.get("model");
            updatedNotesModel.set("notes", this.newNotes);
            await updatedNotesModel.save();
            this.set("isEditing", false);
            this.set("newNotes", "");
        }
    }
});
