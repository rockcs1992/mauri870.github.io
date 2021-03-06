import Vue from 'vue'

Vue.filter('uppercase', (value) => {
  return value.toUpperCase()
})

Vue.filter('shuffleArray', (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
})
