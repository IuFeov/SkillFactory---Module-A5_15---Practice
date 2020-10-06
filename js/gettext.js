/*Work from jsfiddle, DON'T work in browsers
//Save request url and output element id in the variables
var url = 'https://api.jsonbin.io/b/5f1759b5c1edc466175baf5f';
var textArray; //String array
var textBefore; //Recovered text before
$("#create").click(function() {
//Getting JSON file
$.getJSON( url, function( data ) {
  //Circle for object elements
  $.each( data, function( title, text )	{
  textArray = text;
  return textArray;
  });
  */
//VARIABLES
const textObjectBefore = {
  "text": [`Жили-были {var1} да {var2}. `, `Была у них {var3}. `, `Снесла {var3} {var4}, да не простое - золотое. `, `{var1} - бил, бил - не разбил, `, `{var2} - била, била - не разбила. `, `{var5} бежала, {var6} махнула, {var4} упало и разбилось. `, `{var1} плачет, {var2} плачет, а {var3} кудахчет: `, `- {speach}!`]};
const textArrayBefore = textObjectBefore.text;
//Getting text from text array
const textOutput = textArrayBefore.join("");

//WORKING initial output text w/var 
//Visualising the text in body container on click
$("#create").click( textBeforeOn );

//FUNCTION for putting a text into container
function textBeforeOn() {
$("#toggle").text( textOutput );
}
/* DON't work correctly for getting right teatArrayAfter for "``"
$.each(textArrayBefore, function(index, value)	{
  	//newValue.replace(new RegExp("{",'g'),"${", newValue);
    let newValue = value.replace(/{/g,'${');
    textArrayAfter.push(newValue);
    return textArrayAfter;
    });
*/
//Text inputs working and output replaced text
$('#insert').on('click', function() {
  const var1 = $('#var1').val();
  const var2 = $('#var2').val();
  const var3 = $('#var3').val();
  const var4 = $('#var4').val();
  const var5 = $('#var5').val();
  const var6 = $('#var6').val();
  const speach = $('#var7').val();
  const textObjectAfter = {
    "text": [`Жили-были ${var1} да ${var2}. `, `Была у них ${var3}. `, `Снесла ${var3} ${var4}, да не простое - золотое. `, `${var1} - бил, бил - не разбил, `, `${var2} - била, била - не разбила. `, `${var5} бежала, ${var6} махнула, ${var4} упало и разбилось. `, `${var1} плачет, ${var2} плачет, а ${var3} кудахчет: `, `- ${speach}!`]};
  $("#toggle").html(textObjectAfter.text);
})