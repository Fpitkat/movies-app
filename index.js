$('form').on('submit', function (e) {
  e.preventDefault()
  const title = $('#title').val()
  const rating = $('#rating').val()

  if (title.length < 2) return
  $('#main').append(`<p>${title} has a rating of ${rating}</p>`)
  $('#main').append(`<button class='btn-remove'>X</button>`)
})

$('#main').on('click', function (e) {
  console.log(e.target)

  $(e.target).prev('p').remove()
  $(e.target).remove()
})
