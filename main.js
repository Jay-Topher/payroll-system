
// let but = '<td><buttom id=' + 


$(document).ready(function() {
    let $tableEmploy = $('#employTable');
    let url = "http://localhost:3000/employees/";
    $.getJSON('http://localhost:3000/employees', function(data){
        let employeeData = "";
        $.each(data, function(key, value){
            // console.log(data)
            employeeData += '<tr>';
            employeeData += '<td>' + value.id + '</td>';
            employeeData += '<td>' + value.name + '</td>';
            employeeData += '<td>' + value.qualification + '</td>';
            employeeData += '<td>' + value.position + '</td>';
            employeeData += '<td>' + value.level + '</td>';
            employeeData += '<td>' + value.salary + '</td>';
            employeeData += '<td>' + value.paymentStatus + '</td>';
            employeeData += '<td><button class="deleteEmp material-icons" data-id="';
            employeeData += value.id + '" type="button">delete</button><a href="edit employee.html" id="editButton" class="material-icons" data-id="';
            employeeData += value.id + '">edit</a></td></tr>'; // onclick="window.location.href=\'edit employee.html\'
        })
        $('#employTable').append(employeeData);
    })


//  get form data and populate table
    $('#addButton').on('click', function(){
        let fullName = $('#fullname').val();
        let position = $('#position').val();
        let qualification = $('#qualification').val();
        let level = $('#level').val();
        let paymentStatus = false;

        function getSalary(level) {
            switch (level) {
                case 1:
                    return 20000;
                    break;
                case 2:
                    return 40000;
                    break;
                case 3:
                    return 60000;
                    break;
                
                case 4:
                    return 80000;
                    break;

                case 5:
                    return 100000;
                    break;

                case 6:
                    return 120000;
                    break;
                default:
                    return 150000;
                    break;
            }
        }

        let employee = {
            name: fullName,
            position: position,
            qualification: qualification,
            level: level,
            salary: getSalary(this.level),
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

    // $('#editButton').on('click')
    // $tableEmploy.delegate('#editButton', 'click', function(){
    //     let id = $(this).attr('data-id');
    //     let $td = $(this).closest('td');
    //     console.log(id);
    //     $('#fullname1').val(id.);
        // $td.find('input.fullname').val()
    // })

    $('#addButton1').on('click', function(){
        // let fullName = $('#fullname1').val();
        // let position = $('#position1').val();
        // let qualification = $('#qualification1').val();
        // let level = $('#level1').val();
        // let paymentStatus = false;

        // let employee = {
        //     name: fullName,
        //     position: position,
        //     qualification: qualification,
        //     level: level,
        //     paymentStatus: paymentStatus
        // };


        // $.ajax({
        //     type: 'POST',
        //     url: url + id,
        //     data: employee,
        //     success: function(emp){
            
        //     }
        // })

    })

    // $('#addButton').on('click', function(){
    //     let fullName = $('#fullname').val();
    //     let position = $('#position').val();
    //     let qualification = $('#qualification').val();
    //     let level = $('#level').val();
    //     let paymentStatus = false;

        

    //     let employee = {
    //         name: fullName,
    //         position: position,
    //         qualification: qualification,
    //         level: level,
    //         salary: getSalary(level),
    //         paymentStatus: paymentStatus
    //     };


    //     $.ajax({
    //         type: 'POST',
    //         url: url,
    //         data: employee,
    //         success: function(emp){
            
    //         }
    //     })

    // })

});