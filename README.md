# gms-test

Aqui você encontrará um conjunto de testes desenvolvidos com Cypress para validar os principais fluxos da plataforma Golden-movie-studio, esse projeto esteve na Jornada EBAC de QA 

Referência: https://golden-movie-studio.vercel.app/

## Clonando e executando em sua máquina

### Pré-requisito:

-Node.js - Você encontra em: https://nodejs.org/en/
-Visual Studio Code ( ou editor de sua prefrência) - você encontra em: https://code.visualstudio.com/download
-Git: você encontra em: https://git-scm.com/downloads

Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/EBAC-QE/golden-movie-studio.git
```
```
cd golden-movie-studio
```

#### Para instalar as dependencias:
```
npm install 
```

#### Para subir o servidor e o banco:
```
npm start
```

No console vai aparecer os endereços do site e do banco. 
O site você acessaem: http://127.0.0.1:8080

## Como Começar os testes com Cypress

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Benhurds12/gms-test
    cd gms-test
    ```
2. **Instale as dependências:**
    ```bash
    npm install
    ```
    

3.  **Execute os testes no modo interativo (Cypress Test Runner):**
    ```bash
    npx cypress open
    ```

4.  **Execute os testes no modo headless (para CI/CD):**
    ```bash
    npx cypress run
    ```
