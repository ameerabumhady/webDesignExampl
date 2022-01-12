
function msg(){
    alert(" The Proccess Sucssesed :). ");
}
function doCheck()
    {
        var username = document.getElementById('username');
        var password = document.getElementById('password');
        if(username.value == '') {
          //alert('Please enter username');
          var s = document.createElement('span');
          var user = document.createTextNode('please write your username');
          s.appendChild(user);
          s.setAttribute('class','error');
          document.getElementById('login_form').appendChild(s);
          return false;
        }

        if(password.value == '') {
          //alert('Please enter password');
          var p = document.createElement('span');
          var pass= document.createTextNode('plesae write your password ');
          p.appendChild(pass);
          p.setAttribute('class','error');
          document.getElementById('login_form').appendChild(p);
          return false;
        }
    }
    
    function doClear(input)
    {
      var parent = input.parentNode;
      if(parent.lastChild.className == 'error')
      {
        parent.lastChild.remove();
        return;
      }
    }