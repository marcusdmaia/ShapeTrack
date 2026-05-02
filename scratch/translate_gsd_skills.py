import os
import re

translations = {
    "gsd-add-tests": "Gera testes para uma fase concluída com base nos critérios de UAT e implementação",
    "gsd-ai-integration-phase": "Gera um contrato de design AI-SPEC.md para fases que envolvem a construção de sistemas de IA.",
    "gsd-audit-fix": "Pipeline autônomo de auditoria para correção — encontra problemas, classifica, corrige, testa e faz o commit",
    "gsd-audit-milestone": "Audita a conclusão de marcos em relação à intenção original antes de arquivar",
    "gsd-audit-uat": "Auditoria cruzada de todos os itens de UAT e verificação pendentes entre as fases",
    "gsd-autonomous": "Executa todas as fases restantes de forma autônoma — discute→planeja→executa por fase",
    "gsd-capture": "Captura ideias, tarefas, notas e sementes para seus destinos",
    "gsd-cleanup": "Arquiva diretórios de fases acumulados de marcos concluídos",
    "gsd-code-review": "Revisa arquivos de origem alterados durante uma fase em busca de bugs, problemas de segurança e qualidade de código",
    "gsd-complete-milestone": "Arquiva o marco concluído e prepara para a próxima versão",
    "gsd-config": "Configura as definições do GSD — alternâncias de workflow, ajustes avançados, integrações e perfil de modelo",
    "gsd-debug": "Depuração sistemática com estado persistente através de resets de contexto",
    "gsd-discuss-phase": "Reúne o contexto da fase através de questionamento adaptativo antes do planejamento.",
    "gsd-docs-update": "Gera ou atualiza a documentação do projeto verificada contra a base de código",
    "gsd-eval-review": "Audita a cobertura de avaliação de uma fase de IA executada e produz um plano de remediação EVAL-REVIEW.md.",
    "gsd-execute-phase": "Executa todos os planos de uma fase com paralelização baseada em ondas",
    "gsd-explore": "Ideação socrática e roteamento de ideias — pensa sobre ideias antes de se comprometer com planos",
    "gsd-extract-learnings": "Extrai decisões, lições, padrões e surpresas dos artefatos de fases concluídas",
    "gsd-fast": "Executa uma tarefa trivial inline — sem subagentes ou sobrecarga de planejamento",
    "gsd-forensics": "Investigação post-mortem para workflows do GSD que falharam — diagnostica o que deu errado.",
    "gsd-graphify": "Constrói, consulta e inspeciona o grafo de conhecimento do projeto em .planning/graphs/",
    "gsd-health": "Diagnostica a integridade do diretório de planejamento e, opcionalmente, repara problemas",
    "gsd-help": "Mostra os comandos GSD disponíveis e o guia de uso",
    "gsd-import": "Ingere planos externos com detecção de conflitos contra decisões do projeto antes de escrever qualquer coisa.",
    "gsd-inbox": "Triagem e revisão de issues e PRs abertos no GitHub contra os templates e guias de contribuição do projeto.",
    "gsd-ingest-docs": "Inicializa ou mescla uma configuração .planning/ a partir de ADRs, PRDs, SPECs e docs existentes em um repositório.",
    "gsd-manager": "Centro de comando interativo para gerenciar múltiplas fases a partir de um terminal",
    "gsd-map-codebase": "Analisa a base de código com agentes de mapeamento paralelos para produzir documentos em .planning/codebase/",
    "gsd-milestone-summary": "Gera um resumo abrangente do projeto a partir de artefatos de marcos para integração e revisão da equipe",
    "gsd-new-milestone": "Inicia um novo ciclo de marco — atualiza o PROJECT.md e roteia para os requisitos",
    "gsd-new-project": "Inicializa um novo projeto com coleta profunda de contexto e o PROJECT.md",
    "gsd-ns-context": "inteligência da base de código | mapeia gera-grafos docs aprendizados",
    "gsd-ns-ideate": "captura de ideação | explora esboça spike espec captura",
    "gsd-ns-manage": "configuração do workspace | fluxos-de-trabalho thread atualiza ship inbox",
    "gsd-ns-project": "ciclo de vida do projeto | marcos auditorias resumo",
    "gsd-ns-review": "portões de qualidade | revisão-de-código depura auditoria segurança avaliação ui",
    "gsd-ns-workflow": "workflow | discute planeja executa verifica fase progresso",
    "gsd-pause-work": "Cria uma passagem de contexto ao pausar o trabalho no meio de uma fase",
    "gsd-phase": "CRUD para fases no ROADMAP.md — adiciona, insere, remove ou edita fases",
    "gsd-plan-phase": "Cria um plano de fase detalhado (PLAN.md) com loop de verificação",
    "gsd-plan-review-convergence": "Loop de convergência de plano entre AIs — replaneja com feedback de revisão até que não restem preocupações de nível ALTO.",
    "gsd-pr-branch": "Cria uma branch de PR limpa filtrando commits do .planning/ — pronta para revisão de código",
    "gsd-profile-user": "Gera um perfil comportamental do desenvolvedor e cria artefatos visíveis para o Claude",
    "gsd-progress": "Verifica o progresso, avança o workflow ou despacha intenção livre — o comando situacional unificado do GSD",
    "gsd-quick": "Executa uma tarefa rápida com garantias GSD (commits atômicos, rastreamento de estado), mas pula agentes opcionais",
    "gsd-resume-work": "Retoma o trabalho de uma sessão anterior com restauração total de contexto",
    "gsd-review": "Solicita revisão por pares de planos de fase para CLIs de IAs externas",
    "gsd-review-backlog": "Revisa e promove itens do backlog para o marco ativo",
    "gsd-secure-phase": "Verifica retroativamente as mitigações de ameaças para uma fase concluída",
    "gsd-settings": "Configura as alternâncias de workflow do GSD e o perfil do modelo",
    "gsd-ship": "Cria PR, executa revisão e prepara para merge após aprovação nas verificações",
    "gsd-sketch": "Esboça ideias de UI/design com mockups HTML descartáveis ou propõe o próximo esboço (modo fronteira)",
    "gsd-spec-phase": "Clarifica O QUE uma fase entrega com pontuação de ambiguidade; produz um SPEC.md antes do discute-fase.",
    "gsd-spike": "Explora uma ideia através de experimentação ou propõe o próximo spike (modo fronteira)",
    "gsd-stats": "Exibe estatísticas do projeto — fases, planos, requisitos, métricas git e linha do tempo",
    "gsd-thread": "Gerencia threads de contexto persistentes para trabalho entre sessões",
    "gsd-ui-phase": "Gera um contrato de design de UI (UI-SPEC.md) para fases de frontend",
    "gsd-ui-review": "Auditoria visual retroativa de 6 pilares do código frontend implementado",
    "gsd-ultraplan-phase": "[BETA] Delega o planejamento da fase para a nuvem ultraplan do Claude Code; revise no navegador e importe de volta.",
    "gsd-undo": "Reversão segura de git. Reverte commits de fases ou planos usando o manifesto de fase com verificação de dependências",
    "gsd-update": "Atualiza o GSD para a versão mais recente com exibição do changelog",
    "gsd-validate-phase": "Audita retroativamente e preenche lacunas de validação de Nyquist para uma fase concluída",
    "gsd-verify-work": "Valida funcionalidades construídas através de UAT conversacional",
    "gsd-workspace": "Gerencia workspaces do GSD — cria, lista ou remove ambientes de workspace isolados",
    "gsd-workstreams": "Gerencia fluxos de trabalho paralelos — lista, cria, troca, status, progresso, conclui e retoma"
}

def update_skills(base_path):
    if not os.path.exists(base_path):
        return

    gsd_dirs = [d for d in os.listdir(base_path) if d.startswith('gsd-') and os.path.isdir(os.path.join(base_path, d))]
    
    for d in gsd_dirs:
        if d in translations:
            skill_path = os.path.join(base_path, d, 'SKILL.md')
            if os.path.exists(skill_path):
                with open(skill_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Update description in YAML
                # Matches description: "any text" or description: 'any text'
                new_desc = translations[d]
                
                content = re.sub(r'description:\s*".*?"', f'description: "{new_desc}"', content)
                content = re.sub(r"description:\s*'.*?'", f"description: '{new_desc}'", content)
                
                with open(skill_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {d}")

# Update local project skills
update_skills(r'.agent\skills')
# Update global skills (if they exist)
update_skills(r'C:\Users\User\.gemini\antigravity\skills')
