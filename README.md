Isso é muito interessante! Ao invés de ficar renderizando páginas que não serão usadas no momento, eu simplesmente posso renderizar apenas a página que o usuário está. Para fazer isso uso o React Loadable com React Router 6 (a versão que estou usando no momento).
Observe os pontos-chave:
a. A divisão de código otimiza o desempenho carregando apenas o código necessário.
b. O componente carregável simplifica a implementação da divisão de código no React.

c. O React Router 6 oferece uma maneira conveniente de definir e gerenciar rotas.

d. As importações dinâmicas carregam componentes de forma assíncrona quando necessário.

e. A UI alternativa com suspense garante uma melhor experiência do usuário durante o carregamento do componente.

f. A especificação de nomes de blocos ajuda na depuração e no rastreamento de blocos de código carregados.

Como não soube disso antes????
Enfim...
Créditos: https://medium.com/@sushilkundu143/implementing-code-splitting-with-loadable-component-and-react-router-6-9e3e7c7a8c2e
