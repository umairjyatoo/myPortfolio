
$(document).ready(function () {
    $("#about_scroll").fadeOut();
    $("#work_scroll").fadeOut();
    $("#contact_scroll").fadeOut();
    $("#skill_scroll").fadeOut();

    $("#about").click(function () {
        document.title = 'My Portfolio : About';
        $("#index").fadeOut();
        $("#about_scroll").fadeIn();
        $('#about_left').addClass('animated slideInLeft');
        $('#about_right').addClass('animated slideInRight');
    });
    $("#work").click(function () {
        document.title = 'My Portfolio : Work';
        $("#index").fadeOut();
        $("#work_scroll").fadeIn();
        $('#work_left').addClass('animated slideInLeft');
        $('#work_right').addClass('animated slideInRight');
    });
    $("#skill").click(function () {
        document.title = 'My Portfolio : Skill';
        $("#index").fadeOut();
        $("#skill_scroll").fadeIn();
        $('#skill_left').addClass('animated slideInLeft');
        $('#skill_right').addClass('animated slideInRight');
    });
    $("#contact").click(function () {
        document.title = 'My Portfolio : Contact';
        $("#index").fadeOut();
        $("#contact_scroll").fadeIn();
        $('#contact_left').addClass('animated slideInLeft');
        $('#contact_right').addClass('animated slideInRight');
    });

    $(".back").click(function () {
        $(".pages").fadeOut();
        $("#index").fadeIn();
        $('#index_left').addClass('animated slideInLeft');
        $('#index_right').addClass('animated slideInRight');
    });

    $("#goBack").click(function () {
        document.title = 'My Portfolio : Home';
    });
    $("#goBackContact").click(function () {
        document.title = 'My Portfolio : Home';
    });
    $("#goBackSkill").click(function () {
        document.title = 'My Portfolio : Home';
    });
    $("#goBackWork").click(function () {
        document.title = 'My Portfolio : Home';
    });
    //typed animation
    var typed = new Typed(".typing", {
        strings: ['a Software Engineer', 'an API Specialist', 'a Freelancer', 'a Lifelong learner'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })


});