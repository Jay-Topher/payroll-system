
// let but = '<td><buttom id=' + 


$(document).ready(function() {
    // Dom table Manipulation ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let $tableEmploy = $('#employTable');
    let url = "http://localhost:3000/employees/";
    $.getJSON(url, function(data){
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
            employeeData += '<td class="pay">' + value.paymentStatus + '</td>';
            employeeData += '<td><button class="deleteEmp material-icons" data-id="';
            employeeData += value.id + '" type="button">delete</button><a href="edit employee.html" id="editButton" class="material-icons editEmp" data-id="';
            employeeData += value.id + '">edit</a></td></tr>'; // onclick="window.location.href=\'edit employee.html\'
        })
        $('#employTable').append(employeeData);
    })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  get form data and populate table
    
function getSalary(level) {
    switch (level) {
        case '1':
            return 20000;
            break;
        case '2':
            return 40000;
            break;
        case '3':
            return 60000;
            break;
        
        case '4':
            return 80000;
            break;

        case '5':
            return 100000;
            break;

        case '6':
            return 120000;
            break;
        default:
            return 150000;
            break;
    }
}
$('#addButton').on('click', function(){
        let fullName = $('#fullname').val();
        let position = $('#position').val();
        let qualification = $('#qualification').val();
        let level = $('#level').val();
        let paymentStatus = $('#paymentStatus').val();
        

        let employee = {
            name: fullName,
            position: position,
            qualification: qualification,
            level: level,
            salary: getSalary(level),
            paymentStatus: paymentStatus
        };


        $.ajax({
            type: 'POST',
            url: url,
            data: employee,
            success: function(){
                alert('Added Successfully');
            }
        })

    })
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Pay all employees
    $('#payButton').click (function() {
        $('.pay').val("true");
    //     let id = $(this).attr('data-id');
    //     $.ajax({
    //         type: "PATCH",
    //         url: url + id,
    //         data: {paymentStatus: true},
    //         success: function () {
    //             alert("Deleted Successfully")
    //         }
    //     });
    })
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Search
    $('#search').keydown(function(){
        $.getJSON(url,function(data){
            let search = $('#search').val();
            let rex = new RegExp(search,'i'); // Regular Expression
            let output;
            $.each(data, function (key, val) { 
                if(rex.test(val.id) || rex.test(val.name)) {

                    output += "<tr>";
                    output += "<td id='"+key+"'>"+val.id+"</td>";
                    output += "<td id='"+key+"'>"+val.name+"</td>";
                    output += "<td id='"+key+"'>"+val.qualification+"</td>";
                    output += "<td id='"+key+"'>"+val.position+"</td>";
                    output += "<td id='"+key+"'>"+val.level+"</td>";
                    output += "<td id='"+key+"'>"+val.salary+"</td>";
                    output += "<td id='"+key+"'>"+val.paymentStatus+"</td>";
                    output += "</tr>";
                }

            });
            $('#employTable').html(output);
        });
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $('#addButton1').on('click', function(){
        let id = $('#getId').val()

        let fullName = $('#fullname1').val();
        let position = $('#position1').val();
        let qualification = $('#qualification1').val();
        let level = $('#level1').val();
        // let paymentStatus = $('#paymentStatus1').val();

        $.ajax({
            type: "GET",
            url: url,
            
            success: function (data) {
                $.each(data, function (key, value) { 
                    if(id == value.id){
                        $.ajax({
                            type: "put",
                            url: url + id,
                            data: {
                                name:fullName,
                                position:position,
                                qualification:qualification,
                                level:level,
                                paymentStatus:false,
                                salary: getSalary(level)
                            },
                            dataType: "dataType",
                            success: function (response) {
                                
                            }
                        });
                    }
                });
                
            }
        });
    })
   
});