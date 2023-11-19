$(document).ready(function(){
  
});

class FileModel {
  #files = [];
  add(file) {
    this.#files.push(file);
  }
  get getFiles() {
    return this.#files;
  }

  clear() {
    this.#files = [];
  }
}
const files = new FileModel();

/**
 * @see https://stackoverflow.com/questions/12989442/uploading-multiple-files-using-formdata
 */
$("#files").on('input', function(e){
  for (let i = 0; i < this.files.length; i++) {
    files.add(this.files[i]);
  }
});

$("#send").on('click', function(){
  const fd = new FormData();
  for (let i = 0; i < files.getFiles.length; i++) {
    fd.append(`file_${i}`, files.getFiles[i]);
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

  }).always(function(){
    files.clear();
    $("#files").val('');
  });
});