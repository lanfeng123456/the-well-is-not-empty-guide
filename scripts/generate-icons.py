from pathlib import Path

from PIL import Image, ImageOps

project = Path(__file__).resolve().parents[1]
public = project / "public"
source = project / "assets" / "icon-source.png"
if not source.exists():
    raise SystemExit(f"Missing generated master: {source}")

# Research direction: dry well ring, rusty spoon and restrained underground red glow.
master_source = Image.open(source).convert("RGBA")
master = ImageOps.fit(master_source, (512, 512), Image.Resampling.LANCZOS)
master.save(public / "icon-512.png", format="PNG", optimize=True)
master.resize((180, 180), Image.Resampling.LANCZOS).save(public / "apple-touch-icon.png", format="PNG", optimize=True)
master.resize((32, 32), Image.Resampling.LANCZOS).save(public / "favicon-32x32.png", format="PNG", optimize=True)
master.save(public / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)])
