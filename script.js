// Escrevendo o primeiro código. 

console.log('Hello World!');// Com esse método a mensagem irá aparecer no console da página.

//alert('Hello World!');// Já esse médto irá mostra a mensagem em uma janela de alerta. 

/* Conceito de algorítimo: sequencia de ordens ou comandos que deverão ser executadas por um computador.  */

/* Conceito de algorítimo elaborado pelo Chat GPT: 

Um algoritmo é uma sequência finita de instruções ou regras bem definidas que descrevem um conjunto de operações a serem executadas em um determinado conjunto de dados para produzir um resultado desejado.

Em outras palavras, um algoritmo é um conjunto de passos lógicos que, quando seguidos corretamente, levarão à solução de um problema específico. Os algoritmos são usados em muitas áreas, como ciência da computação, matemática, engenharia, física e outras.

Os algoritmos são essenciais para a computação e a programação de computadores, pois fornecem uma maneira de expressar soluções computacionais de forma clara e sistemática. Algoritmos são usados em uma variedade de aplicações, como processamento de imagem, criptografia, inteligência artificial, simulações científicas, entre outras.

Um exemplo simples de algoritmo é uma receita de culinária. A receita contém uma sequência de instruções bem definidas que descrevem as etapas necessárias para produzir um prato específico. Cada etapa é claramente definida e segue uma ordem específica para produzir o resultado final desejado. */

/* IMPORTANTE: Os comandos devem ser claros, precisos e lógicos. Qualquer erro de lógica na programação irá comprometer a funcionalidade e eficiência do algorítimo. */

/* IMPORTANTE: A ordem dos comandos influênica a execução do algorítimo. Exemplo, caso se pretenda que o algorítimo escreva uma carta e depois a envie, todos os passos do processo deverão ocorrer em ordem lógica e cornológica:

- Pegar um papel em branco;
- Pegar uma caneta;
- Escrever a mensagem;
- Colocar a carta no envelope;
- Selar a carta;
- Enviar a carta;

Se a ordem dos comandos for alterada, haverá um erro na execução do algorítimo.*/

/* Console do Google Chrome. O console é acessado através do botão 'inspecionar'.

Monitorar a execução do código através do console é fundamental para detectar possíveis bugs e erros de execução.

*/

/* Conceito de variável: 
Na programação a variável fuciona como uma espécie de caixa onde podem ser armazenados divesos tipos de dados, dentre os quais incluem strings, números, booleanos entre outros.

As variáveis são fundamentais para criação de algorítimos eficientes, uma vez que determinados dados serão utilizados repetidas vezes dentro de determinado programa. 
*/

/* Conceito de variável descrita pelo Chat GPT:

Uma variável em programação é um espaço de memória reservado para armazenar um valor que pode ser modificado durante a execução do programa. Uma variável é uma forma de identificar um local na memória do computador onde podemos armazenar um valor específico e fazer referência a esse valor em outras partes do programa.

As variáveis são usadas para armazenar dados temporários ou permanentes em um programa de computador. Os tipos de dados que podem ser armazenados em uma variável incluem números, strings, caracteres, booleanos, entre outros.

Ao declarar uma variável, o programador deve especificar o tipo de dado que será armazenado na variável, bem como um nome único para identificar a variável no programa. Durante a execução do programa, o valor da variável pode ser atualizado ou modificado conforme necessário, permitindo que o programa reaja dinamicamente às entradas ou mudanças no ambiente em que está sendo executado.

Em resumo, as variáveis são elementos fundamentais em programação, pois permitem que os programas armazenem e manipulem dados dinamicamente, tornando o programa mais flexível e adaptável às necessidades do usuário e às condições do ambiente em que está sendo executado.*/

/* Declaranado uma variável com javascript: */

var variavel;

variavel = 2;

console.log(variavel); // será impresso o número 2 na tela.

/* A variável também pode ser declarada da seguinte forma */;

var segundaVariavel = 'Número Três!';

console.log(segundaVariavel); // será impresso a string 'Número Três' na tela.

/* Atribuindo novo valor a variável */

variavel = 20;

console.log(variavel); // será impresso o número 20 na tela.

/* Uma variável também pode receber outra variável */

variavel = segundaVariavel;

console.log(variavel); // será impresso a string 'Número Três' na tela;

/* TIPOS DE DADOS: */


// String:

/* Conceito de String:

Trata-se de um dado composto de caracteres alfanuméricos, sem um valor numérico propriamente dito. A string são utilzadas para reproduzir textos.*/

/* Concito de String formulado pelo Chat GPT:
Em programação, uma string é uma sequência de caracteres alfanuméricos (letras, números e símbolos) que podem ser armazenados em uma variável e manipulados por meio de diversas operações.

As strings são frequentemente usadas para armazenar texto em um programa de computador. Por exemplo, em um programa de processamento de texto, uma string pode ser usada para armazenar o conteúdo de um documento, e em um programa de e-mail, uma string pode ser usada para armazenar o corpo de uma mensagem.

As strings podem ser manipuladas de várias maneiras em um programa, como combinação, separação, extração de partes específicas, comparação, entre outras. A manipulação de strings pode ser feita por meio de funções e métodos específicos de cada linguagem de programação.

Uma string pode ser representada por aspas simples ou duplas em muitas linguagens de programação. Por exemplo, em Python, uma string pode ser declarada como "Olá, mundo!" ou 'Este é um exemplo de string'.

Em resumo, uma string é uma sequência de caracteres alfanuméricos que podem ser armazenados em uma variável e manipulados por meio de diversas operações em um programa de computador.
*/

var string = 'Isso é uma string.'

console.log(string); //Será impresso a string 'Isso é uma string.' no console.

// strings não podem ser utilizadas para realizar operações matemáticas:

var stringNumero1 = "1";
var stringNumero2 = "2";

console.log(stringNumero1 + stringNumero2)// Será impresso a string '12', pois não será feita uma operação matemática, mas apenas a junão das duas strings.


// Number

/* Conceito:
Trata-se de um dado utilizado para representar valores numéricos, valores matemáticos. */

/* Conceito de Number formulado pelo Chat GPT:
Em programação, "Number" é um tipo de dado usado para representar valores numéricos, como inteiros e números de ponto flutuante.

Os números inteiros são valores inteiros, sem casa decimal, enquanto os números de ponto flutuante são valores que podem incluir uma casa decimal e frações. Em muitas linguagens de programação, há diferentes tipos de dados numéricos que podem ser usados para representar diferentes faixas de valores numéricos e precisões.

Os valores numéricos podem ser usados em operações matemáticas, como adição, subtração, multiplicação e divisão. Eles também podem ser usados em comparações, como maior que, menor que e igual a.

Além disso, os números também são frequentemente usados em cálculos científicos e estatísticos, jogos, finanças e muitos outros tipos de aplicativos.

Em resumo, Number é um tipo de dado em programação usado para representar valores numéricos, que podem ser inteiros ou de ponto flutuante. Esses valores numéricos são usados em muitas operações matemáticas e aplicativos em programação.
*/

