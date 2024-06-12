import React from 'react';
import { Input, Form, Select, Button, message } from 'antd';
import { v4 as uuidv4 } from 'uuid';

const { Option } = Select;

// Configurar a posição da mensagem
message.config({
  top: 550, // Define a distância do topo
  duration: 2, // Define a duração da mensagem em segundos
  maxCount: 3, // Número máximo de mensagens exibidas ao mesmo tempo
});

const NewProject = () => {
  // States para armazenar os valores dos inputs
  const [nome, setNome] = React.useState('');
  const [orcamento, setOrcamento] = React.useState('');
  const [categoria, setCategoria] = React.useState('');

  // Funções para atualizar o estado ao digitar nos inputs
  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleOrcamentoChange = (e) => {
    setOrcamento(e.target.value);
  };

  const handleCategoriaChange = (value) => {
    setCategoria(value);
  };

  const handleSubmit = () => {
    // Verifica se todos os campos estão preenchidos
    if (nome && orcamento && categoria) {
      // Cria um novo projeto com um ID único
      const novoProjeto = {
        id: uuidv4(),
        nome,
        orcamento,
        categoria,
      };

      // Exibe uma mensagem de sucesso e limpa os campos
      message.success('Projeto criado com sucesso!');
      console.log('Novo Projeto:', novoProjeto);

      // Limpa os campos após o envio
      setNome('');
      setOrcamento('');
      setCategoria('');
    } else {
      message.error('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="text-black w-full h-full flex flex-col items-center justify-center">
      <div className="text-left mb-4 w-64">
        <h2 className="text-2xl font-bold">Criar Projeto</h2>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <Form layout="vertical" className="flex justify-center items-center w-full flex-col">
        <Form.Item label="Nome" className="md:w-1/5 w-1/2">
          <Input
            placeholder="Digite seu nome"
            value={nome}
            onChange={handleNomeChange}
          />
        </Form.Item>
        <Form.Item label="Orçamento" className="md:w-1/5 w-1/2">
          <Input
            type="number"
            placeholder="Digite seu orçamento"
            value={orcamento}
            onChange={handleOrcamentoChange}
          />
        </Form.Item>
        <Form.Item label="Categoria" className="md:w-1/5 w-1/2">
          <Select
            placeholder="Selecione uma categoria"
            value={categoria}
            onChange={handleCategoriaChange}
          >
            <Option value="alimentacao">Alimentação</Option>
            <Option value="transporte">Transporte</Option>
            <Option value="lazer">Lazer</Option>
            <Option value="educacao">Educação</Option>
            <Option value="saude">Saúde</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>
            Criar Projeto
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewProject;
