import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    var date = new Date(serialized);
    return date.toLocaleString();
  },

  serialize(deserialized) {
    return deserialized;
  }
});
