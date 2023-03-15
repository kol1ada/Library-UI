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

$('#first').on('click', () => {
    $('div').eq(1).fadeOut(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeOut(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeOut(800);
});