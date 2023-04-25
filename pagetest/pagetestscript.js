var i = 1;

function compile(){
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");

    
    document.body.onkeyup = function(){
        
        document.getElementById("output").remove();
        document.getElementById("lastTestPlease").innerHTML = `<iframe class="myIframe" id="output"></iframe>`;


        var code = document.getElementById("output").contentWindow.document;
        code.open();
        code.writeln(html.value + "<style>" + css.value + "</style>" + "<script>" + js.value + "</script>");
        code.close();
    }
  }
  compile();