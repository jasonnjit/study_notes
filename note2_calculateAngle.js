<script>
    var time = new Date();
//    var h = time.getHours;
    var n = time.toLocaleTimeString();
    if (n[1]=":"){
    var hour = n.substring(0,1);
    var minute = n.substring(2,4);  
    }
    else
    {
    var hour = n.substring(0,2);
    var minute = n.substring(3,5);
    }
    
//    var hour =3;   //change the time manually, hour shoule be between 0 to 12, minute 0 to 60
//    var minute =57;
    
    var angle1 = 30 * hour + minute/120;   //change hour and minute to h and m as above
    var angle2 = 6 * minute;                //then we can calculate the time right now
    var angle;
    if ((angle2 - angle1 >= 0) && (angle2 - angle1 <= 360)){
    angle= angle2 - angle1;
    }
    else {
    angle = angle1 - angle2;
        
    }
    if (angle > 180){
    angle = 360 - angle;
    }
    
    document.write("The time is: "+n+"<br/>");
    document.write("The FULL time is: "+time+"<br/>");
    document.write("The hour is: "+hour+"<br/>");
    document.write("The minute is: "+minute+"<br/>");
    document.write("The angle is: "+angle+" degree");
    
</script>
