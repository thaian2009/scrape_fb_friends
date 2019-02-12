var user_id= document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1])[0];
var fb_dtsg= document.getElementsByName('fb_dtsg')[0].value;
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };
  xhttp.open("GET", "https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1&filter[0]=user&lazy=0&viewer=" 
+ user_id + "&token=v7&stale_ok=0&options[0]=friends_only&options[1]=nm&fb_dtsg=" +  fb_dtsg, true);
  xhttp.send();