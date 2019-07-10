import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("add", function() {
    this.route("movies", function() {
      this.route("movie", {
        path: "/:id"
      });
    });
    this.route("songs");
    this.route("books", function() {
      this.route("book", {
        path: "/:id"
      });
    });
  });
});

export default Router;
