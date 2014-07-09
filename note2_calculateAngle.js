<script>
    var time = new Date();
//    var h = time.getHours;
    var n = time.toLocaleTimeString();
//    document.write(n);
    var h = n.substring(0,2);
    document.write(h);
//    alert(time);
//    alert(h);
    var m = n.substring(3,5);
    document.write(m);
//    alert(m);
    
    var hour = 11;
    var minute = 59;
    var jiao1 = 30* hour + minute/120;   //change hour and minute to h and m as above
    var jiao2 = 6*minute;                //then we can calculate the time right now
    var jiao;
    if (jiao2 - jiao1 >= 0){
    jiao= jiao2 - jiao1;
    }
    else jiao = jiao1 - jiao2;
    
    document.write("<br/>"+jiao);
//    document.write(time);
    
</script>
