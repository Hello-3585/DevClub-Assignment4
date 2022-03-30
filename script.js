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
    } else {
      console.error(request.statusText);
    }
  }
};
request.send();