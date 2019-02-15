function forceDownload(url, fileName){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://fb.xmm/down.php?url='+ url + '&name=' + fileName, true);
    xhr.send();
}

var imgs= $('img');
for(let i=0;i< imgs.length;i++){
forceDownload(imgs[i].src, $(imgs[i]).data('name'));
}