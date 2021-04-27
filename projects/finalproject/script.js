

var canvas8=document.getElementById("canvas8")
var fillplace=document.getElementById("fills1")
var cgc8=canvas8.getContext("2d")

var pixelData=[-1,-1,-1,-1]

//----------------------
for(var i=0;i<255;i++){
    for(var j=0;j<255;j++){
        cgc8.fillStyle="rgb("+j+","+i+",125)";
        cgc8.fillRect(i,j,1,1)
    }
}

function getElementPosition(obj) {
   var curleft = 0, curtop = 0;
   if (obj.offsetParent) {
       do {
           curleft += obj.offsetLeft;
           curtop += obj.offsetTop;
       } while (obj = obj.offsetParent);
       return { x: curleft, y: curtop };
   }
   return undefined;
}

function getEventLocation(element,event){
    // Relies on the getElementPosition function.
    var pos = getElementPosition(element);
    
    return {
    	x: (event.pageX - pos.x),
      	y: (event.pageY - pos.y)
    };
}


canvas8.addEventListener("click",function(event){
    // Get the coordinates of the click
    var eventLocation = getEventLocation(this,event);
    // Get the data of the pixel according to the location generate by the getEventLocation function
    var context = this.getContext('2d');
    var pixelData = context.getImageData(eventLocation.x, eventLocation.y, 1, 1).data; 
    console.log(pixelData)
    fillplace.style.background = "rgb("+pixelData[0]+","+pixelData[1]+","+pixelData[2]+")"
    // now let us evaluate it:
    var brightness=(0.2126*pixelData[0] + 0.7152*pixelData[1] + 0.0722*pixelData[2])
    var yourmax=Math.max(pixelData[0],pixelData[1],pixelData[2])
    var yourmin=Math.min(pixelData[0],pixelData[1],pixelData[2])
    var hue=(yourmax-yourmin)/(yourmax+yourmin)
    if (hue>=255){
        hue=255;
    }
    document.getElementById('your-r').innerHTML = pixelData[0];
    document.getElementById('your-g').innerHTML = pixelData[1];
    document.getElementById('your-b').innerHTML = pixelData[2];
    document.getElementById('saturation').innerHTML = hue.toFixed(3);
    document.getElementById('brightness').innerHTML = Math.round(brightness,3);

    },false);



// define a function to transfer slider value to rgba color value:
function colortransfer(yourslidervalue){
// yourslidervalue is in range [0,1000]
    var allrvalue = [255,255,208,79,63,47,28,95,186,251,255]
    var allgvalue = [0,154,222,220,218,201,127,21,12,7,0]
    var allbvalue = [0,0,33,74,216,226,238,242,248,217,0]
    i=parseInt(yourslidervalue/100)//number of section the one is in
    t=yourslidervalue-i //inner steps it would take
    var realrvalue = parseInt(allrvalue[i]+t*(allrvalue[i+1]-allrvalue[i])/100)
    var realgvalue = parseInt(allgvalue[i]+t*(allgvalue[i+1]-allgvalue[i])/100)
    var realbvalue = parseInt(allbvalue[i]+t*(allbvalue[i+1]-allbvalue[i])/100)
    return [realrvalue,realgvalue,realbvalue,1]
}


// define your rgba value here
var slider = document.getElementById("myRange");
var slidervalue = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {

  slidervalue=this.value
  temprgba=colortransfer(slidervalue)
  for(var i=0;i<255;i++){
    for(var j=0;j<255;j++){
        var rnew=(255-j+j*temprgba[0]/255)*i/255
        var gnew=(255-j+j*temprgba[1]/255)*i/255
        var bnew=(255-j+j*temprgba[2]/255)*i/255
        cgc8.fillStyle="rgb("+rnew+","+gnew+",+"+bnew+")";
        cgc8.fillRect(j,i,1,1)
    }
  }
       
    
//   console.log('RGBA value:' ,temprgba) yeah!!!this works!!!
}
//r,g,b,a   (j,i,1,1) calculation algorithm:
//255,255,255,1       r,g,b,1
//0,0,0,1        0,0,0,1
//vertical: brightness; longitunal: fade to white




