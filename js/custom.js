let x2js = new X2JS();
// let textFile = readTextFile("test.txt");
// console.log(textFile);
jQuery(document).ready($=>{
    const sidebar = $('nav.sidebar');
    $('#collapse').click(()=>{
        sidebar.css("width", "0%");
        $('#expand').css("opacity", "1");
    });
    $('#expand').click(e=>{
        sidebar.css("width", "15%");
        $('#expand').css("opacity", "0");
    });
    let gpxData;
    $.ajax({
        url: 'map/Activities/activity_1927428247.gpx',
        async: false,
        cache: false,
        dataType: 'text',
        success: e => {
            // console.log(e);
            gpxData = e;
        },
        error: e => console.log(e)
    });
    // console.log(gpxData);
    let jsonObj = x2js.xml_str2json(gpxData);
    console.log(jsonObj);
});