import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    let id = params.id;
    return this.store.findRecord("movie", id);
  },
  actions: {
    willTransition() {
      this.controller.setProperties({
        isEditing: false,
        newNotes: ""
      });
    }
  }
});
