#!/usr/bin/env python3
"""Draws a 1200x630 share image for each page listed by scripts/cards-data.ts into public/share/.
Run through scripts/make-share-cards.sh. Needs Pillow and the Inter font."""
import json, sys, textwrap
from PIL import Image, ImageDraw, ImageFont

cards = json.load(sys.stdin)
FONT = "/usr/share/fonts/opentype/inter/Inter-%s.otf"
RED, DARK, GREY, MIST = (215, 20, 26), (28, 29, 31), (107, 110, 114), (242, 242, 240)
og = Image.open("public/og.png").convert("RGB")
house = og.crop((680, 0, 1200, 630))  # the house panel from the main share image

def fit(draw, text, max_w, sizes):
    for size in sizes:
        f = ImageFont.truetype(FONT % "Bold", size)
        words, lines, cur = text.split(), [], ""
        for w in words:
            t = (cur + " " + w).strip()
            if draw.textlength(t, font=f) <= max_w:
                cur = t
            else:
                lines.append(cur); cur = w
        lines.append(cur)
        if len(lines) <= 4:
            return f, lines
    return f, lines

for c in cards:
    im = Image.new("RGB", (1200, 630), "white")
    im.paste(house, (680, 0))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle((72, 72, 106, 106), radius=8, fill=RED)
    d.text((122, 74), "Redbay", font=ImageFont.truetype(FONT % "Bold", 28), fill=DARK)
    d.text((222, 74), "Group", font=ImageFont.truetype(FONT % "Regular", 28), fill=GREY)
    d.text((72, 170), c["kicker"].upper(), font=ImageFont.truetype(FONT % "SemiBold", 22), fill=RED)
    f, lines = fit(d, c["title"], 560, [58, 52, 46, 40, 36])
    y = 215
    for ln in lines:
        d.text((72, y), ln, font=f, fill=DARK)
        y += int(f.size * 1.18)
    d.text((72, 560), "redbaygroup.co.ke", font=ImageFont.truetype(FONT % "Medium", 24), fill=GREY)
    im.quantize(colors=48, method=Image.Quantize.MEDIANCUT).save(f"public/share/{c['file']}.png", optimize=True)
print(len(cards), "share images")
