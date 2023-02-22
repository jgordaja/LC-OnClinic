$(document).ready(function() { 
    // Для кожного пункту меню, який матиме своє підменю, 
    // потрібно для посилання задати id
    // щоб відкривати саме потрібне підменю 
    $('#menu_info').click(function() { 
        // відкрити/закрити потрібне підменю
        $('#menu_info').next().toggleClass('active'); 
        // закрити всі інші підменю, якщо вони відкриті 
        // ...
    })
    
    // // Приклад, якшо кілька підменю:
    // $('#menu_cite').click(function() {
    //     // закрити всі інші підменю, якщо вони відкриті
    //     $('#menu_info').next().removeClass('active'); 
    //     // відкрити/закрити підменю
    //     $('#menu_cite').next().toggleClass('active'); 
    // })
    // $('#menu_info').click(function() { 
    //     // відкрити/закрити потрібне підменю
    //     $('#menu_info').next().toggleClass('active'); 
    //     // закрити всі інші підменю, якщо вони відкриті
    //     $('#menu_cite').next().removeClass('active'); 
    // })
});