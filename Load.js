<div id='loadhalaman'>
<div class='loadball'/>
<div class='loadball-2'/>
</div>
<script type='text/javascript'>
$(function() {
  var siteURL = "http://" + top.location.host.toString();
  var $internalLinks = $("a[href^='" + siteURL + "'], a[href^='/'], a[href^='./'], a[href^='../']");
  $internalLinks.click(function() {
    $('#loadhalaman').fadeIn(1500).delay(6000).fadeOut(1000);
  });
  $('#loadhalaman').click(function() {
    $(this).hide();
  });
</script>