var number1 = 365;
var number2 = 364;

console.log(number1 - number2); // será impresso o número 1 no console, pois o number considera o valor numérico e realiza operações matemáticas, diferentemente do string.



// Undefined;

/* Conceito de Undefined:
Trata-se de uma variável que embora tenha sido declarada, ainda não teve o seu valor definido, portanto permanece indefinida. */

/* Conceito de Undefined formulaod pelo Chat GPT:
Em programação, uma variável undefined é uma variável que foi declarada, mas ainda não foi atribuída com um valor. Quando uma variável é declarada sem um valor inicial, ela é automaticamente definida como undefined.

Isso significa que o valor da variável é desconhecido e não pode ser usado em operações matemáticas ou lógicas até que seja atribuído um valor válido. Tentar usar uma variável undefined em uma operação pode resultar em erros ou comportamento inesperado do programa.

Uma variável undefined pode ser atribuída com um valor válido em qualquer momento do programa. Isso pode ser feito usando o operador de atribuição da linguagem de programação, que permite que um valor seja atribuído a uma variável.

O valor undefined é frequentemente usado para indicar que uma variável ainda não foi inicializada ou que uma operação não produziu um resultado válido.

Em resumo, uma variável undefined é uma variável que foi declarada, mas ainda não foi atribuída com um valor. Isso significa que o valor da variável é desconhecido e não pode ser usado em operações matemáticas ou lógicas até que seja atribuído um valor válido.
*/

var a;

console.log(a); //Será impresso undefined no console, pois a variável, apesar de declarada, não possui nenhum valor atribuído. 



// Null:

/* Concieto de Null:
Trata-se de uma variável com valor nulo/vazio, que não pode ser confundida com uma variável com valor indefinido. Neste caso o valor é defino, porém ele é nulo/vazio.
*/

/* Conceito de Null formulado pelo Chat GPT:

Em programação, a variável null é usada para indicar a ausência intencional de um valor. É um valor especial que pode ser atribuído a uma variável para indicar que ela não tem valor válido ou não tem um valor que possa ser usado em operações matemáticas ou lógicas.

Ao contrário de uma variável undefined, que não foi inicializada com nenhum valor, uma variável null foi explicitamente definida como não tendo um valor válido.

Em algumas linguagens de programação, null é considerado um tipo de dado, enquanto em outras é simplesmente um valor especial que pode ser atribuído a uma variável de qualquer tipo de dados.

É importante lembrar que null e undefined são diferentes. Null é usado para indicar uma ausência intencional de valor, enquanto undefined indica que a variável não foi inicializada com nenhum valor.

O valor null é frequentemente usado em situações em que uma variável ou objeto não pode ter um valor válido, como em uma consulta a um banco de dados que não retornou nenhum resultado.

Em resumo, a variável null é usada em programação para indicar a ausência intencional de um valor. É um valor especial que pode ser atribuído a uma variável para indicar que ela não tem valor válido ou não tem um valor que possa ser usado em operações matemáticas ou lógicas.

*/

var b = null;

console.log(b); //Será impresso 'null' no console, indicando tratar-se de valor nulo.



// Boolean:

/* Boolean é um dado que representa um valor verdadeiro ou falso comumente utilizado em  'IF Statements' para realização de operações lógicas*/

/* Conceito de Booelean pelo Chat GPT:
Boolean é um tipo de dado em programação que representa um valor lógico verdadeiro (true) ou falso (false). O nome Boolean é uma referência a George Boole, um matemático inglês que desenvolveu a álgebra booleana no século XIX.

Em programação, os valores booleanos são frequentemente usados em estruturas de controle de fluxo, como instruções condicionais (if-else) e loops. Essas estruturas permitem que o programa tome decisões com base no valor de uma expressão booleana.

Além disso, os valores booleanos também podem ser usados em operações lógicas, como AND, OR e NOT. Por exemplo, a expressão "A AND B" é verdadeira apenas se A e B forem verdadeiros. Já a expressão "A OR B" é verdadeira se pelo menos um dos valores A ou B for verdadeiro.

Os valores booleanos são frequentemente usados para representar condições de teste em uma variedade de contextos, como testes de unidade, verificação de entrada do usuário, controle de acesso e validação de dados.

Em resumo, Boolean é um tipo de dado em programação que representa um valor lógico verdadeiro ou falso e é usado em uma variedade de contextos para tomada de decisão e controle de fluxo em um programa.
*/

var boleano = true;

console.log(boleano); //Será impresso o valor boelano 'true' indicando trantar-se de um proposição verdadeira. 

console.log(!boleano); //Será impresso o valor boelano 'false' indicando trantar-se de um proposição falsa, devido a utilização do sinal de exclamação indicando a inversão do valor declarado. 

// OPERAÇÕES ARITMÉTICAS

// + Adição.

var adicao = 1 + 1;


// - Subtração.

var subtracao = 1 - 1;


// * Multiplicação.

var multiplicacao = 10 * 10;


// / Divisão.

var divisao = 10 / 10;


// % Módulo.

// retorna no resto de uma operação de divisão.

var moduloPar = 2 % 2;

console.log(moduloPar); // será mostrado 0 na tela;

var moduloImpar = 3 % 2;

console.log(moduloImpar); // será mostrado 1 na tela;

// ++ Incremento.

var incremento = 1;

incremento++;

console.log(incremento)// será mostrado 2 na tela, pois o valor original foi incrementado em 1;

// -- Decremento.

var decremento = 2;

decremento--;

console.log(decremento); // será mostrado 1 na tela, pois o valor original foi decrementado em 1;

// A ordem do incremento e decremento importa.

var alfa = 1;

var beta = alfa++; // Nesse caso beta será 1 pois primeiro ele recebeu o valor original de alfa, e somente depois o alfa foi incrementado. Note que o alfa foi incrementado e agora vale 2.

var beta = ++alfa; // Nesse caso primeiro o alfa é incremntado passando a valer 3, e depois o valor é atribuído à beta. Nesse caso alfa e beta tem o mesmo valor e ambos retornam 3.

// Atribuições:

