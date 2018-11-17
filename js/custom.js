jQuery(document).ready($=>{
    const sidebar = $('nav.sidebar');
    $('#collapse').click(()=>{
        sidebar.css("width", "0%");
        $('#expand').css("opacity", "1");
    });
    $('#expand').click(e=>{
        sidebar.css("width", "15%");
        $('#expand').css("opacity", "0");
        console.log($(this).css("background", "red"));
    })
});