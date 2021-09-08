document.addEventListener("DOMContentLoaded", function() {
    try{
        $('.goods-slider').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1360,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
              },
              {
                breakpoint: 830,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
              },
              {
                breakpoint: 580,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
              }
            ]
          });
          $('.banner-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            dots: true
          });
          $('.slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1360,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
              },
              {
                breakpoint: 830,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
              },
              {
                breakpoint: 580,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
              }
            ]
          });
        } catch (e) {}
        try{
          function tabs (tabsItems, tabsItem, tabsItemContent, acteveClass) {
              const tabs = document.querySelectorAll(tabsItems),
              tab = document.querySelector(tabsItem),
              tabsContent = document.querySelectorAll(tabsItemContent);
          if(tabs){
              tabs.forEach((tab) => 
                  tab.addEventListener('click', function(e){
                      e.preventDefault();
                      const id = e.target.getAttribute('href').replace('#', '');

                      tabs.forEach((child) => child.classList.remove(acteveClass));
                      tabsContent.forEach((child) => child.classList.add('hide'));
                      
                      tab.classList.add(acteveClass);
                      document.getElementById(id).classList.remove('hide');
                  })
                  );
                  if(tab){
                      tab.click();
                  }

      }; }
            tabs('.tabs__btn', '.tabs__btn', '.tabs-content__item', 'tabs__btn-active')
      } catch (e) {}
});