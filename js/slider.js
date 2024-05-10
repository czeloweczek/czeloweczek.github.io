var slides = document.querySelectorAll('.slide');
      var currentSlide = 0;
      
      function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        slides[index].classList.add('active');
        currentSlide = index;
      }
      
      showSlide(currentSlide);
      
      // Для добавления функциональности кнопке перехода на следующий слайд
      var nextButton = document.querySelector('.next-btn');
      nextButton.addEventListener('click', function() {
        var nextSlide = (currentSlide + 1) % slides.length;
        showSlide(nextSlide);
      });
      
      // Для добавления функциональности кнопке перехода на предыдущий слайд
      var prevButton = document.querySelector('.prev-btn');
      prevButton.addEventListener('click', function() {
        var prevSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevSlide);
      });


      