// '=' Esse é o sinal de atribuição no Javascript. 

var a1 = 1;

a1++; // pode ser escrito como: a1 = a1 + 1 ou a1 += 1;

console.log(a1); // será impresso o número 2 no console. 

//O valor não precisa ser 1;

a1 += 8;

console.log(a1); // será impresso o número 10 no console. 

// outras operações possíveis:

//subtração;

a1 -= 9;

console.log(a1)// Será impreso o número 1 na tela como resultado da subitração;

//multiplicação;

a1 *= 5;

console.log(a1)// Será impreso o número 5 na tela como resultado da multiplicação;

//divisão;

a1 /= 5;

console.log(a1)// Será impreso o número 5 na tela como resultado da divisão;

//módulo;

a1 %= 1;

console.log(a1)// Será impreso o número 0 na tela como resultado da operação do módulo;


// Resumo das atribuições possíveis:

// =    x = y   x = y
// +=   x += y  x = x + y
// -=   x -= y  x = x - y
// *=   x *= y  x = x * y
// /=   x /= y  x = x / y
// %=   x %= y  x = x % y


// Operadores de comparação:
// Operadores de comparação realizam uma comparação e retornam um valor boeleano 'true' or 'false'.

// '==' compara a igualdade entre os valores. Não diferencia números de strings.

let boleano1 = (1 == '1');

console.log(boleano1);// Será impresso 'true' no console, pois o comparador '==' não diferencia number e string.

// '===' compara a igualdade entre os valores e também compara o tipo de dado. Ou seja irá diferenciar números de strings.

boleano1 = (1 === '1');

console.log(boleano1); // Será impresso 'false' no console, pois o comparador '===' diferencia number e string.

// '!=' compara a diferença entre os valores, se os valores forem diferentes ele irá retornar verdadeiro, mas se os valores forem iguais retornará fals. Assim como o '==' o '!=' não diferencia number de string.

boleano1 = (1 != '1');

console.log(boleano1); // Irá retornar falso, pois o operador entende que os valores são iguais, uma vez que não diferencia number de string. 

// '!==' compara a diferença entre os valores e o tipo de dado, se os valores ou o tipo de dado forem diferentes ele irá retornar verdadeiro, mas se os valores forem iguais retornará fals. Assim como o '===' o '!==' diferencia number de string.

boleano1 = (1 !== '1');

console.log(boleano1); // Irá retornar verdadeiro, pois o operador entende que os valores são diferentes, uma vez que  diferencia number de string. 

// '>' compara se o valor é maior. Caso o valor seja maior irá retornar verdadeiro. 

boleano1 = (5 > 1);

console.log(boleano1); // irá retornar verdadeiro, pois 5 é maior que 1;

// '<' compara se o valor é menor. Caso o valor seja menor irá retornar verdadeiro. 

boleano1 = (5 < 1);

console.log(boleano1); // irá retornar falso, pois 5 é maior que 1;

// '>=' compara se o valor é maior ou igual. Caso o valor seja maior ou igual irá retornar verdadeiro. 

boleano1 = (5 >= 5);

console.log(boleano1); // irá retornar verdadeiro, pois 5 é igual a 5;

// '<=' compara se o valor é menor ou igual. Caso o valor seja menor ou igual irá retornar verdadeiro. 

boleano1 = (5 <= 1);

console.log(boleano1); // irá retornar falso, pois 5 é maior e diferente de 1;


// Operadores Lógicos:

// Operadores lógicos servem para verificar o retorno entre dois valores boleano. 

var A = true;

var B = false;

// '&&' este operador lógico, significa 'and' e verfica a ocorrência simultânea de dois valores boleanos condicionados.

var c = A && B;

console.log(c); // Será impresso 'false' no console, pois 'A' é true e 'B' é false, impossibilitando a ocorrência simultânea de ambos como true.

// Aplicação em caso prático:

var idade = 25;

var maior20 = idade > 20;
var menor30 = idade < 30;

var idadeAdmitida = maior20 && menor30;

if (idadeAdmitida) {
    console.log('Você tem ' + idade + ' anos, portanto você pode se inscrever no concurso.')
}

// '||' este operador lógico significa 'or', e verifica a ocorrência simultânea ou não de valores boleanos condicionados. 

c = A || B;

console.log(c); // Será impresso 'true' no console, pois o 'A' é true, não necessitando da ocorrência simultanea de 'B' como true. 

// Aplicação em caso prático:

idade = 65;

var menor18 = idade < 18;
var maior60 = idade > 60;

var meiaEntrada = menor18 || maior60;

if (meiaEntrada) {
    console.log('Você tem ' + idade + ' anos, portanto você tem direito a meia entrada.')
}


// '!' este operador lógico significa 'Negação', e verifica se determinada variável é falsa, caso seja falsa, ele retornará 'true', mas se a variável indicada for verdadeira ela retornará 'false'. 

c = !A;

console.log(c);// Como o valor de A é 'true', c retornará o valor 'false'.

c = !B;

console.log(c);// Como o valor de B é 'false', c retornará o valor 'true'.

//Exemplo mais direto:

console.log(!true);// Irá retornar false;
console.log(!false);// Irá retornar true;

// Strings: 

// Conceito de string: Em programação, uma string (ou "cadeia de caracteres") é uma sequência de caracteres alfanuméricos (letras, números e outros caracteres) que podem ser usados para representar palavras, frases, sentenças, parágrafos, etc. em um programa.

var string1 = 'Isso é uma string.'

console.log(string1);

// Concatenação de strings.

string1 += ' Essa string sofreu uma concatenação.'

console.log(string1);

// Se a string for composta apenas por números e sofrer uma operação matemática diferente da adicição, o javascript irá transformar a string em um number. 

string1 = '4';

console.log(string1 * 4); //Irá retornar o number 16. Deixará de ser string. 

/*  

Caracteres especiais de uma string.

\n: Representa uma quebra de linha (caractere de nova linha).

\t: Representa um caractere de tabulação.

\\: Representa um caractere de barra invertida (o próprio símbolo de barra invertida precisa ser escapado com outra barra invertida).

\": Representa um caractere de aspas duplas (também precisa ser escapado em strings delimitadas por aspas duplas).

\': Representa um caractere de aspas simples (também precisa ser escapado em strings delimitadas por aspas simples).

Esses caracteres especiais são usados ​​em strings para representar caracteres que não podem ser digitados diretamente no código-fonte ou para representar caracteres especiais que têm um significado específico em JavaScript ou em outras linguagens de programação. 

*/

// Transformando strings em números:

