//$(document).ready(function(){}); > essa instrução é utilizada sempre quando se tem o Jquery para caregar quando o script estiver pronto
$(document).ready(function () {
  //Progress bar > parte da bibliteca para fazer um circulo animado.
  let containerA = document.getElementById('circleA')

  let circleA = new ProgressBar.Circle(containerA, {
    color: '#64DAF9',
    stroke: 8,
    duration: 1400,
    from: { color: '#AAA' },
    to: { color: '#650AF9' },

    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color)

      let value = Math.round(circle.value() * 60)

      circle.setText(value)
    },
  })
  circleA.animate(1.0)
})
