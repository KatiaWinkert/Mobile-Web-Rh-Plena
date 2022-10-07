//$(document).ready(function(){}); > essa instrução é utilizada sempre quando se tem o Jquery para caregar quando o script estiver pronto
$(document).ready(function () {
  //Progress bar > parte da bibliteca para fazer um circulo animado.
  let containerA = document.getElementById('circleA')

  let circleA = new ProgressBar.Circle(containerA, {
    color: '#64DAF9',
    strokeWidth: 8,
    duration: 1400,
    from: { color: '#AAA' },
    to: { color: '#65daf9' },

    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color)

      let value = Math.round(circle.value() * 60)

      circle.setText(value)
    },
  })

  let containerB = document.getElementById('circleB')

  let circleB = new ProgressBar.Circle(containerB, {
    color: '#64DAF9',
    strokeWidth: 8,
    duration: 1600,
    from: { color: '#AAA' },
    to: { color: '#65daf9' },

    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color)

      let value = Math.round(circle.value() * 254)

      circle.setText(value)
    },
  })

  let containerC = document.getElementById('circleC')

  let circleC = new ProgressBar.Circle(containerC, {
    color: '#64DAF9',
    strokeWidth: 8,
    duration: 1900,
    from: { color: '#AAA' },
    to: { color: '#65daf9' },

    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color)

      let value = Math.round(circle.value() * 30)

      circle.setText(value)
    },
  })

  let containerD = document.getElementById('circleD')

  let circleD = new ProgressBar.Circle(containerD, {
    color: '#64DAF9',
    strokeWidth: 8,
    duration: 2100,
    from: { color: '#AAA' },
    to: { color: '#65daf9' },

    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color)

      let value = Math.round(circle.value() * 600)

      circle.setText(value)
    },
  })
  //iniciando o loader quando o usuario chega no elemento
  let dataAreaOffset = $('#data-area').offset()
  let stop = 0

  $(window).scroll(function (e) {
    let scroll = $(window).scrollTop()
    if (scroll > dataAreaOffset.top - 500 && stop == 0) {
      circleA.animate(1.0)
      circleB.animate(1.0)
      circleC.animate(1.0)
      circleD.animate(1.0)

      stop = 1
    }
  })
  //Parallax 
setTimeout(function(){

$('#data-area').parallax({i.png' })
}, 250)

})
