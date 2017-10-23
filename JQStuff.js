var text = $.get('waterFacts.txt', function(data) {
    do_something_with(data)
 }, 'text');
 $('#00001').text(text);
