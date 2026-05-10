const assert = require('assert');
const ServicoDePagamento = require('../src/ServicoDePagamento');

describe('ServicoDePagamento', () => {
  let servico;

  beforeEach(() => {
    servico = new ServicoDePagamento();
  });

  describe('pagar()', () => {
    it('deve registrar um pagamento com categoria "cara" quando valor for maior que 100', () => {
      servico.pagar('0987-7656-3475', 'Samar', 156.87);
      const pagamento = servico.consultarUltimoPagamento();
      assert.strictEqual(pagamento.categoria, 'cara');
    });

    it('deve registrar um pagamento com categoria "padrão" quando valor for menor ou igual a 100', () => {
      servico.pagar('1234-5678-9012', 'Empresa X', 99.99);
      const pagamento = servico.consultarUltimoPagamento();
      assert.strictEqual(pagamento.categoria, 'padrão');
    });

    it('deve registrar um pagamento com categoria "padrão" quando valor for exatamente 100', () => {
      servico.pagar('1111-2222-3333', 'Empresa Y', 100.00);
      const pagamento = servico.consultarUltimoPagamento();
      assert.strictEqual(pagamento.categoria, 'padrão');
    });

    it('deve armazenar corretamente todas as propriedades do pagamento', () => {
      servico.pagar('0987-7656-3475', 'Samar', 156.87);
      const pagamento = servico.consultarUltimoPagamento();
      assert.strictEqual(pagamento.codigoBarras, '0987-7656-3475');
      assert.strictEqual(pagamento.empresa, 'Samar');
      assert.strictEqual(pagamento.valor, 156.87);
    });
  });

  describe('consultarUltimoPagamento()', () => {
    it('deve retornar null quando não houver pagamentos', () => {
      assert.strictEqual(servico.consultarUltimoPagamento(), null);
    });

    it('deve retornar apenas o último pagamento realizado', () => {
      servico.pagar('1111-1111-1111', 'Empresa A', 50.00);
      servico.pagar('2222-2222-2222', 'Empresa B', 200.00);
      const ultimo = servico.consultarUltimoPagamento();
      assert.strictEqual(ultimo.codigoBarras, '2222-2222-2222');
      assert.strictEqual(ultimo.empresa, 'Empresa B');
      assert.strictEqual(ultimo.valor, 200.00);
    });

    it('deve retornar o pagamento correto após múltiplos pagamentos', () => {
      servico.pagar('0001-0001-0001', 'Empresa C', 30.00);
      servico.pagar('0002-0002-0002', 'Empresa D', 80.00);
      servico.pagar('0003-0003-0003', 'Empresa E', 500.00);
      const ultimo = servico.consultarUltimoPagamento();
      assert.strictEqual(ultimo.codigoBarras, '0003-0003-0003');
      assert.strictEqual(ultimo.categoria, 'cara');
    });
  });
});
