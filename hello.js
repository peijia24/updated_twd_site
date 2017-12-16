// Javascript Document for Landing Page //

const $projectLink = $('.project-link');
const $projectBoxes = $('.section-box');



$projectLink.click(function(e){
 
  e.preventDefault();
 
  const theID = $(this).attr('href');
  
  const $projectBox = $(theID);
  
  console.log($projectBoxes);

  $projectBoxes.css('z-index', '-1');  

  $projectBox.css('z-index', '2');
   
});
