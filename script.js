function readURL(input, output) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $(output).attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}

function changeImage(i, o) {
  $(i).change(function(){
    readURL(this, o);
  });
}

changeImage('#imgInp', '#mainImg');
changeImage('#imgInp2', '#agtImg');
changeImage('#imgInp3', '#feat1');
changeImage('#imgInp4', '#feat2');
changeImage('#imgInp5', '#feat3');