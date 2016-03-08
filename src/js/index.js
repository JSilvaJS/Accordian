// Javascript Entry Point
import $ from 'jquery';

$('.box_1').on('click', function() {
	$('.box_2').toggleClass('slideClass');
});
