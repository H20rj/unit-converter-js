

const go_button = document.querySelector('.GoButton');
const output = document.querySelector('.output-text span');


go_button.addEventListener('click', () => {
    console.log('clicked');
    let unit1 = document.querySelector('.dropDown1 select').value;
    let unit2 = document.querySelector('.dropDown2 select').value;

    let input_value = document.getElementById('inputValue').value;

    if (input_value === '') {
        alert('Please enter a value');
    } else if (input_value < 0) {
        alert('Please enter a positive value');
    }

    let ready_to_convert;
    // first convert unit 1 to meters as a standardized value
    let output_value;
    let output_unit;
    if (unit1 === 'Miles') {
        const miles_to_meters = 1609.34;
        ready_to_convert = input_value * miles_to_meters;
    } else if (unit1 === 'Millimeters') {
        const km_to_meters = 0.001;
        ready_to_convert = input_value * km_to_meters;
    } else if (unit1 === 'Feet') {
        const feet_to_meters = 0.3048;
        ready_to_convert = input_value * feet_to_meters;
    } else if (unit1 === 'Inches') {
        const inches_to_meters = 0.0254;
        ready_to_convert = input_value * inches_to_meters;
    } else if (unit1 === 'Nautical Miles') {
        const nautical_miles_to_meters = 1852;
        ready_to_convert = input_value * nautical_miles_to_meters;
    } else if (unit1 === 'Meters') {
        ready_to_convert = input_value;
    } else if (unit1 === 'Kilometers') {
        const km_to_meters = 1000;
        ready_to_convert = input_value * km_to_meters;
    } else if (unit1 === 'Yards') {
        const yards_to_meters = 0.9144;
        ready_to_convert = input_value * yards_to_meters;
    } else if (unit1 === 'Centimeters') {
        const cm_to_meters = 0.01;
        ready_to_convert = input_value * cm_to_meters;
    } else if (unit1 === unit2) {
        output_value = input_value;
    }


    console.log(`Ready to convert value in meters: ${ready_to_convert}`);


    // final conversion depending on unit 2 value
    if (unit2 === 'Miles'){
        const meters_to_miles = 0.000621371;
        output_value = ready_to_convert * meters_to_miles;
        output_unit = 'mi';
    } else if (unit2 === 'Millimeters'){
        const meters_to_millimeters = 1000;
        output_value = ready_to_convert * meters_to_millimeters;
        output_unit = 'mm';
    } else if (unit2 === 'Feet'){
        const meters_to_feet = 3.28084;
        output_value = ready_to_convert * meters_to_feet;
        output_unit = 'ft';
    } else if (unit2 === 'Inches') {
        const meters_to_inches = 39.3701;
        output_value = ready_to_convert * meters_to_inches;
        output_unit = 'in';
    } else if (unit2 === 'Nautical Miles'){
        const meters_to_nautical_miles = 0.000539957;
        output_value = ready_to_convert * meters_to_nautical_miles;
        output_unit = 'nmi';
    } else if (unit2 === 'Kilometers'){
        const meters_to_kilometers = 0.001;
        output_value = ready_to_convert * meters_to_kilometers;
        output_unit = 'km';
    } else if (unit2 === 'Yards'){
        const meters_to_yards = 1.09361;
        output_value = ready_to_convert * meters_to_yards;
        output_unit = 'yd';
    } else if (unit2 === 'Meters'){
        output_value = ready_to_convert;
        output_unit = 'm';
    } else if (unit2 === 'Centimeters'){
        const meters_to_centimeters = 100;
        output_value = ready_to_convert * meters_to_centimeters;
        output_unit = 'cm';
    }

    output.innerHTML = parseFloat(output_value.toFixed(6)) + ' ' + output_unit;








});
