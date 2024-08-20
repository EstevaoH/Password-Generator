# Password Generator 🔐
## Descrição
Este projeto é uma aplicação web de geração de senhas seguras, construída com React para o frontend e Flask para o backend. A aplicação permite aos usuários gerar senhas personalizadas com diversas opções, como incluir caracteres especiais e definir o comprimento da senha. Além disso, o projeto inclui funcionalidades de exibição e ocultação de senhas, cópia da senha para a área de transferência, e notificação de erros.
### Funcionalidades
* Geração de Senhas Personalizadas: Gera senhas com caracteres especiais e comprimento definido pelo usuário.
* Exibir/Ocultar Senha: Opção para mostrar ou esconder a senha gerada.
* Copiar Senha: Função para copiar a senha gerada para a área de transferência.

## Tecnologias Utilizadas
### Frontend

* React: Biblioteca JavaScript para a construção da interface do usuário.
* React Hook Form: Gerenciamento de formulários em React.
* Zod: Biblioteca de validação de esquemas e tipos.
* Axios: Cliente HTTP para fazer requisições ao backend.
* Lucide-React: Ícones usados para melhorar a interface.
* ShadCN: Biblioteca de UI.

### Backend
* Flask: Microframework web em Python para a criação do backend.

## Instalação
### Backend
1. Clone o repositório:
   
        git clone https://github.com/seu-usuario/password-generator.git
        cd password-generator/backend

2. Crie um ambiente virtual e instale as dependências:

        python -m venv venv
        source venv/bin/activate  # No Windows use `venv\Scripts\activate`
        pip install -r requirements.txt

3. Inicie o servidor Flask:
   
        python main.py

### Frontend

1. Navegue até a pasta do frontend:

       cd password-generator/frontend

2. Instale as dependências:

        npm install

3. Inicie o servidor de desenvolvimento:

        npm run dev
  
4. Como Usar
* Abra a aplicação no navegador em http://localhost:3000. Preencha as opções de geração de senha:
* Defina o comprimento mínimo da senha.
* Selecione se deseja incluir caracteres especiais.
* Clique em "Generate Password" para gerar uma nova senha.
* Visualize a senha gerada e use as funcionalidades para copiar e ocultar/exibir a senha.
