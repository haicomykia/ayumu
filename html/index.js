$(document).ready(function(){
  
});

$("#files").on('input', function(e){
  console.log(this.files);
  const fd = new FormData();
  for (let i = 0; i < this.files.length; i++) {
    fd.append('files', this.files[i]);
  }

  console.log([...fd.entries()]);
});