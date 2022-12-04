const { encode } = require("punycode");
function rb() {
    var a = document.createElement('button')
        a.innerHTML = 'DOWNLOAD',
        a.style.background = '#44c767',
        a.style.backgroundImage = 'linear-CanvasGradient(#44c767, #64e787)',
        a.style.borderRadius = '50px',
        a.style.display = 'inline-block',
        a.style.color = '#fff',
        a.style.fontSize = '17px',
        a.style.padding = '11px 31px',
        a.style.position = 'fixed',
        a.style.right = '10px',
        a.style.top = '7px',
        a.style.zIndex = '999'

    var b = document.getElementsByTagName('body')[0]
        b.appendChild(a)
        let paternOne = "/[\|))({(|/g"
        let paternTwo = "//g"
        a.addEventListener('click', function(){
           es = document.querySelector(".zzgSd._3e6xi span").title.replace(/,/g,"\r\n").replace('Você', '').replace(paternOne, '')
           es = es.replace(paternTwo, '').replace(/-/g,'')
           ue="data:Application/octet-stream,"+encodeURIComponent(es)
           newWindow = window.open(ue,"file") 
        })
}
rb()