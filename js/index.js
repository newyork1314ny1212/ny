var wheel=document.getElementsByClassName("Wheel")[0];
var oimg=wheel.getElementsByTagName("img");
var pre=document.getElementsByClassName("leftWheel")[0];
var next=document.getElementsByClassName("rigWheel")[0];
var oul=document.getElementsByClassName("changeAct")[0];
var oli=oul.getElementsByTagName("li");
var oulChange=document.getElementsByClassName("WordsPro-ul")[0];
var olicha=oulChange.getElementsByClassName("num")[0];
var ospan=document.getElementsByClassName("actBack");


//var ochangea=ochangeLi.getElementsByTagNames("a");
//var ochangeSpan=ochangea.getElementsByTagNames("span");


// var title=document.getElementsByTagName("Title")[0];
// var titleImg=title.getElementsByName("img");
// title.onmousemove=function()
// {
//     for (var i=0;i<titleImg.length;i++)
//     {
//         titleImg[i].style.transform="translateX(800px)"
//     }
//
// }
tab(1)
function tab(n)
{
    for(var i=0;i<4;i++ )
    {
        
        for(var i=0;i<4;i++ )
    {
        for(var i=0;i<4;i++ )
    {
        for(var i=0;i<4;i++ )
    {
        
        var left=n-1-i;
        if (left<0)
        {
             left=left+8;
        }
       oimg[left].style.transform=`translateX(${-1000*(i+1)}px)`;
       // oimg[left].style.transform="translateX(-500*(i+1)px)"
       //translateZ(${300-i*100}px)
        var right=n+1+i;
      if (right>7)
      {
          right=right-7;
      }
        //oimg[right].style.transform="translateX(500*(i+1)px)";
        oimg[right].style.transform=`translateX(${1000*(i+1)}px)`;
        //translateZ(${300-i*100}px)

    }
    oimg[n].style.transform='translateZ(300px)';

}

for (var i=0;i<oimg.length;i++) {
   oimg[i].index=i;
    oimg[i].onclick=function()
    {
        tab(this.index);
        oli[this.index-1].className="";
        oli[this.index].className="active";

    }

}

for(var i=0;i<ospan.length;i++)
{
    ospan[i].onmouseover=function()
    {
        this.style.background='rgb('+radom(0,225)+','+radom(0,225)+','+radom(0,225)+')';
    }
    ospan[i].onmouseout=function()
    {
        this.style.background="";
    }
}
function radom(start,end)
{
    return Math.floor(Math.random()*(end+1-start)+start);
}

// for(var i=0;i<oli.length;i++)
// {
//     oli[i].index=i;
//
// }

// pre.onclick=tab(this.index);
// next.onclick=tab(this.index)
