var root_br = document.querySelector(':root');

//get range bar value
function get_range_bar_value(){
    //select range bar for border radius
    var rb1 = document.getElementById('r1');
    var rb2 = document.getElementById('r2');
    var rb3 = document.getElementById('r3');
    var rb4 = document.getElementById('r4');
    //select range bar for width / heigh
    var range_w = document.getElementById('range_width');
    var range_h = document.getElementById('range_height');

    //select span elemet for display width / height value
    var value_w = document.getElementById('width_value');
    var value_h = document.getElementById('height_value');

    //add border radius value to HTML document in span element
    value_w.innerHTML = range_w.value;
    value_h.innerHTML = range_h.value;

    document.getElementById("input_value").value =
            rb1.value + '% ' +
            Math.abs(rb1.value-100) + '% ' +
            rb2.value + '% ' +
            Math.abs(rb2.value-100) + '% / ' +
            Math.abs(rb3.value-100) + '% ' +
            rb4.value + '% ' +
            Math.abs(rb4.value-100) + '% ' +
            rb3.value + '%; ';

    //set border radius in css
    root_br.style.setProperty('--br1', rb1.value + '%');
    root_br.style.setProperty('--br2', Math.abs(rb1.value-100) + '%');
    root_br.style.setProperty('--br3', rb2.value + '%');
    root_br.style.setProperty('--br4', Math.abs(rb2.value-100) + '%');
    root_br.style.setProperty('--br5', Math.abs(rb3.value-100) + '%');
    root_br.style.setProperty('--br6', rb4.value + '%');
    root_br.style.setProperty('--br7', Math.abs(rb4.value-100) + '%');
    root_br.style.setProperty('--br8', rb3.value + '%');
    //set width / height in css
    root_br.style.setProperty('--width_s', range_w.value + 'px');
    root_br.style.setProperty('--height_s', range_h.value + 'px');

}

//copy border radius value
function copy_border_radius(){
    var copytxt = document.getElementById('input_value');
    copytxt.select();
    copytxt.setSelectionRange(0, 99999)
    document.execCommand('copy');

    //move focus for escape edit input
    document.getElementById('btn_focus').focus();
   
}

//display / hide custom size
function check_custom_size(){
    var check = document.getElementById('custom_size_check').checked;
    if(check === true){
        document.getElementById('on_off_wh').style.display = "block";
    }else if(check === false){
        document.getElementById('on_off_wh').style.display = "none";
    }
}
