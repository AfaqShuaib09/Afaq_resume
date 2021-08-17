let slideIndex = 1;
$(document).ready(function(){

    $('#profile_ripple').ripples({
        resolution:512,
        dropRadius:10
    });
    
    const bars = document.querySelectorAll('.progress_bar');
    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage +'%';
    })

    $('.projects .list').click(function(){
        const value = $(this).attr('data-filter');
        if (value=='all')
        {
            $('.projects .itembox').show('1000');
        }
        else{
         $('.projects .itembox').not('.'+value).hide('1000');
         $('.projects .itembox').filter('.'+value).show('1000');
        }
    })
    // add active class on the selected category
    $('.projects .list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })


    // magnify popup
    $('.magnify').magnificPopup({
        type: 'image',
        gallery : {
            enabled: true
        },
        zoom : {
            enable : true
        }
    });

});
