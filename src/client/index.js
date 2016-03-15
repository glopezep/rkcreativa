import $ from 'jquery'
import Handlebars from 'handlebars'

var source = $('#service-template').html()

function renderService (source, contex) {
  var template = Handlebars.compile(source)
  return template(context)
}
