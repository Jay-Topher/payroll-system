$(document).ready(function() {
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
            paymentStatus: paymentStatus
        };

        $.ajax({
            type: 'POST',
            url: "http://localhost:3000/employees",
            data: employee,
            success: function(emp){
                console.log(emp.responseText);
            }
        })

    })
    
});