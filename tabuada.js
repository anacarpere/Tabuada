function tabuada() {
    var num = document.querySelector('input#numero')
    var tab = document.querySelector('select#seltab')
   
    if (num.value.length == 0) {
        window.alert("Número precisa ser maior que zero")
        
    }else{
        var n = Number(num.value)
        for(var c=1;c<=10;c++){
            var item =document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
        /*var c = 1
        tab.innerHTML =''
        while (c <=10) {
            // comando abaixo serve para criar um item no select direto no js daria para fazer pelo html//
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab ${c}`// serve para linguagens serverside - para js não faz diferença
            tab.appendChild(item)//precisa incluir esse comando para aparecer a option criada pelo js
            c++
        }*/
        
    }
    
}
