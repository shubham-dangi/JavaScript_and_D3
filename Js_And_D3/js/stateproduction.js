var fs=require('fs');
var data = fs.readFileSync('../csv/Production-Department_of_Agriculture_and_Cooperation.csv', {encoding:'utf8'}).toString();
var lines=data.split("\r\n");
var j=0;
//var sum=0,sum1=0,sum2=0,sum3=0;
var sum = [0,0,0,0];
var sumv=0;
var str="";
var temp={};
var result=[];


j=0;

for(var i=0;i<lines.length-1;i++)
{
    var line=lines[i].split(",");

    if((line[0].includes("Karnataka") && line[0].includes("Rice")) )
    {
        for (var q = 0; q < 1; q++) 
        {
        //sumv=0;
        
        for(var k=14;k<=24;k++)
        {
            if(line[k]=='NA')
            {
                line[k]=0;
            }
            sum[q]=sum[q]+parseFloat(line[k]);
            // sumv=sumv+parseFloat(line[k]);
        }
        sum[q]+=1;
        // sum[q]=sumv;
    }
    
}
if(line[0].includes("Kerala") && line[0].includes("Rice"))
{
    for (var q = 0; q < 1; q++) 
    {
        //sumv=0;
        
        for(var k=14;k<=24;k++)
        {
            if(line[k]=='NA')
            {
                line[k]=0;
            }
            s um[q]=sum[q]+parseFloat(line[k]);
            // sumv=sumv+parseFloat(line[k]);
        }
        sum[q]+=1;
        // sum[q]=sumv;
    }
//     for(var p=14;p<=24;p++)
//     {
//         if(line[p]=='NA')
//         {
//             line[p]=0;
//         }
//         sum1=sum1+parseFloat(line[p]);
//     }    

}
// if(line[0].includes("Andhra Pradesh") && line[0].includes("Rice"))
// {
//     for(var q=14;q<=24;q++)
//     {
//         if(line[q]=='NA')
//         {
//             line[q]=0;
//         }
//         sum2=sum2+parseFloat(line[q]);
//     }    

// }
// if(line[0].includes("Tamil Nadu") && line[0].includes("Rice"))
// {
//     for(var e=14;e<=24;e++)
//     {
//         if(line[e]=='NA')
//         {
//             line[e]=0;
//         }
//         sum3=sum3+parseFloat(line[e]);
//     }    

// }

//var value=[sum,sum1,sum2,sum3];
var str=["Karnataka","Kerala","Andhra Pradesh","Tamil Nadu"];
}

for(var v=0;v<4;v++)
{
    temp["Production"]=sum[v];
    temp["Southernstate"]=str[v];
    result.push(temp);
    temp={};
}

for(var w= 0; w < 4; w++)
{
    console.log("Sum:"+sum[w]);
}
// console.log("Sum1:"+sum1);
// console.log("Sum2:"+sum2);
// console.log("Sum3:"+sum3);

fs.writeFileSync("../json/southernstate1.json",JSON.stringify(result),encoding="utf8");