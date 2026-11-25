#!/usr/bin/env python3
"""Prints the contractor checklist to a one-page-per-A4 PDF using the installed Chromium."""
import html, json, sys
from playwright.sync_api import sync_playwright

d = json.load(sys.stdin)
qs = "".join(
    f'<li><span class="box"></span><div><b>{html.escape(q["q"])}</b><p>{html.escape(q["why"])}</p><div class="line"></div></div></li>'
    for q in d["checklistQuestions"]
)
flags = "".join(f"<li>{html.escape(x)}</li>" for x in d["redFlags"])
page = f"""<!doctype html><html><head><meta charset="utf-8"><style>
@page {{ size: A4; margin: 16mm 16mm 14mm; }}
body {{ font-family: Inter, system-ui, sans-serif; color: #1c1d1f; font-size: 11pt; line-height: 1.4; }}
.brand {{ display:flex; align-items:center; gap:8px; font-weight:700; font-size:13pt; }}
.brand i {{ width:16px; height:16px; background:#d7141a; border-radius:4px; display:inline-block; }}
.brand span {{ font-weight:400; color:#6b6e72; }}
h1 {{ font-size: 20pt; line-height:1.15; margin: 14px 0 4px; letter-spacing:-0.02em; }}
.sub {{ color:#6b6e72; margin:0 0 14px; }}
ol {{ list-style:none; padding:0; margin:0; }}
ol li {{ display:flex; gap:10px; margin: 0 0 6px; break-inside: avoid; }}
.box {{ flex:none; width:14px; height:14px; border:1.5px solid #1c1d1f; border-radius:3px; margin-top:3px; }}
li p {{ margin: 1px 0 3px; color:#4a4d51; font-size:9.5pt; }}
.line {{ border-bottom:1px solid #d9d9d6; height:9px; }}
h2 {{ font-size: 13pt; margin: 14px 0 6px; color:#d7141a; }}
ul {{ margin: 0; padding-left: 18px; }} ul li {{ margin-bottom:3px; }}
.foot {{ margin-top:10px; padding-top:8px; border-top:1px solid #d9d9d6; color:#6b6e72; font-size:9.5pt; display:flex; justify-content:space-between; }}
</style></head><body>
<div class="brand"><i></i>Redbay <span>Group</span></div>
<h1>10 questions to ask before you hire a building contractor</h1>
<p class="sub">Tick each one off, and write the answer on the line. Keep the answers with your quotation.</p>
<ol>{qs}</ol>
<h2>Red flags</h2><ul>{flags}</ul>
<div class="foot"><span>Redbay Group, NCA Category 7 contractor, Ruaraka, Nairobi</span><span>redbaygroup.co.ke</span></div>
</body></html>"""
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page()
    pg.set_content(page)
    pg.pdf(path="public/downloads/building-contractor-checklist.pdf", format="A4", print_background=True)
    b.close()
print("pdf written")
