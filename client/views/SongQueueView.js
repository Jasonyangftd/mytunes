// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('remove', function(song){
      this.render();
    },this);
    this.collection.on('add', function(song){
      // console.log('sucker')
      this.render(song);
    },this);
  },

  render: function(song) {
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
