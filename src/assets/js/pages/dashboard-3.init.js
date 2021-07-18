!function(a){"use strict";var e=function(){this.$body=a("body"),this.charts=[]};e.prototype.respChart=function(e,r,t,o){var n=e.get(0).getContext("2d"),i=a(e).parent();return function(){var s;switch(e.attr("width",a(i).width()),r){case"Line":s=new Chart(n,{type:"line",data:t,options:o});break;case"Doughnut":s=new Chart(n,{type:"doughnut",data:t,options:o});break;case"Pie":s=new Chart(n,{type:"pie",data:t,options:o});break;case"Bar":s=new Chart(n,{type:"bar",data:t,options:o});break;case"Radar":s=new Chart(n,{type:"radar",data:t,options:o});break;case"PolarArea":s=new Chart(n,{data:t,type:"polarArea",options:o})}return s}()},e.prototype.initCharts=function(){var e=[];if(a("#line-chart-example").length>0){e.push(this.respChart(a("#line-chart-example"),"Line",{labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Current Week",backgroundColor:"rgba(26, 128, 156, 0.3)",borderColor:"#1abc9c",data:[32,42,42,62,52,75,62]},{label:"Previous Week",fill:!0,backgroundColor:"transparent",borderColor:"#f1556c",borderDash:[5,5],data:[42,58,66,93,82,105,92]}]},{maintainAspectRatio:!1,legend:{display:!1},tooltips:{intersect:!1},hover:{intersect:!0},plugins:{filler:{propagate:!1}},scales:{xAxes:[{reverse:!0,gridLines:{color:"rgba(0,0,0,0.05)"}}],yAxes:[{ticks:{stepSize:20},display:!0,borderDash:[5,5],gridLines:{color:"rgba(0,0,0,0)",fontColor:"#fff"}}]}}))}if(a("#bar-chart-example").length>0){e.push(this.respChart(a("#bar-chart-example"),"Bar",{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales Analytics",backgroundColor:"#4a81d4",borderColor:"#4a81d4",hoverBackgroundColor:"#4a81d4",hoverBorderColor:"#4a81d4",data:[65,59,80,81,56,89,40,32,65,59,80,81]},{label:"Dollar Rate",backgroundColor:"#e3eaef",borderColor:"#e3eaef",hoverBackgroundColor:"#e3eaef",hoverBorderColor:"#e3eaef",data:[89,40,32,65,59,80,81,56,89,40,65,59]}]},{maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{gridLines:{display:!1},stacked:!1,ticks:{stepSize:20}}],xAxes:[{barPercentage:.7,categoryPercentage:.5,stacked:!1,gridLines:{color:"rgba(0,0,0,0.01)"}}]}}))}if(a("#pie-chart-example").length>0){e.push(this.respChart(a("#pie-chart-example"),"Pie",{labels:["Direct","Affilliate","Sponsored","E-mail"],datasets:[{data:[300,135,48,154],backgroundColor:["#6658dd","#fa5c7c","#4fc6e1","#ebeff2"],borderColor:"transparent"}]},{maintainAspectRatio:!1,legend:{display:!1}}))}if(a("#donut-chart-example").length>0){e.push(this.respChart(a("#donut-chart-example"),"Doughnut",{labels:["Direct","Affilliate","Sponsored"],datasets:[{data:[128,78,48],backgroundColor:["#6c757d","#1abc9c","#ebeff2"],borderColor:"transparent",borderWidth:"3"}]},{maintainAspectRatio:!1,cutoutPercentage:60,legend:{display:!1}}))}if(a("#polar-chart-example").length>0){e.push(this.respChart(a("#polar-chart-example"),"PolarArea",{labels:["Direct","Affilliate","Sponsored","E-mail"],datasets:[{data:[251,135,48,154],backgroundColor:["#4a81d4","#fa5c7c","#4fc6e1","#ebeff2"],borderColor:"transparent"}]}))}if(a("#radar-chart-example").length>0){e.push(this.respChart(a("#radar-chart-example"),"Radar",{labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"Desktops",backgroundColor:"rgba(57,175,209,0.2)",borderColor:"#39afd1",pointBackgroundColor:"#39afd1",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"#39afd1",data:[65,59,90,81,56,55,40]},{label:"Tablets",backgroundColor:"rgba(161, 127, 224,0.2)",borderColor:"#a17fe0",pointBackgroundColor:"#a17fe0",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"#a17fe0",data:[28,48,40,19,96,27,100]}]},{maintainAspectRatio:!1}))}return e},e.prototype.init=function(){var e=this;Chart.defaults.global.defaultFontFamily='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',e.charts=this.initCharts(),a(window).on("resize",function(r){a.each(e.charts,function(a,e){try{e.destroy()}catch(a){}}),e.charts=e.initCharts()})},a.Dashboard3=new e,a.Dashboard3.Constructor=e}(window.jQuery),function(a){"use strict";a.Dashboard3.init()}(window.jQuery);