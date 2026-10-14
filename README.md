# APPROVE / Product Read

Leitura editorial da Raw Data Club sobre as modelagens APPROVE, com seis momentos, fotografias oficiais locais e fontes verificáveis.

## Abrir localmente

Requer Node.js. Execute:

```sh
node preview.cjs
```

Abra http://127.0.0.1:4173/read/approve/.

## Estrutura

- `index.html`: entrada para a leitura.
- `read/approve/`: HTML, CSS, JavaScript, fotografias locais e Open Graph.
- `read/approve/sources.html`, `sources.md` e `sources.json`: fontes, produtos, imagens e limites da leitura.
- `assets/rdc-monogram-light.png`: logo oficial RDC.
- `verification.json`: checagens realizadas e pendências.

Site estático sem instalação ou build. Para hospedagem estática, publique a raiz do repositório. Rota pretendida no domínio RDC: `/read/approve`.

## Estado de validação

Sintaxe JavaScript, arquivos, imagens e âncoras verificados. A validação visual desktop/mobile, hover/touch, CLS e screenshots permanece pendente devido às restrições do ambiente de execução original. Este push não configura hospedagem nem confirma publicação no domínio.
