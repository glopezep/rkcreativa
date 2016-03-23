import $ from 'jquery'

var $menuOfCanvas = $('.AppHeader-menuOfCanvas')
var $appHeaderButton = $('.AppHeader-button')
var $appHeaderbuttonCloset = $('.AppHeader-buttonCloset')

$($appHeaderButton).on('click', showHideMenu)
$($appHeaderbuttonCloset).on('click', showHideMenu)

function showHideMenu () {
  $menuOfCanvas.toggleClass('is-Active')
  return false
}
