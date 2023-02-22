$(document).ready(function() {
    
    $('#burger').click(function() {
        // відкрити/закрити меню
        $('#sidebar__mobile').toggleClass('active');
        // змінити бургер на Х і навпаки
        $('#burger').toggleClass('is-active');
        // зафіксувати body щоб не скролився коли визвано меню
        $('body').toggleClass('lock');
    })

    // Для кожного пункту меню, який матиме своє підменю, 
    // потрібно для посилання задати id
    // щоб відкривати саме потрібне підменю 
    $('#close_burger_menu_info').click(function() { 
        // закрити підменю
        $('#close_burger_menu_info').parent().parent().removeClass('active'); 
    })

    $('#burger_menu_info').click(function() { 
        // відкрити потрібне підменю
        $('#burger_menu_info').next().addClass('active'); 
    })

    // якщо нажато пункт меню
    // $('.menu__item').click(function() {
    //     // переходимо кудись або ще якийсь код
    //     // your code...
    //     // закрити відкрите меню
    //     $('#sidebar__mobile').toggleClass('active');
    //     // змінити Х на бургер
    //     $('#burger').toggleClass('is-active');
    //     // прибрати lock-клас у body
    //     $('body').toggleClass('lock');
    // })


});