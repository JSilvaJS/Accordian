# Synopsis
The goal is to create an accordian using jQuery and CSS transitions like the image below.
![alt text](https://tiy-learn-content.s3.amazonaws.com/be9f4446-accordian.gif)

# Sample Code
``` javascript
$('.box_2').on('click', function() {
	$('.box_2').toggleClass('slideClass');
});

$('.box_3').on('click', function() {
	$('.box_3').toggleClass('slideClass3');
});
```
# Deployed Code
[Check it here!](http://tiy-2016q1-eh_cosmo-accordian.surge.sh/)
