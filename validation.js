$(document).ready(function(){

$('.submit').click(function(){
    validateForm();   
});

function validateForm(){


    var nameReg = /^[A-Za-z]+$/;
    var numberReg =  /^[0-9]+$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    var names = $('#nameInput').val();
    var company = $('#companyInput').val();
    var email = $('#emailInput').val();
    var telephone = $('#telInput').val();
    var message = $('#messageInput').val();

    var inputVal = new Array(names, company, email, telephone, message);

    var inputMessage = new Array("name", "company", "email address", "telephone number", "message");

     $('.error').hide();

        if(inputVal[0] == ""){
            $('#nameLabel').after('<span class="error"> Please enter your ' + inputMessage[0] + '</span>');
        } 
        else if(!nameReg.test(names)){
            $('#nameLabel').after('<span class="error"> Letters only</span>');
        }

        if(inputVal[1] == ""){
            $('#companyLabel').after('<span class="error"> Please enter your ' + inputMessage[1] + '</span>');
        }

        if(inputVal[2] == ""){
            $('#emailLabel').after('<span class="error"> Please enter your ' + inputMessage[2] + '</span>');
        } 
        else if(!emailReg.test(email)){
            $('#emailLabel').after('<span class="error"> Please enter a valid email address</span>');
        }

        if(inputVal[3] == ""){
            $('#telephoneLabel').after('<span class="error"> Please enter your ' + inputMessage[3] + '</span>');
        } 
        else if(!numberReg.test(telephone)){
            $('#telephoneLabel').after('<span class="error"> Numbers only</span>');
        }

        if(inputVal[4] == ""){
            $('#messageLabel').after('<span class="error"> Please enter your ' + inputMessage[4] + '</span>');
        }       
}   

});
