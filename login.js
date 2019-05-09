function validate(){
var firstname = document.getElementById("firstname").value;
var lastname = document.getElementById("lastname").value;
var email=document.getElementById("mail").value;
var regx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
             //   var regx=new RegExp()
                if(regx.test(email))
                { 
                    alert("valid mail");
                }
                else{
                    alert("Invalid mail");
                    document.getElementById("lbl").style.visibility="visible"; 
                }
}