/* 
Em JavaScript, parseInt() é uma função embutida que converte uma string em um número inteiro. O nome "parseInt" vem de "parse integer" (analisar inteiro).

A função parseInt() aceita dois argumentos: a string que será convertida em um número e uma base numérica opcional que especifica qual sistema numérico deve ser usado para a conversão. Se nenhum segundo argumento for fornecido, parseInt() assumirá uma base 10 como padrão.

É importante notar que parseInt() tenta converter uma string em um número inteiro, mas se a string não puder ser convertida em um número válido, parseInt() retornará NaN (Not a Number). 
*/

//Aplicação prática da função parseInt();

a = '3';

b = '6';

c = parseInt(a) + parseInt(b);

console.log(c);// Após o uso da função parseInt, as Strings se tranformam em numbers e a operação de adição pode ser realizada, retornando o number 9.

// Para números reais (quebrados, com casas decimais, diferentes de números inteiros) é necessário usar a função parseFloat.

a = '3.5';

b = '6.5';

c = parseFloat(a) + parseFloat(b);

console.log(c);// Após o uso da função parseFloat, as Strings se tranformam em numbers e a operação de adição pode ser realizada, retornando o number 10.

// Alert:

/*
Alert Conceito: é uma função embutida que exibe uma mensagem na forma de uma caixa de diálogo para o usuário. Essa caixa de diálogo é exibida como uma janela pop-up no navegador da web.

A função alert() é geralmente usada para fornecer feedback imediato ao usuário em uma página da web. Por exemplo, você pode usar alert() para exibir uma mensagem de erro se o usuário inserir informações incorretas em um formulário.

A sintaxe básica da função alert() é simples. Basta passar a mensagem que você deseja exibir entre parênteses.
*/

//alert('Isso é um alert');

//Prompt:

/* 
Prompt conceito:  é uma função embutida que exibe uma caixa de diálogo para o usuário inserir um valor. Essa caixa de diálogo é exibida como uma janela pop-up no navegador da web e contém uma mensagem de texto, uma caixa de entrada de texto para o usuário inserir um valor e botões "OK" e "Cancelar".

A função prompt() é geralmente usada para solicitar entrada do usuário em uma página da web. Por exemplo, você pode usar prompt() para solicitar que o usuário insira seu nome ou outras informações relevantes em um formulário.

A sintaxe básica da função prompt() é simples. Basta passar a mensagem que você deseja exibir ao usuário como um argumento entre parênteses.

É importante notar que o valor retornado pela função prompt() é sempre uma string, mesmo que o usuário insira um número ou outro tipo de dado na caixa de entrada de texto. Se você precisar converter o valor para outro tipo de dado, como um número inteiro, pode usar a função parseInt() ou parseFloat() para fazer a conversão.

Também é importante notar que a função prompt() é uma forma de entrada do usuário e, portanto, pode ser vulnerável a ataques de segurança, como injeção de código malicioso ou roubo de informações pessoais. Por isso, é importante validar e sanitizar qualquer entrada do usuário antes de usá-la em seu código.
*/

//Utilização prática de alert e prompt:

/*  
var nomePrompt = prompt("Qual é o seu nome?"); // Será exibido um campo para o usuário preencher seu nome. 

alert("Bom dia, " + nomePrompt + "."); // Após preencher o nome será inicializado um pop up com a mensagem "Bom dia + o nome que o usuário preencheu.".

// Utilização mais avançada. 

numeroPrompt = prompt("Digite um número");

var dobro = parseFloat(numeroPrompt) * 2;// prompt sempre devolve string, por isso é necessário usar parseFloat. 

alert("O dobro de " + numeroPrompt + ' é ' + dobro + "!")// Será exibido o número escolhido e o seu repectivo dobro. 
*/

// Condicionais:

// 'IF' statment - Estruturas condicionais: 

/* 
Estruturas condicionais são construções fundamentais na programação que permitem que um programa execute diferentes ações dependendo de uma condição específica. Em outras palavras, elas permitem que um programa tome decisões com base em uma condição que é avaliada como verdadeira ou falsa.

A estrutura condicional mais básica é a declaração "if", que testa se uma determinada condição é verdadeira e, se for, executa uma ou mais instruções.

Além da declaração "if", existem outras estruturas condicionais como "if-else", "if-elif-else" e "switch-case" (em algumas linguagens de programação), que permitem que um programa execute diferentes ações com base em diferentes condições.

As estruturas condicionais são essenciais na programação porque permitem que um programa se adapte e tome decisões com base em diferentes cenários e entradas de usuário. Isso torna os programas mais flexíveis e úteis para o usuário final.

*/

// Sintaxe do if statement:
/* 
if (condition) {
    
}
*/

// Sintaxe do if-else statement:

/* 
if (condition) {
    
} else {
    
} 
*/

// Sintaxe do if-else statement com else if:

/* 
if (condition) {
    
} else if (condition){
    
} else {

}
*/


// Aplicação prática da condicional 'IF':

//OBS: Se houver mais de uma linha de comando é preciso usar um bloco de comando usando '{}';

function verificarIdade(idade) {
    if (idade > 70 || idade < 18) {
        console.log('Você não pode consumir bebida alcóolica.')
    } else if (idade >= 35) {
        console.log('Você pode consumir bebida alcóolica, qual o seu pedido?')
    } else {
        console.log('Você pode consumir bebida alcóolica, mostre sua identidade.')
    };
}

verificarIdade(18);// Como idade é maior ou igual a 18, porém menor que 35, o console retornará a string 'Você pode consumir bebida alcóolica,  mostre sua identidade.';

verificarIdade(17);// Como idade é menor que 18, o console retornará a string 'Você não pode consumir bebida alcóolica.';

verificarIdade(75);// Como idade é maior que 70, o console retornará a string 'Você não pode consumir bebida alcóolica.';

verificarIdade(35);// Como idade é maior ou igual a 35, o console retornará a string 'Você pode consumir bebida alcóolica, qual o seu pedido?';

// OPERADOR TERNÁRIO:

// Concieto do operador ternário:

/* 
O operador ternário é uma expressão condicional que permite escrever uma instrução de forma mais concisa, em vez de utilizar a estrutura condicional "if-else" completa. Ele é utilizado em muitas linguagens de programação para avaliar uma condição e retornar um valor com base nessa condição.

O operador ternário é chamado de "ternário" porque ele possui três operandos: a condição a ser avaliada, o valor a ser retornado se a condição for verdadeira e o valor a ser retornado se a condição for falsa.
*/

// Sitaxe do operador ternário:

/* 
condição ? valor_verdadeiro : valor_falso
*/

