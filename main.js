
// let but = '<td><buttom id=' + 


$(document).ready(function() {
    let $tableEmploy = $('#employTable');
    let url = "http://localhost:3000/employees/";
    $.getJSON('http://localhost:3000/employees', function(data){
        let employeeData = "";
        $.each(data, function(key, value){
            console.log(data)
            employeeData += '<tr>';
            employeeData += '<td>' + value.id + '</td>';
            employeeData += '<td>' + value.name + '</td>';
            employeeData += '<td>' + value.qualification + '</td>';
            employeeData += '<td>' + value.position + '</td>';
            employeeData += '<td>' + value.level + '</td>';
            employeeData += '<td>' + value.paymentStatus + '</td>';
            employeeData += '<td><button class="deleteEmp" data-id="';
            employeeData +=  value.id + '" type="button">X</td></tr>';
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


        $.ajax({
            type: 'POST',
            url: url,
            data: employee,
            success: function(emp){
            
            }
        })

    })

    // adding a delete function
    $tableEmploy.delegate('.deleteEmp', 'click', function() {
        let id = $(this).attr('data-id');
        $.ajax({
            type: "DELETE",
            url: url + id,
            success: function () {
                alert("Deleted Successfully")
            }
        });
    })

});