//Here we start to work on the color cart:

var color1=document.getElementById('color1');
var color2=document.getElementById('color2');
var color3=document.getElementById('color3');
var color4=document.getElementById('color4');


color1.addEventListener("click",function(){
 
   yourtext=color1.textContent
   yourtext2=color1.innerText
   console.log(yourtext.length)
   console.log(yourtext2.length)
   console.log("Click to add color.".length);
   console.log(yourtext2.length=='Click to add color.'.length)
   var result = yourtext.localeCompare("Click to add color.");
   var result2 = yourtext.localeCompare("Click to drop color.");
   if (yourtext2.length=='Click to add color.'.length){
       console.log(document.getElementById('your-r').innerHTML)
       
       if (console.log(isNaN(document.getElementById('your-r').innerHTML))){

       }else{
        pixelData[0]=document.getElementById('your-r').innerHTML;
        pixelData[1]=document.getElementById('your-g').innerHTML;
        pixelData[2]=document.getElementById('your-b').innerHTML;
        color1.textContent='Click to drop color.';
       }
       console.log("rgb("+pixelData[0]+","+pixelData[1]+","+pixelData[2]+")")
       
       
       color1.style.background="rgb("+pixelData[0]+","+pixelData[1]+","+pixelData[2]+")";
       pixelData=[-1,-1,-1,-1]
   }
   if (yourtext2.length>'Click to add color.'.length){
        console.log('yeah2')
        color1.textContent='Click to add color.';
        color1.style.background='black';
        pixelData=[-1,-1,-1,-1]
    }    
    console.log(isNaN(document.getElementById('your-r').innerHTML)==false)
    console.log(color1.style.background.length)//this can be used to identify nulls
},false);

color2.addEventListener("click",function(){
 
    yourtext=color2.textContent
    yourtext2=color2.innerText
    console.log(yourtext.length)
    console.log(yourtext2.length)
    console.log("Click to add color.".length);
    console.log(yourtext2.length=='Click to add color.'.length)
    var result = yourtext.localeCompare("Click to add color.");
    var result2 = yourtext.localeCompare("Click to drop color.");
    if (yourtext2.length=='Click to add color.'.length){
        console.log(document.getElementById('your-r').innerHTML)
        
        if (console.log(isNaN(document.getElementById('your-r').innerHTML))){
 
        }else{
         pixelData[0]=document.getElementById('your-r').innerHTML;
         pixelData[1]=document.getElementById('your-g').innerHTML;
         pixelData[2]=document.getElementById('your-b').innerHTML;
         color2.textContent='Click to drop color.';
        }
        console.log("rgb("+pixelData[0]+","+pixelData[1]+","+pixelData[2]+")")
        
        
        color2.style.background="rgb("+pixelData[0]+","+pixelData[1]+","+pixelData[2]+")";
        pixelData=[-1,-1,-1,-1]
    }
    if (yourtext2.length>'Click to add color.'.length){
         console.log('yeah2')
         color2.textContent='Click to add color.';
         color2.style.background='black';
         pixelData=[-1,-1,-1,-1]
     }    
     console.log(isNaN(document.getElementById('your-r').innerHTML)==false)
     console.log(color2.style.background.length)//this can be used to identify nulls
 },false);

