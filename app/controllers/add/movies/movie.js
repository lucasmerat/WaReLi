import Controller from '@ember/controller';

export default Controller.extend({
    newNotes: "",
    isEditing: false,
    actions: {
        editNotes() {
            this.set("isEditing", true);
        }, 
        async saveNotes() {
            let updatedNotesModel = this.get("model");
            updatedNotesModel.set("notes", this.newNotes);
            await updatedNotesModel.save();
            this.set("isEditing", false);
        }
    }
});
