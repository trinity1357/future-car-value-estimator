
var presentvaluechart = document.getElementById('presentvalue');
var interestchart = document.getElementById('interest_rate');
var timechart = document.getElementById('number_of_years');
var pmtchart = document.getElementById('pmt');
var presentValueWithPMT;

function future_value() {
    if (document.getElementById('end').checked == false && document.getElementById('begin').checked == false) {
        futureValueCompileWithPMT = pmtchart.value * [((1 + (interestchart.value / 100))**timechart.value - 1) / (interestchart.value / 100)] + presentvaluechart.value * ((1 + (interestchart.value / 100))**timechart.value);
    presentValueWithPMT = futureValueCompileWithPMT / (Math.pow(1 + interestchart.value/ 100, timechart.value)); // if pmt is provided.    
    }
        // type 0 end
        if (document.getElementById('end').checked == true) {
            futureValueCompileWithPMT = pmtchart.value * [((1 + (interestchart.value / 100))**timechart.value - 1) / (interestchart.value / 100)] + presentvaluechart.value * ((1 + (interestchart.value / 100))**timechart.value);
            presentValueWithPMT = futureValueCompileWithPMT / (Math.pow(1 + interestchart.value/ 100, timechart.value)); // if pmt is provided.    
        }
        // type 0 end
        // type 1 beginning period
        if (document.getElementById('begin').checked == true) {
            futureValueCompileWithPMT = presentvaluechart.value*((1 + (interestchart.value/100))**timechart.value) + (pmtchart.value/(interestchart.value/100)) * ((1 + (interestchart.value/100))**timechart.value - 1)*(1 + (interestchart.value/100)); // working beginning formula
            presentValueWithPMT = futureValueCompileWithPMT / (Math.pow(1 + interestchart.value/ 100, timechart.value)); // if pmt is provided.    
        }
        // type 1 beginning period
    document.getElementById('fv_result').innerHTML = futureValueCompileWithPMT;
}

function future_value_clear() {
    $("input[type=number]").val('');
}

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [' Present Value (%)', ' Interest (%)', ' Time (%)', ' PMT (%)'],
        datasets: [{
            data: [presentvaluechart.value, interestchart.value, timechart.value,pmtchart.value,25,25,25,25],
            backgroundColor: [
                'rgba(48, 252, 246)',
                'rgba(252, 125, 116)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(20,20,20)',
            ],
            borderWidth: 4,
        }],
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});

function updatechart() {
  var updatechartvalues = [ ((parseFloat(presentvaluechart.value)) / ((parseFloat(interestchart.value) + (parseFloat(timechart.value) + ((parseFloat(presentvaluechart.value) + ((parseFloat(pmtchart.value))))))))) * 100, ((parseFloat(interestchart.value)) / ((parseFloat(interestchart.value) + (parseFloat(timechart.value) + ((parseFloat(presentvaluechart.value) + ((parseFloat(pmtchart.value))))))))) * 100, ((parseFloat(timechart.value)) / ((parseFloat(interestchart.value) + (parseFloat(timechart.value) + ((parseFloat(presentvaluechart.value) + ((parseFloat(pmtchart.value))))))))) * 100, ((parseFloat(pmtchart.value)) / ((parseFloat(interestchart.value) + (parseFloat(timechart.value) + ((parseFloat(presentvaluechart.value) + ((parseFloat(pmtchart.value))))))))) * 100];
  myChart.data.datasets[0].data = updatechartvalues;
  myChart.update();
}