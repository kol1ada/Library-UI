import './lib/lib'
import $ from './lib/lib'

$('div').hide().show() // for Test
$('button').on('click', function () {
    // $(this).toggleClass('active')
    $('div').eq(1).toggleClass('nobody')
})

$('div').click(function () {
    console.log($(this).index())
})

console.log($('button').html('Hello'))
console.log($('div').eq(2).find('.test'))