import re

with open('keystatic.config.ts', 'r', encoding='utf-8') as f:
    content = f.read()

def replacer(match):
    name = match.group(1)
    type_ = match.group(2)
    opts = match.group(3)
    
    label_match = re.search(r'label:\s*"([^"]+)"', opts)
    label = label_match.group(1) if label_match else ""
    
    if type_ == "slug":
        opts_es = opts.replace(f'label: "{label}"', f'label: "{label} (ES)"')
        return f'{name}: fields.slug({opts_es}),\n        {name}_en: fields.text({{ label: "{label} (EN)" }}),\n        {name}_fr: fields.text({{ label: "{label} (FR)" }})'
    
    opts_es = opts.replace(f'label: "{label}"', f'label: "{label} (ES)"')
    opts_en = opts.replace(f'label: "{label}"', f'label: "{label} (EN)"')
    opts_fr = opts.replace(f'label: "{label}"', f'label: "{label} (FR)"')
    
    return f'{name}: fields.{type_}({opts_es}),\n        {name}_en: fields.{type_}({opts_en}),\n        {name}_fr: fields.{type_}({opts_fr})'

modified = re.sub(r'(\w+):\s*fields\.(text)\((\{[\s\S]*?\})\)', replacer, content)
modified = re.sub(r'(\w+):\s*fields\.(slug)\((\{[\s\S]*?\})\)', replacer, modified)

with open('keystatic.config.ts', 'w', encoding='utf-8') as f:
    f.write(modified)
