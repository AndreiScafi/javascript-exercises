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

var nomePrompt = prompt("Qual é o seu nome?"); // Será exibido um campo para o usuário preencher seu nome. 

alert("Bom dia, " + nomePrompt + "."); // Após preencher o nome será inicializado um pop up com a mensagem "Bom dia + o nome que o usuário preencheu.".

// Utilização mais avançada. 

numeroPrompt = prompt("Digite um número");

var dobro = parseFloat(numeroPrompt) * 2;// prompt sempre devolve string, por isso é necessário usar parseFloat. 

alert("O dobro de " + numeroPrompt + ' é ' + dobro + "!")// Será exibido o número escolhido e o seu repectivo dobro. 

