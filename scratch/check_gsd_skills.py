import os
import re

def translate_descriptions(base_path):
    if not os.path.exists(base_path):
        print(f"Directory {base_path} not found.")
        return

    gsd_dirs = [d for d in os.listdir(base_path) if d.startswith('gsd-') and os.path.isdir(os.path.join(base_path, d))]
    
    if not gsd_dirs:
        print(f"No gsd-* directories found in {base_path}.")
        return

    print(f"Found {len(gsd_dirs)} GSD skills to translate.")

    # Translation map (Professional Brazilian Portuguese)
    # This is a sample, the LLM will provide the actual translations for each file in the loop
    # But since I'm a script, I'll use a placeholder or a simple logic if I can.
    # Actually, the user wants me (the LLM) to do the translation.
    # So I'll have the script read the file, and I'll perform the translation logic in the loop.

    for d in gsd_dirs:
        skill_path = os.path.join(base_path, d, 'SKILL.md')
        if os.path.exists(skill_path):
            with open(skill_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Simple regex to find description: "..."
            match = re.search(r'description:\s*"(.*?)"', content)
            if not match:
                match = re.search(r"description:\s*'(.*?)'", content)
            
            if match:
                orig_desc = match.group(1)
                # Here the script needs the translation. 
                # Since I'm writing the script now, I'll use a dictionary or I'll just print and the LLM will generate the final version.
                # BETTER: I'll write a script that output the descriptions, I translate them, then I write another script to apply.
                print(f"SKILL: {d} | DESC: {orig_desc}")

translate_descriptions(r'C:\Users\User\.gemini\antigravity\skills')
translate_descriptions(r'.agent\skills')
