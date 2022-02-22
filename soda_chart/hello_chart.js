let canvas = document.querySelector('#soda-chart')
let context = canvas.getContext('2d')

let soda_chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: ['Coke', 'Pepsi', 'Either', 'Neither'],
        datasets: [ {
            label: 'Number of votes',
            data: [10, 14, 7, 10],
            backgroundColor: ['red', 'blue', 'green', 'yellow']
        } ]
    },
    options: {
        scales: {
            yAxes: [ {
                ticks: {
                    beginAtZero: true
                }
            } ]
        }
    }
})