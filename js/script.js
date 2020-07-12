$.getJSON("/task.json", function(data) {
    p = data['tasks'];
    
    // task status
    var active = 0;
    var closed = 0;
    var deleted = 0;

    // task priority
    var highpriority = 0;
    var normalpriority = 0;
    var lowpriority = 0;
    var onholdpriority = 0;

    // tasks by month
    var jan = 0;
    var feb = 0;
    var mar = 0;
    var apr = 0;
    var may = 0;
    var jun = 0;
    var jul = 0;
    var aug = 0;
    var sep = 0;
    var oct = 0;
    var nov = 0;
    var dec = 0;

    for (var key in p) {

        // task status
        if(p[key]['status'] == "open"){
            active = active + 1;
        }else if(p[key]['status'] == "closed"){
            closed = closed + 1;
        }else if(p[key]['status'] == "deleted"){
            deleted = deleted + 1;
        }

        // task priority
        if(p[key]['priority'] == "1"){
          highpriority = highpriority + 1;
        }else if(p[key]['priority'] == "2"){
          normalpriority = normalpriority + 1;
        }else if(p[key]['priority'] == "3"){
          lowpriority = lowpriority + 1;
        }else if(p[key]['priority'] == "4"){
          onholdpriority = onholdpriority + 1;
        }

        // tasks by month
        var dateadded = moment(p[key]['dateadded'], "MM-DD-YYYY");
        month = (dateadded.get('month'));
        switch (month) {
            case 0:
                jan = jan+1;
                break;
            case 1:
                feb = feb+1;
                break;
            case 2:
                mar = mar+1;
                break;
            case 3:
                apr = apr+1;
                break;
            case 4:
                may = may+1;
                break;
            case 5:
                jun = jun+1;
                break;
            case 6:
                jul = jul+1;
                break;
            case 7:
                aug = aug+1;
                break;
            case 8:
                sep = sep+1;
                break;
            case 9:
                oct = oct+1;
                break;
            case 10:
                nov = nov+1;
                break;
            case 11:
                dec = dec+1;
                break;
        
            default:
                break;
        }
    }

    // task status graph
    new Chart(document.getElementById("pie-chart"), {
        type: 'pie',
        data: {
        labels: ["Otvoreni", "Završeni", "Obrisani"],
        datasets: [{
            label: "Status zahtjeva",
            backgroundColor: ["#0080ff", "#39e600","#ff0000"],
            data: [active, closed, deleted]
        }]
        },
        options: {
        title: {
            display: true,
            text: 'Status zahtjeva',
            responsive: "true"
        }
        }
    });

    // task priority graph
    new Chart(document.getElementById("d-chart"), {
        type: 'doughnut',
        data: {
          labels: ["Visok", "Normalan", "Nizak", "Na čekanju"],
          datasets: [{
            label: "Prioritet zahtjeva",
            backgroundColor: ["#ff0000","#39e600","#0080ff","#5c8a8a"],
            data: [highpriority, normalpriority, lowpriority, onholdpriority]
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Prioritet zahtjeva',
            responsive: "true"
          }
        }
    });

    // tasks by month
    new Chart(document.getElementById("l-chart"), {
        type: 'line',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],
          datasets: [{
            label: "Broj zahtjeva",
            backgroundColor: ["#ffd24d"],
            data: [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Zahtjevi po mjesecima',
            responsive: "true"
          }
        }
    });
});

$.getJSON("/task.json", function(data) {
    p = data['tasks'];
    var pon = 0;
    var uto = 0;
    var sre = 0;
    var čet = 0;
    var pet = 0;
    var sub = 0;
    var ned = 0;

for (var key in p) {
  var dateadded = moment(p[key]['dateadded'], "MM-DD-YYYY");
  day = (dateadded.get('day'));
  console.log(day);
  switch (day) {
      case 0:
          ned = ned+1;
          break;
      case 1:
          pon = pon+1;
          break;
      case 2:
          uto = uto+1;
          break;
      case 3:
          sre = sre+1;
          break;
      case 4:
          čet = čet+1;
          break;
      case 5:
          pet = pet+1;
          break;
      case 6:
          sub = sub+1;
          break;
      default:
          break;
  }
}
new Chart(document.getElementById("l2-chart"), {
    type: 'bar',
    data: {
      labels: ["Pon", "Uto", "Sre", "Čet","Pet","Sub","Ned"],
      datasets: [{
        label: "Broj zahtjeva",
        backgroundColor: ["#d11aff","#d11aff","#d11aff","#d11aff","#d11aff","#d11aff","#d11aff"],
        data: [pon, uto, sre, čet, pet, sub, ned]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Zahtjevi po danima',
        responsive: "true"
      },
    }
});
});