jQuery(document).ready($=>{
    const sidebar = $('nav.sidebar');
    const form = $('#addAnimal');
    const fr = new FileReader();
    let file = document.getElementById('file').files[0];
    // console.log(file);
    fr.onload = e=>{
        let data = x2js.xml_str2json(e.target.result);
        let points = getPTS(data);
        console.log(points);
    };
    $('#collapse').click(()=>{
        sidebar.css("width", "0%");
    });
    $('#expand').click(e=>{
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
    });
    function clearForms(){
        document.getElementById('addAnimal').reset();
    }
    function closeForm(){ form.css("display", "none"); }
    $('#add').click(e=>{
        form.css("display", "flex");
    });
    $('#closeForm').click(e=>{
        closeForm();
        clearForms();
    });
    $('.cancel', form).click(e=>{
        closeForm();
        clearForms();
    });
    $('#file').change((e)=>{
        console.log(e);
        file = e.currentTarget.files[0];
    });
    form.submit(e=>{
        e.preventDefault();
        let name = $('input[name=name]').val();
        console.log(name);
        // console.log("submitted");
        // let data = form.serializeArray();
        fr.readAsText(file);
    });
});