<?php
  $files = array();
  $i = 0;
  while (array_key_exists('file_'.$i, $_FILES)) {
    if (is_uploaded_file($_FILES['file_'.$i]['tmp_name'])) {
      if (move_uploaded_file($_FILES['file_'.$i]['tmp_name'], "files/".$_FILES['file_'.$i]['name'])) {
        array_push($files, $_FILES['file_'.$i]['tmp_name']);
      }
    }
    $i++;
  }
  echo json_encode($files);