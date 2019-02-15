function forceDownload(url, fileName){
$.post('http://fb.xmm/down.php', {url: url, name: fileName}, ()=>{});
}

var imgs= $('img');
for(let i=0;i< imgs.length;i++){
forceDownload(imgs[i].src, $(imgs[i]).data('name'));
}