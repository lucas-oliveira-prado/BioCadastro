# 🐄 BioCadastro - Sistema de Gestão de Animais de Fazenda

Sistema completo de cadastro e gerenciamento de animais da **Fazenda Experimental Gralha Azul (FEGA)**, vinculada à Escola de Medicina e Ciências da Vida da PUCPR.

## 📋 Funcionalidades

### ✅ **Funcionalidades Implementadas**
- **Cadastro de Animais**: Registro completo com nome, sexo, raça, data de nascimento e status
- **Listagem de Animais**: Visualização com dados formatados e cálculo automático de idade
- **Edição de Animais**: Atualização de dados via interface modal
- **Exclusão de Animais**: Remoção segura com confirmação
- **Histórico de Vacinações**: Registro e consulta de vacinas aplicadas
- **Histórico de Pesagens**: Controle de peso dos animais
- **API REST Completa**: Backend FastAPI com CRUD completo
- **Interface Responsiva**: Design moderno que funciona em desktop e mobile
- **Notificações**: Sistema de feedback para o usuário
- **Validação de Dados**: Validação robusta no frontend e backend

### 🔧 **Tecnologias Utilizadas**

#### Backend
- **FastAPI**: Framework web moderno e rápido
- **SQLAlchemy**: ORM para interação com banco de dados
- **Pydantic**: Validação de dados e serialização
- **MySQL**: Banco de dados relacional
- **Uvicorn**: Servidor ASGI

#### Frontend
- **HTML5**: Estrutura semântica
- **CSS3**: Estilização responsiva e moderna
- **JavaScript ES6+**: Funcionalidades interativas e consumo de API
- **Fetch API**: Comunicação com backend

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Python 3.8+
- MySQL Server
- Navegador web moderno

### 1. Configuração do Backend

```bash
# Navegar para a pasta do backend
cd BioCadastro/BackEnd_BioCadastro

# Instalar dependências
pip install -r requirements.txt

# Configurar banco de dados MySQL
# Criar database: biocadastro
# Usuário: root
# Senha: PUC@123
# Host: localhost
# Porta: 3306
```

### 2. Executar o Servidor Backend

```bash
# Na pasta BackEnd_BioCadastro
python main.py

# Ou usando uvicorn diretamente
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

O servidor estará disponível em: `http://localhost:8000`

**Documentação da API**: `http://localhost:8000/docs`

### 3. Executar o Frontend

```bash
# Navegar para a pasta do frontend
cd BioCadastro/FrontEnd_BioCadastro

# Abrir o arquivo index.html em um navegador
# Ou usar um servidor local como Live Server (VS Code)
```

## 📚 Estrutura do Projeto

```
BioCadastro/
├── BackEnd_BioCadastro/
│   ├── main.py              # Aplicação FastAPI principal
│   ├── models.py            # Modelos do banco de dados
│   ├── schemas.py           # Esquemas Pydantic para validação
│   ├── crud.py              # Operações CRUD
│   ├── db.py                # Configuração do banco de dados
│   └── requirements.txt     # Dependências Python
└── FrontEnd_BioCadastro/
    ├── index.html           # Página inicial
    ├── lista-animais.html   # Lista de animais
    ├── cadastro-animal.html # Formulário de cadastro
    ├── script.js            # Lógica JavaScript
    ├── styles.css           # Estilos CSS
    └── assets/              # Imagens e recursos
```

## 🗄️ Estrutura do Banco de Dados

### Tabela `animal`
- `id` (INT, PK, AUTO_INCREMENT)
- `nome` (VARCHAR(100), NOT NULL)
- `sexo` (INT, NOT NULL) - 0: Macho, 1: Fêmea
- `raca` (INT, NOT NULL) - ID da raça
- `data_nascimento` (DATETIME, NOT NULL)
- `status` (INT, DEFAULT 1) - 0: Inativo, 1: Ativo, 2: Vendido

### Tabela `vacinacao`
- `id` (INT, PK, AUTO_INCREMENT)
- `animal_id` (INT, FK)
- `vacina` (VARCHAR(100), NOT NULL)
- `data_aplicacao` (DATETIME, NOT NULL)
- `veterinario` (VARCHAR(100), NOT NULL)
- `observacoes` (TEXT)

### Tabela `peso`
- `id` (INT, PK, AUTO_INCREMENT)
- `animal_id` (INT, FK)
- `peso` (FLOAT, NOT NULL)
- `data_pesagem` (DATETIME, NOT NULL)
- `observacoes` (TEXT)

## 📖 Guia de Uso

### 1. **Cadastrar um Animal**
1. Acesse `cadastro-animal.html`
2. Preencha o formulário com:
   - Nome do animal
   - Sexo (Macho/Fêmea)
   - Raça (Angus, Holstein, Nelore, Brahman, Simmental)
   - Data de nascimento
   - Status (Ativo, Inativo, Vendido)
