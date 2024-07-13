var listItems = document.querySelectorAll('.menu ul.ghc li');

        listItems.forEach(function(item) {
            item.addEventListener('mouseenter', function() {
                item.style.transform = 'rotate(10deg)';
                item.style.fontSize = '1.5em';
                item.style.color = 'green';
            });

            item.addEventListener('mouseleave', function() {
                item.style.transform = 'rotate(0deg)';
                item.style.fontSize = '1em';
                item.style.color = '';
            });
        });

        var logo = document.querySelector('.logo');

        logo.addEventListener('mouseenter', function() {
            logo.classList.add('rotate');
            logo.style.fontSize = '20px';
        });

        logo.addEventListener('mouseleave', function() {
            logo.classList.remove('rotate');
             logo.style.fontSize = '';
        });