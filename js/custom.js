jQuery(document).ready($=>{
    const sidebar = $('nav.sidebar');
    // const mymap = L.map('map');
    $('#collapse').click(()=>{
        sidebar.css("width", "0%");
        $('#expand').css("opacity", "1");
    });
    $('#expand').click(e=>{
        sidebar.css("width", "15%");
        $('#expand').css("opacity", "0");
    });
    $('#add').click(e=>{
        $('#addAnimal').css("display", "flex");
    });
    $('#closeForm').click(e=>{
        $('#addAnimal').css("display", "none");
    });
});