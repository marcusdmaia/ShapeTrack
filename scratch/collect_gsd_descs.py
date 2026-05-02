import os
import re
import json

def collect_descriptions(base_path):
    if not os.path.exists(base_path):
        return {}

    gsd_dirs = [d for d in os.listdir(base_path) if d.startswith('gsd-') and os.path.isdir(os.path.join(base_path, d))]
    
    results = {}
    for d in gsd_dirs:
        skill_path = os.path.join(base_path, d, 'SKILL.md')
        if os.path.exists(skill_path):
            with open(skill_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Match description in YAML
            match = re.search(r'description:\s*"(.*?)"', content)
            if not match:
                match = re.search(r"description:\s*'(.*?)'", content)
            
            if match:
                results[d] = match.group(1)
    return results

data = collect_descriptions(r'.agent\skills')
with open('scratch/gsd_descriptions.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"Collected {len(data)} descriptions.")
