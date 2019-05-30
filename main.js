$(document).ready(function() {
    $.getJSON('http://localhost:3000/employees', function(data){
        let employeeData = "";
        $.each(data, function(key, value){
            employeeData += '<tr>';
            employeeData += '<td>' + value.id + '</td>';
            employeeData += '<td>' + value.name + '</td>';
            employeeData += '<td>' + value.qualification + '</td>';
            employeeData += '<td>' + value.position + '</td>';
            employeeData += '<td>' + value.level + '</td>';
            employeeData += '<td>' + value.paymentStatus + '</td>';
            employeeData += '</tr>';
        })
        $('#employTable').append(employeeData);
    })

    $('#addButton').on('click', function(){
        let fullName = $('#fullname').val();
        let position = $('#position').val();
        let qualification = $('#qualification').val();
        let level = $('#level').val();
        let paymentStatus = false;

        let employee = {
            name: fullName,
            position: position,
            qualification: qualification,
            level: level,
            paymentStatus: paymentStatus
        };

        let tableEmploy = document.getElementById("#employTable");

        $.ajax({
            type: 'POST',
            url: "http://localhost:3000/employees",
            data: employee,
            success: function(emp){
            // $('#employTable tr:last').after(`<tr><td>${emp.id}</td><td>${emp.name}</td><td>${emp.position}</td><td>${emp.qualification}</td><td>${emp.level}</td><td>${emp.paymentStatus}</td></tr>`);
            // $('#employTable tr:last').after('<tr><td>' + emp.id + '</td><td>'+emp.name+'</td><td>'+emp.position+'</td><td>'+emp.qualification+'</td><td>'+emp.level+'</td><td>'+emp.paymentStatus+'</td></tr>');
            }
        })

    })

});