// Exemplo prático:

idade = 17;

idade >= 18 ? console.log('Idade é maior que 18.') : console.log('Idade não é maior que dezoito.');// Como idade é 17, irá retornar ao console a string 'Idade não é maior que dezoito.'.

// Operador ternário pode ser colocado dentro de uma variável para retornar um valor booleano. 

idade = 19;

var MaiorDeDezoito = idade >= 18 ? true : false;


console.log(MaiorDeDezoito);// Como idade é maior que 19, irá retornar o valor booleano true para o console. 

//OBS: Ficar atento, pois a atribuição do valor da variável deve ser feita antes da atribuição da operação ternária, caso contrário a operação será feita com o valor original e não com o novo valor atribuído. Exemplo:

idade = 17;

console.log(MaiorDeDezoito);// Mesmo a nova idade sendo menor que 18, irá retornar o valor booleano true para o console, pois a operação ternária foi feita quando idade ainda tinha o valor original de 19.

// Condicionais:

// Switch:

// Conceito:

/* 
uma expressão e executar um bloco de código correspondente a um determinado valor. É uma alternativa ao uso de várias instruções "if-else" encadeadas e pode tornar o código mais legível e fácil de entender.

Onde "expressão" é a expressão a ser avaliada e "valor1", "valor2", "valor3", etc. são os valores possíveis que a expressão pode ter. Se a expressão for igual a um dos valores, o bloco de código correspondente é executado. Se nenhum dos valores corresponder à expressão, o bloco de código dentro da instrução "default" é executado (opcional).
*/

// Sintaxe do condicional 'switch':

/* 
switch (key) {
    case value:
        
        break;

        case value:
        
        break;

    default:
        break;
} 
*/

// Aplicação prática:

function listaDeTarefas(hora) {

    switch (hora) {
        case 8:
            console.log('São 8hrs, Hora de tomar café da manhã.');
            break; // break é necessário para interromper a execução do código assim que o critério é atingido. 
        case 9:
            console.log('São 9hrs, Hora de lavar a louça.');
            break;
        case 10:
            console.log('São 10hrs, Hora de estudar inglês.');
            break;
        case 11:
            console.log('São 11hrs, Hora de estudar GIT.');
            break;
        case 12:
            console.log('São 12hrs, Hora de almoçar.');
            break;
        case 13:
            console.log('São 13hrs, Hora de lavar a louça.');
            break;
        case 14:
            console.log('São 10hrs, Hora de estudar Javascript.');
            break;
        case 15:
            console.log('São 11hrs, Hora de estudar HTML.');
            break;
        case 16:
            console.log('São 11hrs, Hora de estudar CSS.');
            break;
        case 17:
            console.log('São 17hrs, Hora de estudar inglês.');
            break;
        case 18:
            console.log('São 18hrs, Hora de jantar.');
            break;

        default:
            console.log('Coloque um valor entre 8 e 18.');
            break;
    }

}

listaDeTarefas(6);// O console irá retonar a string 'Coloque um valor entre 8 e 18.';

listaDeTarefas(11);// O console irá retonar a string 'São 11hrs, Hora de estudar GIT.';

listaDeTarefas(15);// O console irá retonar a string 'São 11hrs, Hora de estudar HTML.';

// Outra aplicação prática:

function mediaCalc(nota1, nota2, nota3, nota4) {

    var notas = [nota1, nota2, nota3, nota4];

    var somaNotas = somaArray(notas);

    function somaArray(array) {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i];
        }
        return total;
    }

    var media1 = somaNotas / notas.length;

    return media1;
}

media = mediaCalc(10, 7.5, 8.0, 6.5);

var conceito = "";

if (media >= 8) {
    conceito = "ÓTIMO";
} else if (media >= 6.5) {
    conceito = "BOM";
} else {
    conceito = "REGULAR"
}

function boletim(m) {
    switch (m) {
        case "ÓTIMO":
            console.log("Sua é média é " + media + " Parabéns, seu conceito é " + conceito + "!");
            break;

        case "BOM":
            console.log("Sua é média é " + media + " seu conceito é " + conceito + ", mas você pode melhorar");
            break;

        case "REGULAR":
            console.log("Sua é média é " + media + " seu conceito é " + conceito + ", você precisa estudar mais.");
            break;

        default:
            console.log("Houve algum erro.")
            break;

    }
}

boletim(conceito);


// Comando/laço de repetição - For-Loop:

// Conceito:

/*
O for-loop é uma estrutura de repetição em JavaScript que permite que você execute um bloco de código várias vezes, baseado em uma condição ou um conjunto de condições. O for-loop é uma das estruturas de repetição mais utilizadas em JavaScript e é muito útil quando você precisa iterar sobre um conjunto de dados, como um array.

A inicialização é onde você define o valor inicial da variável que será usada no loop.

A condição é a condição que deve ser verdadeira para que o loop continue a ser executado.

O incremento é a operação que será executada após cada iteração do loop, geralmente incrementando ou decrementando a variável que está sendo usada como contador.
*/

// For-Loop - sintaxe:

/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
*/

// Aplicação prática:

function repeticao(n) {
    for (let i = 1; i <= n; i++) {
        console.log("Executando o comando de repetição For-Loop pela " + i + "ª vez.");
    }

    return console.log('O comando de repetição acabou.')
}

repeticao(5); // O comando de repetição será executado 5 vezes no console, antes de finalizar o Loop. 

// Comando/laço de repetição - While:

// Conceito:

/*
O laço de repetição while em JavaScript é outra estrutura de repetição que permite que você execute um bloco de código repetidamente, desde que uma condição seja verdadeira. Ele é geralmente utilizado quando você não sabe quantas vezes um loop precisa ser executado, mas sabe qual é a condição que deve ser atendida para que ele pare de ser executado.

OBS: É preciso tomar cuidado ao utilizar esse laço de repetição, pois caso não seja denido um parâmetro esperado para a finalização da execução do código, o código irá se repetir infinitamente até travar o progrma.

Um loop infinito pode causar problemas sérios em um programa, como travamentos ou sobrecarga do processador, pois o programa ficará preso em um loop sem fim. Para evitar loops infinitos, é importante definir uma condição de saída para o loop, seja com um valor booleano, uma expressão condicional ou uma quebra explícita do loop utilizando a palavra-chave break
*/

// While - sintaxe:

/* 
while (condition) {
    
}
 */

// Aplicação prática:

function contagemRegressiva(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }

    return console.log('Contagem regressiva encerrada.');
}

