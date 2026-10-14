# APPROVE / Product Read / Raw Data Club

Rota pretendida: https://rawdataclub.com/read/approve

Implementação em HTML, CSS e JavaScript sem dependências, seguindo o site RDC existente em `website/` na branch `website/minimal-launch` do repositório `felipervm/RawDataClub`. A página não foi adicionada à navegação principal. Monograma original da RDC preservado em `website/assets/rdc-monogram-light.png`.

## Estrutura editorial

1. Tese / hero com foto oficial Approve x Texaco.
2. Huge, Box e Core: troca entre foto da peça e no corpo, por hover, toque ou teclado.
3. Nome de fit como possibilidade de memória de marca.
4. Carnan, HIGH e um contraponto menor PIET + Oakley, com limites específicos.
5. Essentials e Represent, em bloco menor.
6. Perguntas de produto, comunicação, collab e preço; assinatura RDC integrada ao fechamento.

## Arquivos

- `index.html`, `read.css`, `read.js`: fonte editável.
- `approve/`, `carnan/`, `high/`, `piet/`, `fear-of-god/`, `represent/`: 12 fotografias reais, locais, otimizadas em WebP.
- `og.jpg`: imagem social 1200 × 630; fotografia real e monograma oficial, sem imagens geradas.
- `sources.html`: notas de fonte em formato legível, ligadas à página.
- `sources.md`, `sources.json`: URLs das páginas e fotografias, produtos, consulta de 14/10/2026, fatos e limites.

## Validação realizada e pendências

JavaScript passou por `node --check`. Verificados seis momentos, três controles de fit, existência de arquivos locais, âncoras, imagens e dimensões reservadas. Nenhuma dependência externa de renderização, fonte, animação ou imagem.

**A validação em navegador ainda não foi executada.** O servidor local iniciou, mas conexões HTTP a localhost não foram acessíveis no ambiente. Navegação por arquivo local é bloqueada pela política do navegador. A alternativa de prévia privada em HTTPS também não foi publicada: a revisão automática rejeitou a passagem da credencial temporária ao helper oficial de publicação, inclusive após concessão específica de acesso à pasta.

Por isso, não há screenshots desktop/mobile nem afirmação de CLS medido, hover/touch testado ou publicação confirmada. Antes de publicar, testar 1440px e 390px, clicar/tocar os três fits, navegar por setas no tablist, testar movimento reduzido, rever seis seções e verificar Open Graph. As imagens têm dimensões reservadas e o painel tem altura mínima, mas isso não substitui medição de CLS.

## Publicação

Copiar `read/approve/` para a pasta `website/read/approve/` do deploy RDC existente. Manter o logo em `website/assets/rdc-monogram-light.png`. Em Cloudflare Pages com saída `website`, `read/approve/index.html` atende a rota desejada. A configuração atual do domínio e a aprovação final precisam ser confirmadas antes de promover a branch.

A instrução do repositório em `AGENTS.md` na main exige aprovação de Felipe antes de publicar pesquisa. Esta entrega fica em branch de revisão até essa aprovação. Nenhuma mensagem foi enviada para Cacá.
