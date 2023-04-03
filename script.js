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




