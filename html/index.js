$(document).ready(function(){
  
});

/**
 * @see https://stackoverflow.com/questions/12989442/uploading-multiple-files-using-formdata
 */
$("#files").on('input', function(e){
  console.log(this.files);
  const fd = new FormData();
  for (let i = 0; i < this.files.length; i++) {
    fd.append('files', this.files[i]);
  }

  console.log([...fd.entries()]);
});