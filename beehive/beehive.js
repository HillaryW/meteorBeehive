Mites = new Mongo.Collection("mites");

if (Meteor.isClient) {
  
  Meteor.subscribe("mites");
 

  Template.beehive.helpers({
    "mites": function () {
      return Mites.find(
          {}, {sort: {createdOn: -1}} ) || {};
    } });

  Template.hello.events({
    "submit form": function(event) {
            event.preventDefault();
            
            
            var hiveBox =
                $(event.target).find('input[name=hiveName]');
            var hiveText = hiveBox.val();
                
            var dateBox =
                $(event.target).find('input[name=observDate]');
            var dateText = dateBox.val();
            
            var durationBox =
                $(event.target).find('input[name=duration]');
            var durationText = durationBox.val();
            
            var countBox =
                $(event.target).find('input[name=miteCount]');
            var countText = countBox.val();
            
            if (hiveText.length > 0 && dateText.length > 0 && durationText.length > 0 && countText.length > -1) {
              Mites.insert( {
                hiveName: hiveText,
                observationDate: dateText,
                duration: durationText,
                miteCount: countText,
                createdOn: Date.now()
              });
              
              
              hiveBox.val(""); dateBox.val(""); durationBox.val(""); countBox.val("");
            } else {
              //alert("Name and Message are both required");
              console.output(messageBox);
              messageBox.classlist.add("has-warning"); }
                
    } } );

  }

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
