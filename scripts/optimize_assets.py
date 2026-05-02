import os
import subprocess
import sys

def install_pillow():
    print("Checking for Pillow library...")
    try:
        from PIL import Image
        print("Pillow is already installed.")
    except ImportError:
        print("Pillow not found. Installing...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])

def convert_to_webp():
    from PIL import Image
    files = [f for f in os.listdir('.') if f.endswith('.png')]
    if not files:
        print("No PNG files found in the current directory.")
        return

    print(f"Found {len(files)} PNG files. Starting conversion...")
    for f in files:
        name = os.path.splitext(f)[0]
        webp_name = f"{name}.webp"
        try:
            img = Image.open(f)
            img.save(webp_name, "WEBP", quality=85)
            print(f"✓ Converted: {f} -> {webp_name}")
        except Exception as e:
            print(f"✗ Failed to convert {f}: {e}")

if __name__ == "__main__":
    try:
        install_pillow()
        convert_to_webp()
        print("\nAll assets optimized! You can now update your HTML files to use .webp extensions.")
    except Exception as e:
        print(f"An error occurred: {e}")
