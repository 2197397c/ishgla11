jQuery(document).ready($=>{
    const sidebar = $('nav.sidebar');
    $('#collapse').click(()=>{
        sidebar.css("width", "0%");
        $('#expand').css("display", "block");
    });
    $('#expand').click(e=>{
        sidebar.css("width", "15%");
        $(this).css("display", "none");
        console.log($(this).css("background", "red"));
    })
});