contagemRegressiva(10);// Será impresso uma contagem regressiva iniciando pelo 10, e após imprimir o número zero a contagem será encerrada. 

// Arrays

// Conceito:

/* 
Um array (arranjo ou vetor) é um conjunto de dados (que pode assumir os mais diversos tipos, desde do tipo primitivo, a objeto dependendo da linguagem de programação). Arrays são utilizados para armazenar mais de um valor em uma única variável. Isso é comparável a uma variável que pode armazenar apenas um valor.

Cada item do array tem um número ligado a ele, chamado de índice numérico, que permite acesso a cada "valor" armazenado na váriavel.

OBS: Os elementos de um Array podem ser numbers, strings, booleanos, objects etc...

OBS: O index do array sempre começa pelo número 0; 
 */

// Sintaxe:

var array = [0, 1, 2, 3, 4, 5];

console.log(array);

var vetor = new Array(0, 1, 2, 3, 4, 5);

console.log(vetor);

// Aplicação prática:

var alunos = ['André', 'Bruno', 'Bernardo', 'João', 'Thales', 'Victor'];

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);// A lista de alunos será impressa na ordem do array.
}

// Outra forma de executar o laço de repetição:

for (var i in alunos) {
    console.log(alunos[i]);// Também irá imprimir a lista de alunos em um laço de repetição.
}

// Outra forma de executar o laço de repetição em arrays:

for (var aluno of alunos) {
    console.log(aluno);// Irá imprimir diretamente o elemento indexado em um laço de repetição. 
}

// Funções:

// Conceito:

/* 
Uma função JavaScript nada mais é que um bloco de código que realiza uma tarefa, uma operação, sendo executada quando é chamada por alguém ou invocada.

A grosso modo, a função pode ser entendida como uma variável que executa um bloco de comando. 
 */

// Sintaxe:

/* 
function name(params) {
    
} 
*/

// Aplicação prática:

function somaDeValores(a, b) {
    return console.log(a + b);
}// Aqui a função foi declarada, porém ela somente será executada quando for chamada novamente. 

somaDeValores(5, 10); // A função será executada somando os valores declarados como argumentos, retornando ao console o valor da soma, 15 neste caso. 

// Função pode ser atribuída como uma variavel.

var resultado = somaDeValores;// Como não foram utilizados parenteses, a função não é executada, e acaba sendo armezenada na variável. 

resultado(5, 5);// Agora a variável, que contem a função, pode ser utilizada como se fosse a função original. Nesse caso a função de soma será executada com os argumentos declrarados na variável. 


// Criando um afunção anônima:

var funcaoAnonima = function (a, b) {
    return console.log(a + b);
};

funcaoAnonima(2, 2);// A variável irá executar a função anônima, realizando assim a operação de soma com os argumentos que lhe feram passados. 

// Funções também podem ser criadas através de arrow functions:

var arrowFunction = (a, b) => console.log(a + b);// Com a arrow funciton de apenas uma linha não é necessário abrir um bloco de comando. 

arrowFunction(2, 8);// A variável irá excutar a arrow function, realizando assim a operação de soma com os argumentos que lhe forem passados. 

// Exercício: Cria uma função que retorne o nome do aluno, a sua nota 1, sua nota 2, a média e se ele foi aprovado ou reprovado. 

var alunos1 = ["Pedro", "Maria", "Fernando", "Felipe", "João"];

var notas1 = [5.5, 6.0, 4.5, 8.0, 3.0];
var notas2 = [4.5, 8.0, 2.5, 9.0, 6.0];

var media1 = 5.0;

function mediaDoAluno(n1, n2) {
    return (n1 + n2) / 2;
}

function passei(media) {
    if (media >= media1) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

function boletin() {
    for (let i = 0; i < alunos1.length; i++) {
        m = mediaDoAluno(notas1[i], notas2[i]);

        console.log(alunos[i] +
            " - 1ª Nota - " +
            notas1[i] +
            " - 2ª Nota - " +
            notas2[i] +
            " - Média - " +
            m +
            " - " +
            passei(m));
    }
}

boletin();

// Objetos:

// Conceito: 

/* 
Em JavaScript, um objeto é uma coleção de propriedades, onde cada propriedade é uma associação entre um nome (ou chave) e um valor. O valor de uma propriedade pode ser uma função, tornando-a um método do objeto.

Em outras palavras, um objeto é uma coleção de propriedades, onde cada propriedade é uma chave (ou nome) que mapeia para um valor. Os valores podem ser qualquer tipo de dados, como strings, números, booleanos, funções, objetos e assim por diante.

Os objetos em JavaScript podem ser criados de diversas formas, como por meio de literais de objetos, por meio da função construtora "Object()" ou por meio de funções construtoras personalizadas.
*/

// Sintaxe:

var objeto = {
    prop1: "val1",
    prop2: "val2",
    prop3: "val3",
    prop4: "val4"
}

var objeto2 = new Object();

objeto2.prop1 = 'val1';
objeto2.prop2 = 'val2';
objeto2.prop3 = 'val3';

console.log(objeto2);

// Adicionando novas propriedades:

objeto.prop5 = "val5";// Também poderia ser escrito objeto['prop5'] = "val5"

console.log(objeto);// A propriedade prop5 e o valor val5  foram adicionados ao objeto. 

// É possível moficar apenas o valor da propriedade.

objeto['prop5'] = "val50";// Agora o valor da prop5 é val50;

console.log(objeto);

// Para deletar uma propriedade basta utilizar o seguinte comando:

delete objeto['prop5']; // Tanto a prop5 quanto val50 foram deletados do objeto;

console.log(objeto);

//Utilização prática:

var aluno10 = {
    nome: "Fernando",
    notas: [7.5, 6.5]
}

aluno10.matricula = 12345;

aluno10["sobrenome"] = "Oliveira";

console.log(aluno10);

// Adatptando a função do Boletin escolar para utilização com objetos:

var turma1 = [
    {
        nome: "Andre",
        notas: [7.5, 5.5, 6.0, 8.0, 5.0]
    },
    {
        nome: "Felipe",
        notas: [5.5, 2.5, 4.0, 6.0, 3.0]
    },
    {
        nome: "Maria",
        notas: [7.5, 9.5, 9.0, 8.5, 10]
    },
    {
        nome: "Joana",
        notas: [4.5, 1.5, 4.0, 7.0, 3.5]
    },
    {
        nome: "João",
        notas: [4.5, 5.5, 6.0, 7.0, 3.5]
    }
];

function mediaEscolar(notas) {
    let total = 0;
    for (let i = 0; i < notas.length; i++) {
        total += notas[i];
    }
    return total / notas.length;
}

var notas5 = [5, 5, 5, 5];

console.log(mediaEscolar(notas5));

// Nova função Boletim utilizando lista de alunos em Objetos.
function boletimEscolar(turma) {
    let aluno = '';
    let notasBimestrais = [];
    for (let i = 0; i < turma.length; i++) {
        aluno = turma[i]['nome'];
        notasBimestrais = [];
        for (let j = 0; j < turma[i]['notas'].length; j++) {
            notasBimestrais.push(turma[i]['notas'][j]);
            aluno += " - " + (j + 1) + "ª Nota - " + turma[i]['notas'][j];
        }

        let mediaAluno = mediaEscolar(notasBimestrais);
        let passeiAluno = passei(mediaAluno);

        console.log(aluno + " - media - " + mediaAluno + " - " + passeiAluno);
    }

    return "Boletim Escolar";
}

console.log(turma1);

console.log(boletimEscolar(turma1));

// Objetos - métodos:

// Conceito 

/* 
Métodos dentro de um objeto, nada mais são que funções dentro da propriedade de um objeto. 
*/

//Aplicação prática:

function calcMedia() {
    return (this.notas[0] * 2 + this.notas[1]) / 3;
}

// O método 'this' dependerá do contexto em que está inserido, como a função será chamada dentro de um objeto, o 'this' irá utilizar a propriedade 'notas' dentro do objeto.

var aluno100 = {
    nome: "Juan",
    notas: [5.5, 7.0],

    media: calcMedia
}

console.log(aluno100.nome)// Será impresso no console o nome "Juan";

console.log(aluno100.media());//Será impresso no console o valor da média 6;

// Objetos construtores:

//Conceito:

/* 
Em JavaScript, um objeto construtor é uma função que é usada para criar instâncias de objetos. Ao criar um objeto construtor, você pode definir propriedades e métodos que estarão presentes em cada instância do objeto que for criada. Essas propriedades e métodos podem ser acessados usando a notação de ponto.
*/

// Aplicação prática:


// Objeto construtor// Essa função não é um objeto em si, mas ela retorna um objeto.
function criarAluno(nome, n1, n2) {
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function () {
            return (this.nota1 + this.nota2) / 2;
        }
    }
}

