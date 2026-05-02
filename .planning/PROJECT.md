# ShapeTrack — Estabilização e Excelência

O objetivo deste projeto é auditar e refinar toda a infraestrutura atual do ShapeTrack Mobile, garantindo 100% de estabilidade visual, funcional e de dados. Não serão adicionadas novas funcionalidades; o foco é transformar o MVP atual em um produto de qualidade premium e confiável.

## Contexto e Valor
O ShapeTrack é uma plataforma de gestão para mentores fitness. A estabilidade do layout mobile e a integridade dos dados no Supabase são críticas para a confiança do mentor e a retenção de alunos.

## Objetivos (Core Value)
- **Visual**: Consistência absoluta em todas as páginas (Bento Grid, Span-12, Zero Overflow).
- **Dados**: Sincronização impecável com Supabase e RLS robusto.
- **Performance**: Carregamento ultra-rápido (< 2s em mobile).

## Requisitos

### Validados (Existente)
- ✓ Arquitetura MPA com Vanilla JS/CSS.
- ✓ Sistema de Layout Bento Grid (CSS Custom).
- ✓ Integração básica com Supabase (Leads, Alunos, Vendas).
- ✓ Navegação inferior (Bottom Navigation).

### Ativos (Melhorias Necessárias)
- [ ] **Audit: UI Mobile**: Verificar overflow e cortes laterais em 100% das páginas.
- [ ] **Audit: Supabase Sync**: Validar schemas e triggers para garantir que nenhum dado seja perdido.
- [ ] **Audit: Performance**: Converter imagens PNG (>500KB) para WebP otimizado.
- [ ] **Audit: Segurança**: Revisar RLS (Row Level Security) para isolamento total de dados entre mentores.
- [ ] **Audit: UX Flow**: Garantir que a transição entre páginas seja suave e sem estados de erro genéricos.

### Fora de Escopo
- Novas funcionalidades ou telas.
- Integração com novas APIs externas não mapeadas.

## Decisões Chave
| Decisão | Racional | Resultado |
|:--- |:--- |:--- |
| Mobile-First Strict | Prioridade total para telas de 360px-450px | Pendente |
| WebP para Assets | Redução de LCP e uso de banda | Pendente |

---
*Última atualização: 02/05/2026 após inicialização*
