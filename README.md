# ProjectManager - Projeto React para gerenciamento de projetos

## Visão Geral

ProjectManager é um aplicativo baseado em React projetado para ajudar os usuários a gerenciar seus projetos de forma eficiente. O aplicativo permite que os usuários criem novos projetos inserindo detalhes como nome do projeto, orçamento e categoria. Os usuários também podem visualizar seus projetos em uma página dedicada. O aplicativo inclui uma página inicial com uma mensagem de boas-vindas e uma barra de navegação para facilitar a movimentação entre as diferentes partes do aplicativo.

## Tecnologias Utilizadas

- **React**: Biblioteca frontend para construção de interfaces de usuário.
- **Ant Design (antd)**: Framework de UI que fornece um conjunto de componentes React de alta qualidade.
- **React Router**: Biblioteca para roteamento em aplicações React.
- **Tailwind CSS**: Framework CSS utilitário para estilização.
- **uuid**: Biblioteca para geração de IDs únicos.
- **React Icons**: Coleção de ícones populares como componentes React.
- **Vite**: Build tool rápida e simples para projetos da web modernos.
- **Yarn**: Gerenciador de pacotes rápido, confiável e seguro para Node.js.

## Estrutura do Projeto

- **App Component**: Ponto de entrada principal do aplicativo.
  - Configura o roteamento usando React Router.
  - Inclui os componentes Header e Footer.

- **Header Component**: Fornece links de navegação para diferentes páginas do aplicativo.
  - Utiliza NavLink do react-router-dom para estilização de links ativos.
  - Inclui um ícone do React Icons.

- **Home Component**: Exibe uma mensagem de boas-vindas e um botão de call-to-action para criar um novo projeto.
  - Utiliza um componente personalizado LinkButton para navegação.

- **Projects Component**: Componente de espaço reservado exibindo o título "Projects".

- **NewProject Component**: Formulário para criação de um novo projeto.
  - Utiliza componentes do Ant Design (Input, Form, Select, Button, message) para UI e manipulação de formulários.
  - Gerenciamento de estado com o hook useState do React.
  - Gera um ID único para cada projeto usando uuidv4.
  - Exibe mensagens de sucesso ou erro com base na validação do formulário.