color3.addEventListener("click",function(){

yourtext=color3.textContent
yourtext2=color3.innerText
console.log(yourtext.length)
console.log(yourtext2.length)
console.log("Click to add color.".length);
console.log(yourtext2.length=='Click to add color.'.length)
var result = yourtext.localeCompare("Click to add color.");
var result2 = yourtext.localeCompare("Click to drop color.");
if (yourtext2.length=='Click to add color.'.length){
    console.log(document.getElementById('your-r').innerHTML)
    
    if (console.log(isNaN(document.getElementById('your-r').innerHTML))){

    }else{
        pixelData[0]=document.getElementById('your-r').innerHTML;
        pixelData[1]=document.getElementById('your-g').innerHTML;
        pixelData[2]=document.getElementById('your-b').innerHTML;
        color3.textContent='Click to drop color.';
    }
    console.log("rgb("+pixelData[0]+","+pixelData[1]+","+pixelData[2]+")")
    
    
    color3.style.background="rgb("+pixelData[0]+","+pixelData[1]+","+pixelData[2]+")";
    pixelData=[-1,-1,-1,-1]
}
if (yourtext2.length>'Click to add color.'.length){
        console.log('yeah2')
        color3.textContent='Click to add color.';
        color3.style.background='black';
        pixelData=[-1,-1,-1,-1]
    }    
    console.log(isNaN(document.getElementById('your-r').innerHTML)==false)
    console.log(color3.style.background.length)//this can be used to identify nulls
},false);

color4.addEventListener("click",function(){

yourtext=color4.textContent
yourtext2=color4.innerText
console.log(yourtext.length)
console.log(yourtext2.length)
console.log("Click to add color.".length);
console.log(yourtext2.length=='Click to add color.'.length)
var result = yourtext.localeCompare("Click to add color.");
var result2 = yourtext.localeCompare("Click to drop color.");
if (yourtext2.length=='Click to add color.'.length){
    console.log(document.getElementById('your-r').innerHTML)
    
    if (console.log(isNaN(document.getElementById('your-r').innerHTML))){

    }else{
        pixelData[0]=document.getElementById('your-r').innerHTML;
        pixelData[1]=document.getElementById('your-g').innerHTML;
        pixelData[2]=document.getElementById('your-b').innerHTML;
        color4.textContent='Click to drop color.';
    }
    console.log("rgb("+pixelData[0]+","+pixelData[1]+","+pixelData[2]+")")
    
    
    color4.style.background="rgb("+pixelData[0]+","+pixelData[1]+","+pixelData[2]+")";
    pixelData=[-1,-1,-1,-1]
}
if (yourtext2.length>'Click to add color.'.length){
        console.log('yeah2')
        color4.textContent='Click to add color.';
        color4.style.background='black';
        pixelData=[-1,-1,-1,-1]
    }    
    console.log(isNaN(document.getElementById('your-r').innerHTML)==false)
    console.log(color4.style.background.length)//this can be used to identify nulls
},false);

//now it is time to push the result to the query step:
var yourbutton=document.getElementById('pushresult');
yourbutton.addEventListener("click",function(){
    console.log('go')
    var colorcount = 0
    var colorlist = []
    if (color1.style.background.length > 0){
        colorcount = colorcount + 1;
        colorlist.push(color1.style.background);
        console.log(color1.style.background);
    }
    if (color2.style.background.length > 0 && colorlist.includes(color2.style.background)==false){
        colorcount = colorcount + 1;
        colorlist.push(color2.style.background);
        console.log(color2.style.background);
    }
    if (color3.style.background.length > 0 && colorlist.includes(color3.style.background)==false){
        colorcount = colorcount + 1;
        colorlist.push(color3.style.background);
        console.log(color3.style.background);
    }
    if (color4.style.background.length > 0  && colorlist.includes(color4.style.background)==false){
        colorcount = colorcount + 1;
        colorlist.push(color4.style.background);
        console.log(color4.style.background);
    }
    // console.log(colorlist)
})
//colorlist would store all the ordered colors without any repeated ones.

//https://labs.tineye.com/multicolr/#colors=6b73a7,c9e1f6,f6da46,95c9be,46639c;weights=20,20,20,20,20;tags=nature,flower;
// transfer color rgb to color codes:


// it sounds that this code can scrape all the imgs:

const url =  "https://labs.tineye.com/multicolr/#colors=bfa5c4;weights=100;";


var settings = {
    "async":true,
    "crossDomain":true,
    "url":url,
    "method":"GET",
    "headers":{
        'Content-Type':'application/x-www-form-urlencoded'  
    },
    'type': "POST", /* or type:"GET" or type:"PUT" */
    'dataType': "json",

}

$.ajax(settings).done(function (response) {
    console.log(response);
});