3. Clique em "Cadastrar Animal"

### 2. **Visualizar Lista de Animais**
1. Acesse `lista-animais.html`
2. Veja todos os animais cadastrados
3. Use os botões de ação para:
   - 💉 Visualizar/adicionar vacinações
   - ⚖️ Visualizar/adicionar pesagens
   - ✏️ Editar dados do animal
   - ❌ Excluir animal

### 3. **Gerenciar Vacinações**
1. Na lista de animais, clique no ícone de vacina
2. Visualize o histórico de vacinações
3. Adicione novas vacinações com:
   - Nome da vacina
   - Data de aplicação
   - Nome do veterinário
   - Observações (opcional)

### 4. **Controlar Pesagens**
1. Na lista de animais, clique no ícone de peso
2. Visualize o histórico de pesagens
3. Registre novas pesagens com:
   - Peso em kg
   - Data da pesagem
   - Observações (opcional)

## 🛠️ API Endpoints

### Animais
- `GET /animals` - Lista todos os animais
- `POST /animals` - Cadastra novo animal
- `GET /animals/{id}` - Busca animal por ID
- `PUT /animals/{id}` - Atualiza animal
- `DELETE /animals/{id}` - Remove animal
- `GET /animals/search/{nome}` - Busca por nome

### Vacinações
- `POST /vaccinations` - Registra vacinação
- `GET /animals/{id}/vaccinations` - Lista vacinações do animal
- `DELETE /vaccinations/{id}` - Remove vacinação

### Pesagens
- `POST /weights` - Registra pesagem
- `GET /animals/{id}/weights` - Lista pesagens do animal
- `GET /animals/{id}/latest-weight` - Última pesagem
- `DELETE /weights/{id}` - Remove pesagem

### Utilitários
- `GET /` - Status da API
- `GET /health` - Verificação de saúde
- `GET /stats` - Estatísticas gerais
- `GET /breeds` - Lista de raças
- `GET /genders` - Opções de sexo
- `GET /statuses` - Opções de status

## 🎨 Características da Interface

### Design Responsivo
- **Desktop**: Layout completo com sidebar e tabelas
- **Tablet**: Interface adaptada para telas médias
- **Mobile**: Interface otimizada para dispositivos móveis

### Componentes Interativos
- **Modais**: Para edição e históricos
- **Notificações**: Feedback visual para ações
- **Formulários**: Validação em tempo real
- **Tabelas**: Dados organizados e ações rápidas

### Experiência do Usuário
- **Navegação Intuitiva**: Fluxo natural entre páginas
- **Feedback Imediato**: Notificações de sucesso/erro
- **Confirmações**: Dialogs para ações destrutivas
- **Loading States**: Indicadores de carregamento

## 🔧 Configurações Avançadas

### Personalizar Banco de Dados
Edite o arquivo `db.py` para alterar as configurações:

```python
DATABASE_URL = "mysql+pymysql://usuario:senha@host:porta/database"
```

### Configurar CORS
No arquivo `main.py`, ajuste as origens permitidas:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://meudominio.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Personalizar Raças
Edite os arquivos `schemas.py` e `script.js` para adicionar novas raças:

```python
# schemas.py
class RacaEnum:
    ANGUS = 1
    HOLSTEIN = 2
    NOVA_RACA = 6  # Adicionar aqui
```

## 🐛 Solução de Problemas

### Erro de Conexão com Banco
1. Verifique se o MySQL está rodando
2. Confirme usuário, senha e nome do database
3. Teste a conexão manualmente

### Frontend não carrega dados
1. Verifique se o backend está rodando na porta 8000
2. Abra o console do navegador para ver erros
3. Verifique configurações de CORS

### Erro 404 nas imagens
1. Verifique se a pasta `assets/` existe
2. Confirme se as imagens estão no local correto
3. Use caminhos relativos corretos

## 👥 Contribuição

Este projeto foi desenvolvido como parte do **Projeto 3 - Programação Web v1.0** para a PUCPR.

### Desenvolvedores
- Sistema desenvolvido para a Fazenda Experimental Gralha Azul (FEGA)
- PUCPR - Escola de Medicina e Ciências da Vida

## 📞 Contato

**Fazenda Experimental Gralha Azul (FEGA)**
- **Endereço**: Av. Venezuela, 1956 – Zona Rural, Fazenda Rio Grande – PR, 83820-455
- **Site**: [PUCPR FEGA](https://www.pucpr.br/escola-de-medicina-e-ciencias-da-vida/infraestrutura/fazenda-experimental-gralha-azul-fega/)

---

**© 2024 BioCadastro - PUCPR. Todos os direitos reservados.** 