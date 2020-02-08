$(document).ready(function () {
    Tabletop.init({
      key: 'https://docs.google.com/spreadsheets/d/1JLB4jGeuGZp77X7uF_GCHeApazGM4kUMj-VUh2gilRw/edit?usp=sharing',
      callback: function(data, tabletop) {
        var i,
            dataLength = data.length;
  
        for (i=0; i<dataLength; i++) {
          $('#politicians').append(
            $('<li>', {
              text: data[i].Name + ', ' + data[i].Name
            })
          );
        }
      },
      simpleSheet: true
    });
window.addEventListener('DOMContentLoaded', init)
  });