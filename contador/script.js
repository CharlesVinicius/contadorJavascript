function contador(){

let inicio = document.getElementById('txt1')
let fim = document.getElementById('txt2')
let passo = document.getElementById('txt3')
let res = document.getElementById('res')

if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    res.innerHTML='Impossivel contar'
    //alert('Preencha os campos corretamente!')
}



        else{

            res.innerHTML= 'Contando: '



                let ini = Number(inicio.value)
                let fi = Number(fim.value)
                let pas = Number(passo.value)

                if(pas <= 0){
                    alert('Passo invalido! considerando o passo 1 *-*')
                    pas = 1
                }
                

                if(ini < fi){
                    //Contagem crescente

                for(c = ini; c <= fi; c+=pas){
                    res.innerHTML += `${c} \u{1F449} ` 

                    }

                   
                }


                else{
                    //Contagem regressiva

                for(c = ini; c >= fi; c-=pas){
                    res.innerHTML+= `${c} \u{1F449} `


                }

            } 

            
            res.innerHTML += `\u{1F3C1}`

            

        }

}