const readline = require('readline');
const fs = require('fs');
var i=0;
var header =[];
var jsonData=[];
var tempData={};
var isHeader=true;
var indexParticulars;
var indexYear13;
var particulars;
var Production;
var oilseed=[];

function populationChart(particulars,Production)
{
 this.particulars=particulars;
 this.Production=Production;
};

  // Read the file

  const rl = readline.createInterface({
    input: fs.createReadStream('../csv/Production-Department_of_Agriculture_and_Cooperation.csv')
  });

// Read content line by line sperated by comma

rl.on('line', function(line) {
  var lineRecords= line.trim().split(',');;
  if(i<1){
   indexparticulars=lineRecords.indexOf('Particulars');
   console.log(indexparticulars);
   indexYear13=lineRecords.indexOf(' 3-2013');
   console.log(indexYear13);
   i++;
 }
 else{
   particulars=lineRecords[indexparticulars];
   Production=lineRecords[(indexYear13+1)];
   if(particulars.includes("Oilseeds")){
    oilseed.push( new populationChart(particulars,Production));
    oilseed.sort(function(a, b){
      if (b.Production==='NA'){
        b.Production=0;
      }
      return parseFloat(b.Production)-parseFloat(a.Production)});
  }

      //To write in json file
      fs.writeFileSync("../json/oilseedcrop.json",JSON.stringify(oilseed),encoding="utf8");
    }
  });