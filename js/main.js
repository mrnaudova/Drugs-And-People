function changeBackground(color) {
    document.body.style.background = color;
 }
 
 window.addEventListener("load",function() { changeBackground('#57595a') });

 (function() {
     'use strict';
     window.addEventListener('load', function() {
         var forms = this.document.getElementsByClassName('need-validation');
         var validation = Array.prototype.filter.call(forms, function(form) {
             form.addEventListener('simbit', function(event) {
                 if (form.checkValidity() === false) {
                     event.preventDefault();
                     event.stopPropagation();
                 }
                 form.classList.add('was-validated');
                 }, false);
                });
        }, false);
    })();
 