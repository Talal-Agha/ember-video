import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return $.getJSON('http://127.0.0.1:3000/ember/videos');
  }
});
