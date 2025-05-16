
  jQuery(document).on('click', '#dark', function(e) {
    var to_Text = ['https://line.me/ti/p/Py62TnhAEw']
    var jumpUrl = to_Text;
    if (jumpUrl.length != 0) {
        var i = Math.floor(Math.random() * jumpUrl.length);
        var v = Math.round(Math.random()*100);
        var url = jumpUrl[i];
        window.open("" + url, '_blank');
        // var xhr = new XMLHttpRequest()
        // xhr.open('get', "/click.php?d=" + url);
        // xhr.onreadystatechange = function() {};
        // xhr.send();
        // xhr.onreadystatechange = function () {
        //     if (xhr.status == 200) {}
        // }
    }
  });
