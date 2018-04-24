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

function renderImages(inputElement, outputImage){
  domtoimage.toJpeg(document.getElementById(inputElement), { quality: 0.95 })
    .then(function(dataUrl) {
      console.log(dataUrl);
      var image = document.getElementById(outputImage);
      image.src = dataUrl;
    });
}

document.getElementById('render').addEventListener("click", function(){
  renderImages("front", "front-result");
  renderImages("back", "back-result");
});

changeImage('#imgInp', '#mainImg');
changeImage('#imgInp2', '#agtImg');
changeImage('#imgInp2', '#agtImg2');
changeImage('#imgInp3', '#feat1');
changeImage('#imgInp4', '#feat2');
changeImage('#imgInp5', '#feat3');