// Criando uma Array utilizando o objeto construtor com diferentes parâmetros:
var turma10 = [
    criarAluno('Felipe', 5.5, 6.0),
    criarAluno('Juliana', 8.5, 9.0),
    criarAluno('Juan', 2.5, 4.0),
    criarAluno('Frederico', 7.5, 8.0),
    criarAluno('Carlos', 9.5, 10)
]

turma10.forEach(element => {
    console.log(element.nome + " - " + element.media())
});// Será impresso no console a lista de alunos com a suas respectivas médias. 

// Outra forma de fazer o mesmo laço de repetição:
for (var aluno of turma10) {
    console.log(aluno.nome + " - " + aluno.media())
};// Será impresso no console a lista de alunos com a suas respectivas médias. 

// Outra forma de criar Objetos construtores:

function aluno50(nome, n1, n2) {
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = () => {
        return (this.nota1 + this.nota2) / 2;
    }
}

var alunoNovo1 = new aluno50('Pedro', 7.5, 4.0);// Foi criado um novo aluno a partir do objeto construtor.

//Obs: O 'new' é utilizado para instanciar o objeto que ainda não foi crado pela função. 

console.log(alunoNovo1)

console.log(alunoNovo1.nome + " - " + alunoNovo1.media())// Será impresso no console as informações criadas para o novo aluno - Pedro - 5.75;

//Datas

//Conceito:

/* 
Em JavaScript, a manipulação de datas é feita usando o objeto Date. O objeto Date representa uma data e hora específicas, e oferece uma variedade de métodos para manipular e exibir datas e horários.

Você pode criar um novo objeto Date de várias maneiras. A maneira mais comum é passando a data e hora desejadas como parâmetros para o construtor Date:
*/

// sintaxe:

// new Date(year, month, day, hours, minutes, seconds, milliseconds);

// Se somente um parâmtro for informado, a função irá interpretar como milissegundos a partir das 21:00 horas de 31/12/1969 - Fuso horário de brasília GMT-0300.

var d = new Date(1000); // mil milessegundos correponde a um segundo.

console.log("Quando apenas um parâmetro é informado, a função data retornará está data, adicionando o parâmtro informado como milissegundos, portanto será adicionado um segundo a data de 31/12/1969 - 21:00:00 - " + d)

//OBS os meses correspondem a um array com index de 0 a 11, portanto o os meses correspondem a numeração anterior da esperada. Exemplo 8 correponde a setembro e 1 corresponde a fevereiro. 

// Criando um objeto Date com a data atual
var hoje = new Date();

console.log("data e horário atual: " + hoje); //A data deve ser escrita no padrão americano, ou seja o mês vem antes do dia. 

// Criando um objeto Date com a data e hora especificadas
var natal = new Date(2023, 11, 25, 0, 0, 0, 0); // 25 de dezembro de 2023 às 00:00:00

console.log("data e horário específico, neste caso meia noite de natal: " + natal);

//Uma vez que você tenha um objeto Date, pode acessar e modificar suas propriedades, como a data, hora, minutos, segundos e milissegundos:

var agora = new Date();

console.log(agora.getFullYear()); // Retorna o ano atual (ex: 2023)
console.log(agora.getMonth()); // Retorna o mês atual (de 0 a 11, sendo 0 = janeiro)
console.log(agora.getDate()); // Retorna o dia do mês atual (de 1 a 31)
console.log(agora.getHours()); // Retorna a hora atual (de 0 a 23)
console.log(agora.getMinutes()); // Retorna os minutos atuais (de 0 a 59)
console.log(agora.getSeconds()); // Retorna os segundos atuais (de 0 a 59)
console.log(agora.getMilliseconds()); // Retorna os milissegundos atuais (de 0 a 999)
console.log(agora.getDay()); // Retorna um index de 0 a 6 correspondente ao dia da semana - para funcionar adequadamente é preciso criar um array com os dias da semana;

var diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'];
console.log('Irá imprimir o dia da semana - ' + diasDaSemana[agora.getDay()]);

//Você também pode usar os métodos set para definir uma data e hora específicas em um objeto Date:

var data = new Date();
data.setFullYear(2024);
data.setMonth(6); // mês de julho (de 0 a 11)
data.setDate(15);
data.setHours(13);
data.setMinutes(30);
data.setSeconds(0);
data.setMilliseconds(0);

