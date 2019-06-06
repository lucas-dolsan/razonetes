import React, { Component } from 'react'
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import Pergunta from './classes/pergunta'
import RespostaForm from './classes/respostaForm';
import { toast } from 'react-toastify';
import Final from './classes/final';

toast.configure()

const alternativaTypes = {
  A: 'resposta/A',
  B: 'resposta/B',
  C: 'resposta/C',
  D: 'resposta/D',
}


// Call it once in your app. At the root of your app is the best place

const printErrou = () => toast.error("Errou... 😫");
const printAcertou = () => toast.success("Acertou! 😉");
const printFim = () => toast.info('😥💁‍ Acabaram as perguntas 💁‍😥')


export default class App extends Component {
  constructor(args) {
    super(args)
    this.state = {
      chegouAoFim: false,
      pontos: 0,
      indexPerguntaAtual: 0,
      perguntas: [
        {
          id: 1,
          texto: "Classifique as contas abaixo como bens, direitos ou obrigações. I. Adiantamento a Fornecedores. II. Adiantamento de Clientes. III. Adiantamento de Salários. Após procedida a classificação, é correto afirmar que:",
          alternativas: [
            { texto: 'A - todas as contas se referem a bens.', opcao: alternativaTypes.A },
            { texto: 'B - todas as contas se referem a direitos.', opcao: alternativaTypes.B },
            { texto: 'C - todas as contas se referem a obrigações.', opcao: alternativaTypes.C },
            { texto: 'D - a conta referente ao item II trata de uma obrigação.', opcao: alternativaTypes.D },
          ],
          alternativaCorreta: alternativaTypes.D,
          pontos: 10
        },

        {
          id: 2,
          texto: "Assinale a opção correta.",
          alternativas: [
            { texto: 'A - A contabilização feita ao mesmo tempo a débito de duas contas e a crédito de apenas uma conta caracteriza um lançamento de terceira fórmula.', opcao: alternativaTypes.A },
            { texto: 'B - O lançamento contábil efetuado a débito de uma conta de despesa aumentará o patrimônio líquido, pois a conta representa um consumo de riquezas.', opcao: alternativaTypes.B },
            { texto: 'C - A contabilização feita ao mesmo tempo a débito de duas contas e a crédito de apenas uma conta caracteriza o registro de um fato administrativo aumentativo.', opcao: alternativaTypes.C },
            { texto: 'D - O lançamento contábil efetuado a crédito de uma conta de receita aumentará o patrimônio líquido, pois a conta representa uma redução de consumo.', opcao: alternativaTypes.D },
          ],
          alternativaCorreta: alternativaTypes.A,
          pontos: 10
        },

        {
          id: 3,
          texto: "Um lançamento a crédito da conta Aluguéis a Pagar, se não for de estorno, representa:",
          alternativas: [
            { texto: 'A - Um aumento do patrimônio líquido', opcao: alternativaTypes.A },
            { texto: 'B - Um aumento do ativo', opcao: alternativaTypes.B },
            { texto: 'C - Um decréscimo do ativo', opcao: alternativaTypes.C },
            { texto: 'D - Uma redução do patrimônio líquido', opcao: alternativaTypes.D },
            { texto: 'E - Um acréscimo no passivo. ', opcao: alternativaTypes.E },
          ],
          alternativaCorreta: alternativaTypes.E,
          pontos: 10
        },

        {
          id: 4,
          texto: "O patrimônio de uma empresa era constituído da seguinte forma: Caixa R$ 300.000; Fornecedores R$ 75.000 e Capital Social R$ 225.000. Durante o exercício social em questão, foram realizadas as seguintes operações: 1.	Aquisição de um veículo para uso próprio, a prazo: R$ 30.000 2.	Compra de mercadorias, a vista R$ 100.000 3.	Vendas de mercadorias, a prazo R$ 150.000 com lucro de R$ 50.000 4.	Despesas Administrativas, a dinheiro R$ 25.000.",
          alternativas: [
            { texto: 'A - Ativo = R$ 324.000; Passivo = R$ 90.000 e Patrimônio Líquido = R$ 215.000', opcao: alternativaTypes.A },
            { texto: 'B - Ativo = R$ 310.000; Passivo = R$ 90.000 e Patrimônio Líquido = R$ 225.000', opcao: alternativaTypes.B },
            { texto: 'C - Ativo = R$ 315.000; Passivo = R$ 90.000 e Patrimônio Líquido = R$ 235.000', opcao: alternativaTypes.C },
            { texto: 'D - Ativo = R$ 355.000; Passivo = R$ 105.000 e Patrimônio Líquido = R$ 250.000', opcao: alternativaTypes.D },
            { texto: 'Ativo = R$ 320.000; Passivo = R$ 90.000 e Patrimônio Líquido = R$ 255.000', opcao: alternativaTypes.E },
          ],
          alternativaCorreta: alternativaTypes.D,
          pontos: 10
        },


        {
          id: 5,
          texto: "Os saldos das contas Caixa e Bancos no dia 1º do mês eram, respectivamente, de R$ 7.000,00 e R$ 74.000,00. •	Foram feitos saques em conta-corrente bancária no valor de R$ 58.000,00, em dinheiro; •	Foram feitos depósitos bancários no montante de R$ 50.000,00; •	Não foram feitos outros créditos na conta Caixa; •	No dia 31, o saldo da conta Caixa era de R$ 15.000,00. É correto afirmar que os valores: (1) total de débitos feitos no período à conta Caixa e (2) saldo da conta Bancos eram, no dia 31, respectivamente, de:",
          alternativas: [
            { texto: 'A - Ativo = R$ 324.000; Passivo = R$ 90.000 e Patrimônio Líquido = R$ 215.000', opcao: alternativaTypes.A },
            { texto: 'B - Ativo = R$ 310.000; Passivo = R$ 90.000 e Patrimônio Líquido = R$ 225.000', opcao: alternativaTypes.B },
            { texto: 'C - Ativo = R$ 315.000; Passivo = R$ 90.000 e Patrimônio Líquido = R$ 235.000', opcao: alternativaTypes.C },
            { texto: 'D - Ativo = R$ 355.000; Passivo = R$ 105.000 e Patrimônio Líquido = R$ 250.000', opcao: alternativaTypes.D },
            { texto: 'Ativo = R$ 320.000; Passivo = R$ 90.000 e Patrimônio Líquido = R$ 255.000', opcao: alternativaTypes.E },
          ],
          alternativaCorreta: alternativaTypes.D,
          pontos: 10
        },


        {
          id: 6,
          texto: "Uma das atividades iniciais para a elaboração da contabilidade é a planificação das contas necessárias à revelação de todos os componentes patrimoniais, bem como suas variações. Este planejamento denomina-se:",
          alternativas: [
            { texto: 'A - Demonstrações financeiras ', opcao: alternativaTypes.A },
            { texto: 'B - Plano de diretrizes orçamentárias', opcao: alternativaTypes.B },
            { texto: 'C - Plano de metas', opcao: alternativaTypes.C },
            { texto: 'D - Plano de contas.', opcao: alternativaTypes.D },
          ],
          alternativaCorreta: alternativaTypes.D,
          pontos: 10
        },

        {
          id: 7,
          texto: "Um lançamento em que ocorre um crédito a clientes e um débito a caixa corresponde ao registro do seguinte fato administrativo:",
          alternativas: [
            { texto: 'A - O cliente pagou uma duplicata no banco.', opcao: alternativaTypes.A },
            { texto: 'B - O cliente pagou uma duplicata ainda não vencida.', opcao: alternativaTypes.B },
            { texto: 'C - O cliente liquidou suas dívidas com a empresa.', opcao: alternativaTypes.C },
            { texto: 'D - Houve um pagamento de clientes com ingresso do valor correspondente no caixa da empresa.', opcao: alternativaTypes.D },
          ],
          alternativaCorreta: alternativaTypes.D,
          pontos: 10
        },
      ],
    }
  }


  pontuar(valor) {
    this.setState(prevState => {
      return { pontos: prevState.pontos + valor }
    })
  }



  avancarPergunta() {
    this.setState(({ indexPerguntaAtual }) => {
      return this.state.indexPerguntaAtual !== this.state.perguntas.length - 1
        ? { indexPerguntaAtual: indexPerguntaAtual + 1 }
        : { chegouAoFim: true }
    })
  }

  responder(perguntaAtual, alternativa) {
    if (perguntaAtual.alternativaCorreta === alternativa) {
      this.pontuar(perguntaAtual.pontos)
      printAcertou()
    } else {
      printErrou()
    }
    this.avancarPergunta()
  }

  render() {
    const perguntaAtual = this.state.perguntas[this.state.indexPerguntaAtual]
    if (this.state.chegouAoFim) {
      return <Final totalPontos={this.state.pontos} />
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <Pergunta texto={perguntaAtual.texto} />
            <RespostaForm
              alternativas={perguntaAtual.alternativas}
              onClick={alternativa => this.responder(perguntaAtual, alternativa)}
            />
            <h3>Pontuação: {this.state.pontos} 🏆</h3>
          </header>
        </div>
      )
    }
  }
}
