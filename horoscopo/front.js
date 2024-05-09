window.addEventListener('load', function (e) {
    const monthList = [
        { name: 'enero', number: '01' },
        { name: 'febrero', number: '02' },
        { name: 'marzo', number: '03' },
        { name: 'abril', number: '04' },
        { name: 'mayo', number: '05' },
        { name: 'junio', number: '06' },
        { name: 'julio', number: '07' },
        { name: 'agosto', number: '08' },
        { name: 'septiembre', number: '09' },
        { name: 'octubre', number: '10' },
        { name: 'noviembre', number: '11' },
        { name: 'diciembre', number: '12' }
    ];
    const dayList = ['0', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
    let hoy = new Date();
    let num = hoy.getDate();
    let day = dayList[hoy.getDay()];
    let month = monthList[hoy.getMonth()];
    let year = hoy.getFullYear();

    let div = document.querySelectorAll('.box');
    div.forEach(item => {
        let sign = item.getAttribute("id");
        let content = item.innerHTML;
        item.innerHTML = '<a target="_blank" rel="noopener noreferrer" href= "https://elperfil.pe/tendencias/horoscopo-de-' + sign + '-hoy-' + day + '-' + num + '-de-' + month.name + '-de-' + year + '/" style="color: #212529; text-decoration: none">' + content + '</a>';
    })
})