console.log(data); // Sat Jul 15 2024 13:30:00 GMT-0300 (Horário Padrão de Brasília)

/* 
Além disso, o objeto Date oferece vários métodos para exibir a data e hora de várias maneiras. Alguns exemplos são toLocaleString(), toLocaleDateString(), toLocaleTimeString(), toDateString(), toTimeString(), toISOString(), entre outros.
*/

// Setando a data do meu aniversário:

var aniversario = new Date(1987, 8, 23, 7, 38, 40);
console.log("Data de nascimento - " + aniversario);

aniversario.setHours(14);// Alterando o horáro de nascimento.
console.log("Data de nascimento, com novo horário - " + aniversario);

// A data também pode ser criada por string, porém deve respeitar o padrão americano:

var dataString = new Date('09/23/1987 14:00:00');

console.log('Data criada com parâmetros em string - ' + dataString);

// Lista de métodos para manipular datas em javascript:

/*

Formas de instanciar uma Data:

var d = new Date();
var d = new Date(milliseconds);
var d = new Date(dateString);
var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
*/

//​Métodos para manipular datas:

/* 
getDate()	Returns the day of the month (from 1-31)

getDay()	Returns the day of the week (from 0-6)

getFullYear()	Returns the year

getHours()	Returns the hour (from 0-23)

getMilliseconds()	Returns the milliseconds (from 0-999)

getMinutes()	Returns the minutes (from 0-59)

getMonth()	Returns the month (from 0-11)

getSeconds()	Returns the seconds (from 0-59)

getTime()	Returns the number of milliseconds since midnight Jan 1 1970, and a specified date

getTimezoneOffset()	Returns the time difference between UTC time and local time, in minutes

getUTCDate()	Returns the day of the month, according to universal time (from 1-31)

getUTCDay()	Returns the day of the week, according to universal time (from 0-6)

getUTCFullYear()	Returns the year, according to universal time

getUTCHours()	Returns the hour, according to universal time (from 0-23)

getUTCMilliseconds()	Returns the milliseconds, according to universal time (from 0-999)

getUTCMinutes()	Returns the minutes, according to universal time (from 0-59)

getUTCMonth()	Returns the month, according to universal time (from 0-11)

getUTCSeconds()	Returns the seconds, according to universal time (from 0-59)

getYear()	Deprecated. Use the getFullYear() method instead

now()	Returns the number of milliseconds since midnight Jan 1, 1970

parse()	Parses a date string and returns the number of milliseconds since January 1, 1970

setDate()	Sets the day of the month of a date object

setFullYear()	Sets the year of a date object

setHours()	Sets the hour of a date object

setMilliseconds()	Sets the milliseconds of a date object

setMinutes()	Set the minutes of a date object

setMonth()	Sets the month of a date object

setSeconds()	Sets the seconds of a date object

setTime()	Sets a date to a specified number of milliseconds after/before January 1, 1970

setUTCDate()	Sets the day of the month of a date object, according to universal time

setUTCFullYear()	Sets the year of a date object, according to universal time

setUTCHours()	Sets the hour of a date object, according to universal time
setUTCMilliseconds()	Sets the milliseconds of a date object, according to universal time

setUTCMinutes()	Set the minutes of a date object, according to universal time

setUTCMonth()	Sets the month of a date object, according to universal time

setUTCSeconds()	Set the seconds of a date object, according to universal time

setYear()	Deprecated. Use the setFullYear() method instead

toDateString()	Converts the date portion of a Date object into a readable string

toGMTString()	Deprecated. Use the toUTCString() method instead

toISOString()	Returns the date as a string, using the ISO standard

toJSON()	Returns the date as a string, formatted as a JSON date

toLocaleDateString()	Returns the date portion of a Date object as a string, using locale conventions

toLocaleTimeString()	Returns the time portion of a Date object as a string, using locale conventions

toLocaleString()	Converts a Date object to a string, using locale conventions

toString()	Converts a Date object to a string

toTimeString()	Converts the time portion of a Date object to a string

toUTCString()	Converts a Date object to a string, according to universal time

UTC()	Returns the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time

valueOf()	Returns the primitive value of a Date object
*/

// Variáveis

//Conceito:

/* 
Em JavaScript, uma variável é um nome que representa um valor. As variáveis em JavaScript são usadas para armazenar e manipular dados.

A declaração de uma variável em JavaScript é feita usando uma das três palavras-chave reservadas: var, let ou const. A escolha da palavra-chave depende do escopo da variável e se o valor dela será ou não alterado.

A declaração de uma variável com var é globalmente ou localmente (para a função) escopo e pode ser redeclarada ou reatribuída:
*/

// Declarando uma variável com var
var mensagem = "Olá, mundo!";

// Redefinindo o valor da variável
mensagem = "Olá, JavaScript!";

// Declarando outra variável com var (mesmo nome)
var mensagem = "Oi, de novo!";

console.log(mensagem); // "Oi, de novo!"

/* 
A declaração de uma variável com let e const tem escopo de bloco (entre chaves {}) e não pode ser redeclarada, mas pode ser reatribuída (exceto no caso do const):
*/

// Declarando uma variável com let
let idadeN = 18;

// Redefinindo o valor da variável
idadeN = 19;

// Declarando uma variável com const
const PI = 3.141592;

// Tentando redefinir o valor da variável const (vai gerar um erro)
//PI = 3.14;

// A constante pode não pode ser reatribuída, porém pode ser modifica, como no caso abaixo:

const ARRAYCONST = [];

ARRAYCONST.push('Mofificando a constante');

console.log(ARRAYCONST);

// Outro exemplo:

const OBJECTCONST = {};

OBJECTCONST.change = "Constante Modificada";

console.log(OBJECTCONST);

/* 
As variáveis em JavaScript podem armazenar diferentes tipos de dados, como strings, números, booleanos, objetos e até mesmo funções. A tipagem em JavaScript é dinâmica, o que significa que o tipo de uma variável pode mudar durante a execução do programa:
*/

// Declarando uma variável sem inicialização
let nomeN;

// Atribuindo um valor string à variável
nomeN = "João";

// Atribuindo um valor numérico à variável
nomeN = 25;

// Atribuindo um objeto à variável
nomeN = { primeiroNome: "João", sobrenome: "Silva" };

// A diferença entre 'let' e 'var' ocorre em relação ao escopo. O let é uma variável local de escopo limitado, ou seja, só pode ser acessada dentro do bloco de comando em que foi criada, enquanto a var é uma variável global que pode ser acessada de qualquer lugar do código.

// Obs. A const também é uma variável de escopo local. 




















