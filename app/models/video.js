import DS from 'ember-data';

export default DS.Model.extend({
    id: DS.attr('string'),
    title: DS.attr('string'),
    thumbnail_url: DS.attr('string'),
    url: DS.attr('string'),
    uploaded_at: DS.attr('date', {
        defaultValue() {
        return new Date();
        }
    })
});
