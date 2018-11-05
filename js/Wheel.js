var WheelStart=document.getElementsByClassName("WheelStart")[0];
var oimg=WheelStart.getElementsByTagName("img");
tab(3)
function tab(n)
{
    for(var i=0;i<2;i++ )
    {

        var left=n-1-i;
        if(left<0)
        {
            left=left+9;
        }
        oimg[left].style.transform=`translateX(${-200*(i+1)}px)scale(0.92) `;

        oimg[left].style.zIndex=3;
        var right=n+1+i;
        if(right>8)
        {
            right=right-9;
        }
        oimg[right].style.transform=`translateX(${200*(i+1)}px) scale(0.92)`;
        oimg[right].style.zIndex=3;
    }
    // oimg[n].style.transform='translateX(200px)'
    oimg[n].style.zIndex=6;
}

for (var i=0;i<oimg.length;i++) {
    oimg[i].index=i;
    oimg[i].onclick=function()
    {
        tab(this.index);
    }
}