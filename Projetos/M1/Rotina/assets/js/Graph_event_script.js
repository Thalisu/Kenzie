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
      backgroundColor: 'rgba(4, 100, 4, 0.5)',
      borderColor: 'rgba(0, 0, 0, )',
      borderWidth: 1  
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true
}});
{ //for settin
for(let i = 1; i < 22; i++){
  document.getElementById(i).value = localStorage.getItem(`Texto ${i}`) || arr[i-1];
  document.getElementById(i).addEventListener('input', salvartexto);
}
for(let i = 1; i < 8; i++)
  graph.data.labels.push(document.getElementById(i).value)
for(let i = 8; i < 15; i++)
  graph.data.datasets[0].data.push(document.getElementById(i).value)
for(let i = 15; i < 22; i++)
  graph.data.datasets[1].data.push(document.getElementById(i).value)
  graph.data.datasets[1].hidden = true
graph.update();
}
function salvartexto(){
  const id = this.id
  const texto = document.getElementById(id).value;
  localStorage.setItem(`Texto ${id}`, texto);
  if (id < 22){
    if (id < 15){
      if (id < 8){
        graph.data.labels[id-1] = document.getElementById(id).value;
        graph.update();
        return
      }
      graph.data.datasets[0].data[id-8] = texto;
      graph.update();
      return
    }
    graph.data.datasets[1].data[id-15] = texto;
    graph.update();
    return
}}
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
console.log(graph);
