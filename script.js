let dataObj="";
const request = new XMLHttpRequest();
request.open("GET","https://api.covid19api.com/summary");
request.onload = function (e) {
  if (request.readyState === 4) {
    if (request.status === 200) {
      dataObj =JSON.parse(request.responseText);
      console.log(dataObj);
      const ctx = document.getElementById('myChart').getContext('2d');
      const myChart = new Chart(ctx, {
          type: 'bar',
          data: 
          {
            labels: [ 'Total Confirmed','Total Deaths' ],
            datasets: [{
                  label: 'Total Statistics',
                  data: [dataObj.Global.TotalConfirmed,dataObj.Global.TotalDeaths],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.7)',
                      'rgba(75, 192, 192, 0.7)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(75, 192, 192, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: 
          {
            responsive:false,
            plugins:{
            legend:
            {
              display:false
            },
            title:{
              text:"Total Statistics",
              display:true,
              padding:
              {top:10},
              font:
              {
                size: 23,

              }
            }
          }
          }
      });
      const ctx2 = document.getElementById('myChart2').getContext('2d');
      const myChart2 = new Chart(ctx2, {
          type: 'bar',
          data: 
          {
            labels: [ 'New Confirmed','New Deaths' ],
            datasets: [{
                  label: 'Total Statistics',
                  data: [dataObj.Global.NewConfirmed,dataObj.Global.NewDeaths],
                  backgroundColor: [
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)'
                  ],
                  borderColor: [
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: 
          {
            responsive:false,
            plugins:{
            legend:
            {
              display:false
            },
            title:{
              text:"New Statistics",
              display:true,
              padding:
              {top:10},
              font:
              {
                size: 23,

              }
            }
          }
          }
      });
      const ctx3 = document.getElementById('myChart3').getContext('2d');
      const myChart3 = new Chart(ctx3, {
          type: 'bar',
          data: 
          {
            labels: [ 'Total Confirmed','Total Deaths' ],
            datasets: [{
                  label: 'Total Statistics',
                  data: [dataObj.Countries[77].TotalConfirmed,dataObj.Countries[77].TotalDeaths],
                  backgroundColor: [
                      'rgba(99, 193, 50, 0.7)',
                      'rgba(134, 210, 172, 0.7)'
                  ],
                  borderColor: [
                      'rgba(99, 193, 50, 1)',
                      'rgba(134, 210, 172, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: 
          {
            responsive:false,
            plugins:{
            legend:
            {
              display:false
            },
            title:{
              text:"Total Statistics",
              display:true,
              padding:
              {top:10},
              font:
              {
                size: 23,

              }
            }
          }
          }
      });
      const ctx4 = document.getElementById('myChart4').getContext('2d');
      const myChart4 = new Chart(ctx4, {
          type: 'bar',
          data: 
          {
            labels: [ 'New Confirmed','New Deaths' ],
            datasets: [{
                  label: 'Total Statistics',
                  data: [dataObj.Countries[77].NewConfirmed,dataObj.Countries[77].NewDeaths],
                  backgroundColor: [
                    'rgba(187, 190, 100, 0.7)',
                    'rgba(68, 56, 80, 0.7)'
                  ],
                  borderColor: [
                    'rgba(187, 190, 100, 1)',
                    'rgba(68, 56, 80, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: 
          {
            responsive:false,
            plugins:{
            legend:
            {
              display:false
            },
            title:{
              text:"Total Statistics",
              display:true,
              padding:
              {top:10},
              font:
              {
                size: 23,

              }
            }
          }
          }
      });
      const ctx5 = document.getElementById('myChart5').getContext('2d');
      const myChart5 = new Chart(ctx5, {
          type: 'line',
          data: 
          {
            labels: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
            datasets: [{
                  
                  data: [10,10,20,10,01,09,23,23,54,23,24,27,23,25,26,14,23,34,12,13,16,24,35,23,24,34,12,23,37,35],
                  tension: 0.1,
                  borderColor: 'rgb(75, 192, 192)'
              }]
          },
          options: 
          {
            responsive:false,
            plugins:{
            legend:
            {
              display:false
            },
            title:{
              text:"Daily Cases",
              display:true,
              padding:
              {top:10},
              font:
              {
                size: 23,

              }
            }
          }
          }
      });
    } else {
      console.error(request.statusText);
    }
  }
};
request.send();