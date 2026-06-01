## Orientações:

O Trabalho de Conclusão da Disciplina será dividido entre um exercício prático de Javascript e um formulário de perguntas, cada um valendo 50%.

### Parte prática de Javascript:

Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar o último pagamento. Pagamentos serão armazenados como objetos Javascript dentro de uma lista de pagamentos. Cada pagamento terá as propriedades: Código de Barras, Empresa e Valor. Quando um pagamento for realizado e o valor for maior que 100.00, o pagamento também terá a propriedade categoria como 'cara', caso contrário, a propriedade categoria ficará como 'padrão'. O método de consultar trará apenas o último pagamento.
  
ex.
```javascript
const servicoDePagamento = new ServicoDePagamento();
servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
console.log(servicoDePagamento.consultarUltimoPagamento());
{
    codigoBarras: '0987-7656-3475',
    empresa: 'Samar',
    valor: 56.87,
    categoria: 'cara'
}
```

A entregua deve ser realizada via Github e o repositório deve ter a classe a pasta src e os testes dos métodos dessa classe dentro da pasta test usando Mocha e Node Assert.

**Data entrega: 31/05/2026 até as 23:59:59**