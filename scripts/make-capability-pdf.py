#!/usr/bin/env python3
"""Prints the capability statement to a one-page A4 PDF using the installed Chromium."""
import html, json, sys
from playwright.sync_api import sync_playwright

d = json.load(sys.stdin)
e = html.escape
facts = "".join(f"<tr><th>{e(k)}</th><td>{e(v)}</td></tr>" for k, v in d["facts"])
divs = "".join(f"<li><b>{e(x["name"])}:</b> {e(x["text"])}</li>" for x in d["divisions"])
proc = "".join(f"<li>{e(x)}</li>" for x in d["process"])
work = "".join(f"<li><b>{e(x['name'])}</b>, {e(x['place'])}</li>" for x in d["selectedWork"])
docs = ", ".join(e(x) for x in d["documents"])
page = f"""<!doctype html><html><head><meta charset="utf-8"><style>
@page {{ size: A4; margin: 14mm 15mm 12mm; }}
body {{ font-family: Inter, system-ui, sans-serif; color:#1c1d1f; font-size:9.6pt; line-height:1.38; }}
.brand {{ display:flex; align-items:center; gap:8px; font-weight:700; font-size:13pt; }}
.brand i {{ width:16px; height:16px; background:#d7141a; border-radius:4px; display:inline-block; }}
.brand span {{ font-weight:400; color:#6b6e72; }}
h1 {{ font-size:19pt; margin:10px 0 2px; letter-spacing:-0.02em; }}
.sub {{ color:#6b6e72; margin:0 0 8px; }}
h2 {{ font-size:11.5pt; color:#d7141a; margin:11px 0 4px; }}
table {{ border-collapse:collapse; width:100%; }}
th {{ text-align:left; width:26%; vertical-align:top; color:#6b6e72; font-weight:500; padding:2px 8px 2px 0; }}
td {{ padding:2px 0; }}
ul {{ margin:0; padding-left:16px; }} li {{ margin-bottom:2px; }}
.cols {{ display:grid; grid-template-columns:1fr 1fr; gap:0 22px; }}
.foot {{ margin-top:10px; padding-top:6px; border-top:1px solid #d9d9d6; color:#6b6e72; font-size:8.8pt; display:flex; justify-content:space-between; }}
</style></head><body>
<div class="brand"><i></i>Redbay <span>Group</span></div>
<h1>Capability statement</h1>
<p class="sub">Redbay Construction Ltd. Homes, schools, interiors and energy systems across Kenya.</p>
<table>{facts}</table>
<h2>What we deliver</h2><ul>{divs}</ul>
<div class="cols"><div><h2>How we work</h2><ul>{proc}</ul></div><div><h2>Selected work</h2><ul>{work}</ul></div></div>
<h2>Areas where we have built</h2><p>{e(", ".join(d["servedAreas"]))}.</p>
<h2>Documents available on request</h2><p>{docs}.</p>
<div class="foot"><span>Redbay Group, Ruaraka, Nairobi</span><span>redbaygroup.co.ke</span></div>
</body></html>"""
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page()
    pg.set_content(page)
    pg.pdf(path="public/downloads/redbay-capability-statement.pdf", format="A4", print_background=True)
    b.close()
print("pdf written")
