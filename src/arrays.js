// for it só intera não retorna nada diferente do map

const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho um perfil na rede social: ${redesSociais[i]} `)
}

redesSociais.forEach(function(NomeDaRedeSocial, indice){
    console.log(`#${indice} Eu tenho perfil na rede social: ${NomeDaRedeSocial}`)
  })
  
  const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
  
  const alunos2 = alunos.map(function(itemAtual){
    return {
      nome: itemAtual,
      curso: 'Frontend'
    }
  })
  
  console.log(alunos2)
  
  const paula = alunos2.find(function(item){
    return item.nome == 'Paula' //true ou false
   //se falso retorna undefined
  })
  
  console.log(paula)
  
  const indiceDaPaula = alunos2.findIndex(function(item){
    return item.nome == 'Paula' // true ou false
    //se falso retorna -1
   })
  
   console.log(indiceDaPaula)
  
   alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
  })
  
   //every
   const todosAlunosSaoDeFrontend = alunos2.every(function(item){
    return item.curso === 'Frontend' // true ou false
   })
  
   console.log(todosAlunosSaoDeFrontend);
  
    //  function anonima = functions que não recebem um nome

   const existeAlgumAlunoDeBackend = alunos2.some(function(item){
    return item.curso === 'Backend' && item.curso === 'Frontend' // true ou false
   })
  
   // função nomeada = recebe um nome

   console.log(existeAlgumAlunoDeBackend)

   function filtraAlunoDeBackend(aluno) {
    return aluno.curso === 'Backend'
   }

   const filtraAlunosDeBackend2 = aluno => aluno.curso === 'Backend'
  
   const alunosDeBackend = alunos2.filter(filtraAlunoDeBackend)
  
   console.log(alunosDeBackend);

   const nums = [10, 20, 30, 10]

   const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual;
    return acumulador;
   }, 0) //carrinho de compras

   console.log(soma);

   let somaComFor = 0;

   for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
   }

   console.log(somaComFor);

   const nomeDosAlunos = alunos2.reduce(function(acumulador, itemAtual){
    acumulador += `${itemAtual.nome} `
    return acumulador;
   }, '');

   console.log(nomeDosAlunos)