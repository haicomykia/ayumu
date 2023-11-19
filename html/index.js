$(document).ready(function(){
  
});

/**
 * @see https://stackoverflow.com/questions/12989442/uploading-multiple-files-using-formdata
 */
$("#files").on('input', function(e){
  const fd = new FormData();
  for (let i = 0; i < this.files.length; i++) {
    fd.append(`file_${i}`, this.files[i]);
  }

  $.ajax({
    url: 'upload.php',
    type: 'POST',
    data: fd,
    contentType: false,
    processData: false
  }).done(function(result){
    console.log(result);
  }).fail(function(){

  });
});