jQuery(document).ready($=>{
    const sidebar = $('nav.sidebar');
    // const mymap = L.map('map');
    $('#collapse').click(()=>{
        sidebar.css("width", "0%");
        // $('#expand').css("opacity", "1");
    });
    $('#expand').click(e=>{
        // sidebar.css("width", "15%");
        let state = $(e.target).data("state");
        if (state === "on"){
            sidebar.css("width", "0%");
            $(e.target).data("state", "off");
            $("i", e.target).toggleClass("fa-chevron-left").toggleClass("fa-chevron-right");
        } else {
            sidebar.css("width", "var(--sidebar-width)");
            $(e.target).data("state", "on");
            $("i", e.target).toggleClass("fa-chevron-left").toggleClass("fa-chevron-right");
        }
        // console.log($(e.target).data("state"));
        // $('#expand').css("opacity", "0");
    });
    $('#add').click(e=>{
        $('#addAnimal').css("display", "flex");
    });
    $('#closeForm').click(e=>{
        $('#addAnimal').css("display", "none");
    });
});