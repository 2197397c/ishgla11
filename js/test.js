var ctx = document.getElementById("barChart");
var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


var line = document.getElementById("lineChart");
var lineChart = new Chart(line,{
    type: "line",
    data: {
        datasets:[{
            data:[55.9415300376713275909423828125,55.95281333662569522857666015625,
                55.96147754229605197906494140625,55.9685935266315937042236328125,
                55.98168999888002872467041015625, 55.9902570582926273345947265625,
                55.9988843835890293121337890625,56.00869867019355297088623046875,
                56.01124995388090610504150390625,55.99978954531252384185791015625,
                55.99224306643009185791015625,55.98413868807256221771240234375,
                55.96955300308763980865478515625,55.96023232676088809967041015625,
                55.948512665927410125732421875],
            backgroundColor: "green",
            borderColor: "purple",

        }]
    }
})