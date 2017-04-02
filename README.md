# Equal-Height
jQuery plugin - Simple responsive equal heights

## Usage
### Initialize on load
```
$(window).on('load',function() {
  equalheight('.elem .subelem');
  equalheight('.elem');
});
```
### Initialize on window resize
```
$(window).resize(function(){
  equalheight('.elem .subelem');
  equalheight('.elem');
});
```
