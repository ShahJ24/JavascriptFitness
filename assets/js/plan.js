const _result = document.getElementById("result");
const _dateprint = document.getElementById("dateprint");
let _datepicker = document.getElementById("datepicker").value;

//CHARTS
var ctx = document.getElementById("myChart").getContext('2d');

    function adddata() {
      let yoga = document.getElementById("yoga").value;
      let sports = document.getElementById("sports").value;
      let bicycling = document.getElementById("bicycling").value;
      let swimming = document.getElementById("swimming").value;
      let jogging = document.getElementById("jogging").value;
      let workout = document.getElementById("workout").value;
      let others = document.getElementById("others").value;

      
      
    //  myChart.data.labels[1] = testName1;
      myChart.data.datasets[0].data[0] = yoga;
      myChart.data.datasets[0].data[1] = sports;
      myChart.data.datasets[0].data[2] = bicycling;
      myChart.data.datasets[0].data[3] = swimming;
      myChart.data.datasets[0].data[4] = jogging;
      myChart.data.datasets[0].data[5] = workout;
      myChart.data.datasets[0].data[6] = others;
      myChart.update();
    }

    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["yoga","sports","bicycling","swimming","jogging","workout","others"],
        datasets: [{
          label: 'Population',
          data: [yoga,
            sports,
            bicycling,
            swimming,
            jogging,
            workout,
            others
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 120, 90, 0.6)'
          ],
          borderColor: [
          'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 120, 90, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {

      }
    });
    
    _result.onclick = adddata;
