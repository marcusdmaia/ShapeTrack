# Roadmap de Estabilização

Este roadmap foca exclusivamente em auditoria e refinamento da base atual.

## Fase 1: Auditoria Profunda e Correções Visuais
*Objetivo: Identificar e corrigir todas as quebras de layout mobile.*
- [x] **P1.1: Auditoria Visual Completa**: Varredura manual de todas as páginas (`index.html` a `configuracoes.html`).
- [x] **P1.2: Refinamento do Bento Grid**: Padronização final do CSS global para evitar regressões.
- [x] **P1.3: Correção de Navegação**: Garantir que o `active state` do menu inferior esteja 100% correto em todas as rotas.

## Fase 2: Sincronização e Segurança
*Objetivo: Garantir integridade de dados e proteção de privacidade.*
- [x] **P2.1: Teste de Stress do Supabase**: Validar inserção de leads e vendas em condições reais.
- [x] **P2.2: Implementação de RLS Robusto**: Configurar e testar políticas de segurança no Postgres.
- [x] **P2.3: Feedback de Erro**: Padronizar as mensagens de "carregando" e "erro" no frontend.

## Fase 3: Otimização e Entrega Final
*Objetivo: Alcançar a nota máxima de performance e experiência de uso.*
- [ ] **P3.1: Conversão de Assets**: Migração completa para WebP.
- [x] **P3.2: Limpeza de Código**: Remover JS/CSS morto ou redundante.
- [ ] **P3.3: Verificação Final (UAT)**: Checkbox final de 100% de estabilidade com o usuário.

---
*Próximo Passo: Conversão de Assets para WebP (P3.1).*
