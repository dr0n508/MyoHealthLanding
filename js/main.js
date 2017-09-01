$(document).ready(function () {

    // vimeo video api

    var iframe = $('#video-robert-wolf');
    var player = new Vimeo.Player(iframe);

    $('#play-pause').click(function() {
        player.play();
        $(this).toggleClass('play');
        if ($(this).hasClass('play')) {
            //pause video
            player.pause();
        } else {
            //unpause video
            player.play();
            $(this).siblings(".overlay").hide();
            $(this).hide();
        }
    });


    maintainSameHeight($('[data-same-height="testimonial"]'));

    function maintainSameHeight($list) {
        var height = 0;

        $list.each(function () {
            var $this = $(this);
            if ($this.outerHeight() > height) {
                height = $this.outerHeight();
            }
        });

        $list.css("height", height);
    }



});