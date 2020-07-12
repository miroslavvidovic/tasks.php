<?php 

?>


</div><!-- div wrap -->
<script>
    var picker = new Pikaday({
        field: document.getElementById('datepicker'),
        format: 'M-D-YYYY',
        toString(date, format) {
            // you should do formatting based on the passed format,
            // but we will just return 'D/M/YYYY' for simplicity
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        },
        parse(dateString, format) {
            // dateString is the result of `toString` method
            const parts = dateString.split('/');
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10) - 1;
            const year = parseInt(parts[2], 10);
            return new Date(year, month, day);
        },
        firstDay:1,
        i18n: {
            previousMonth : 'Prethodni mjesec',
            nextMonth     : 'Naredni mjesec',
            months        : ['Januar','Februar','Mart','April','Maj','Jun','Jul','Avgust','Septembar','Oktobar','Novembar','Decembar'],
            weekdays      : ['Nedelja','Ponedeljak','Utorak','Srijeda','Četvrtak','Petak','Subota'],
            weekdaysShort : ['Ned','Pon','Uto','Sri','Čet','Pet','Sub']
        },
     });
</script>

</div>
</body>
<script type="text/javascript" src="js/script.js"></script>                                  
</html>
