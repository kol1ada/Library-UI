import './lib/lib'
import $ from './lib/lib'

$('div').hide().show() // for Test
$('button').on('click', function () {
    $(this).toggleClass('active')
})