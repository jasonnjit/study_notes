<script>
    
    var arr = new Array;
    arr[0] = "volvo";
    arr[1] = "BMW";
    arr[2] = "Honda";
    arr[3] = "Chevy";
    
    //for loop
    document.write("for loop"+"<br/>"); 
    for(var n=0; n < arr.length; n++){
    document.write(arr[n]+"<br/>");
    }
    document.write("<br/>");
    
    //while loop
    document.write("while loop"+"<br/>"); 
    var n = 0;
    while (n<4){
    document.write(arr[n]+"<br/>");
    n++;
    }
    document.write("<br/>");
    
    //for-in loop
    document.write("for-in loop"+"<br/>"); 
    for(n in arr){
    document.write(arr[n]+"<br/>");
    }
    document.write("<br/>");
    
    //do while loop
    document.write("do while loop"+"<br/>"); 
    var n = 0;
    do{
    document.write(arr[n]+"<br/>");
    n++;
    }
    while (n <4);
    
</script>
