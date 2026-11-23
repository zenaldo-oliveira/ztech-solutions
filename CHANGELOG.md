# Changelog

## Não lançado

### Segurança
- Next.js atualizado de 16.4.2 para 16.4.6 (`next` e `eslint-config-next`). A versão 16.4.2 estava na faixa afetada por 7 avisos do GitHub Advisory (faixa `>=16.3.0 <=16.4.4`), e o build bloqueava com `SecurityFatalError`. Confirmado com `npm audit` e com o build sem erro.
- `npm audit fix` (sem `--force`): `zod` (alta severidade, `<4.6.6`) atualizado. Pacotes transitivos de `shadcn` (`express`, `hono`, `@modelcontextprotocol/sdk`) saíram da árvore.
- Restam 4 avisos moderados em `minimatch`, `ts-morph`, `@ts-morph/common` e `shadcn`. Só afetam a CLI do `shadcn`, que não vai para o bundle. A correção indicada pelo npm é um downgrade major do `shadcn`, não aplicado.

### Corrigido
- CTA principal da home ("Pedir orçamento pelo WhatsApp") estava invisível: texto branco sobre fundo branco. Agora usa a variante `inverse` do `Button`, com tokens de marca (`--brand-purple-deep`, `--brand-lavender`). Contraste 11,9:1.
- Botões de ação com fundo `bg-cta` usam texto branco. O roxo do tema escuro foi clareado para `#7a5bb0`, com texto branco a 5,3:1.
- Sidebar: a preferência recolhida agora é aplicada antes do primeiro paint (script síncrono no `<head>`).
- E-mail `contatomycod@gmail.com` no rodapé.
- Nome completo do fundador nos textos de autoria.
- `SITE_URL` configurável por `NEXT_PUBLIC_SITE_URL`, com padrão `https://mycod.com.br`.
