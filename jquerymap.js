jQuery(function() {
  
    jQuery("#search").autocomplete({
    source: function(request, response) {
      jQuery.ajax({
        url: "index.php?option=com_eat&view=search&format=raw",
        type: "post",
        dataType: "json",
        data: {
          search_string: request.term,            
          "'.$token.'": "1"
        },
        success: function(data) {
          response(jQuery.map(data, function(item) {
            return {
                url: item.url,
                value: item.name
            }
          }))
        }
      })
    },
    
    select: function( event, ui ) {
      window.location.href = ui.item.url;
    },
    minLength: 2
  });
});

[
    {"url":"url1", "name":"name1"}, 
    
    {"url":"url2", "name":"name2"},
    
...]

[
    "a",
    [
    "A",
    "Association football",
    "Australia"
    ],

    [
    "",
    "",
    ""
    ],

    [
    "https://en.wikipedia.org/wiki/A",
    "https://en.wikipedia.org/wiki/Association_football",
    "https://en.wikipedia.org/wiki/Australia"
    ]
]
