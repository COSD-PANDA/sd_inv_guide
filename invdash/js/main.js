$(document).ready(function(){
var gauges = new Array();

Tabletop.init({ key: '1FAQK4XC11BFXcczEy-Dfhl1dHCgoDMrubz7jg8gi484',
  callback: function(data, tabletop) {
    console.log(data);
    _.each(data, function(element, index) {
      // Find box.
      var el = $('.chart-wrapper:eq(' + index + ')');
      $('.chart-title', el).html(element['Department']);
      $('.chart-stage', el).attr('id', 'stageId-' + index);
      gauges.push(new JustGage({
        id: 'stageId-' + index,
        value: element['Step 1 %'],
        min: 0,
        max: 100,
        title: "Step 1 Completion",
        label: "%",
        levelColors: ['#bd1f30', '#FFFF00', '#008000']

      }));
    });
  },
  simpleSheet: true,
  wanted: ['i2']
});


});
