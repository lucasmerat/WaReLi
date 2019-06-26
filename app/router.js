import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

    this.route('add', function() {
      this.route('movies');
      this.route('books');
      this.route('songs');
    });

  });

export default Router;
