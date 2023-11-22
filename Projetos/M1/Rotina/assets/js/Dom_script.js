function modelo_de_rotina(){
    const main = document.querySelector('.main')
    const childElements = main.children;
    for (let i = childElements.length - 1; i >= 0; i--) {
        const child = childElements[i];
        child.tagName.toLowerCase() !== 'script' ? main.removeChild(child) : ''
        }
    main.append(button = document.createElement('button'), form = document.createElement('form'));
    button.className = 'button analise';
    button.innerText = 'Análise Quantitativa';
    button.type = 'button';
    button.addEventListener('click', analise);
    form.className = 'container form';
    form.action = '';
    let x = 22
    for (let i = 0; i < 4; i++){
        form.append(div = document.createElement('div'));
        i == 0 || i == 1? div.className = 'container div pequeno' : div.className = 'container div'
        div.append(h3 = document.createElement('h3'))
        i == 0 ? h3.innerText = 'Horário inicio' : i == 1 ? h3.innerText = 'Horário fim' : i == 2 ? h3.innerText = 'Atividade' : h3.innerText = 'Observação'
        if (i != 3){
            for(let j = 0; j < 13; j++, x++){
                div.append(input = document.createElement('input'));
                input.id = x 
                input.type = 'text'
                input.addEventListener('input', salvartexto)
                input.value = localStorage.getItem(`Texto ${x}`) || arr[x-1];
        }} else {
            for(let j = 0; j < 13; j++, x++){
                div.append(textarea = document.createElement('textarea'));
                textarea.id = x 
                textarea.addEventListener('input', salvartexto)
                textarea.value = localStorage.getItem(`Texto ${x}`) || arr[x-1];
}}}}
function analise() {
    const main = document.querySelector('.main')
    const childElements = main.children;
    for (let i = childElements.length - 1; i >= 0; i--) {
        const child = childElements[i];
        child.tagName.toLowerCase() !== 'script' ? main.removeChild(child) : ''
        }
    main.append(button = document.createElement('button'), form = document.createElement('form'), div = document.createElement('div'));
    button.className = 'button modelo';
    button.innerText = 'Modelo de rotina';
    button.type = 'button';
    button.addEventListener('click', modelo_de_rotina);
    form.className = 'container form';
    form.action = '';
    div.className = 'container graph'
    div.append(canvas = document.createElement('canvas'))
    canvas.className = 'canvagraph'
    canvas.id = 'grafico'
    canvas.innerText = 'gráfico demonstrativo'
    let x = 1
    for (let i = 0; i < 3; i++){
        form.append(div = document.createElement('div'));
        div.className = 'container div'
        div.append(h3 = document.createElement('h3'))
        i == 0 ? h3.innerText = 'Atividade' : i == 1 ? h3.innerText = 'Horas gastas por dia (24h)' : h3.innerText = 'Horas gastas por semana (120h)'
            for(let j = 0; j < 7; j++, x++){
                div.append(input = document.createElement('input'));
                input.id = x 
                input.type = 'text'
                input.addEventListener('input', salvartexto)
                input.value = localStorage.getItem(`Texto ${x}`) || arr[x-1];
        }}
    const graph = new Chart(document.getElementById('grafico').getContext('2d'), {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
            label: "Diario",
            data: [],
            backgroundColor: 'rgba(0, 0, 255, 0.5)',
            borderColor: 'rgba(0, 0, 0, )',
            borderWidth: 1,
            }, {
            label: "Semanal",
            data: [],
            backgroundColor: 'rgba(0, 0, 255, 0.5)',
            borderColor: 'rgba(0, 0, 0, )',
            borderWidth: 1  
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true
    }});    
    { //for settin
        for(let i = 1; i < 8; i++)
          graph.data.labels.push(document.getElementById(i).value)
        for(let i = 8; i < 15; i++)
          graph.data.datasets[0].data.push(document.getElementById(i).value)
        for(let i = 15; i < 22; i++)
          graph.data.datasets[1].data.push(document.getElementById(i).value)
          graph.data.datasets[1].hidden = true
        graph.update();
    }
    graph.legend.options.onClick = function(e, legendItem, legend){
        const index = legendItem.datasetIndex;
        const meta = graph.getDatasetMeta(index);
        const datasetToToggle = graph.getDatasetMeta(index === 0 ? index + 1 : index - 1);
        if (meta.hidden){
            meta.hidden = false;
            datasetToToggle.hidden ? datasetToToggle.hidden = true : datasetToToggle.hidden = true
        } else {
            meta.hidden = true
            datasetToToggle.hidden ? datasetToToggle.hidden = false : datasetToToggle.hidden = false
        }
        graph.update();
    };
}