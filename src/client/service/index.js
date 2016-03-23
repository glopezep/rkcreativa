import $ from 'jquery'

var $services = $('.Services')
var $servicesContainer = $services.find('.u-container-flex')
var $serviceHeader = $servicesContainer.find('.Service-item .Service-header')
var html = ''
var template = `<div class="Service-item">
    <div class="Service-header">
      <figure class="Service-image"><img src=":backgroundIcon:" alt=""></figure>
      <h1 class="Service-title">:title:</h1>
    </div>
    <div class="Service-description">
      <p class="Service-text">:text:</p>
    </div>
    <ul class="Service-typeList">
      <li class="Service-type">:type1:</li>
      <li class="Service-type">:type2:</li>
      <li class="Service-type">:type3:</li>
      <li class="Service-type">:type4:</li>
      <li class="Service-type">:type5:</li>
      <li class="Service-type">:type6:</li>
    </ul>
  </div>`

function renderService () {
  return Promise.resolve($.getJSON('./data.json'))
}

renderService()
  .then(services => {
    services.forEach(service => {
      var serviceTemplate = template
        .replace(':title:', service.title)
        .replace(':text:', service.text)
        .replace(':type1:', service.types[0])
        .replace(':type2:', service.types[1])
        .replace(':type3:', service.types[2])
        .replace(':type4:', service.types[3])
        .replace(':type5:', service.types[4])
        .replace(':type6:', service.types[5])
        .replace(':backgroundIcon:', service.backgroundIcon)
      html = html + serviceTemplate
    })
  })
  .then(() => {
    $servicesContainer.html(html)
  })
  .catch(err => { console.log(err) })
