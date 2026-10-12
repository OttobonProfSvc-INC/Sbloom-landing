from PIL import Image
import sys

def convert_to_white_brown(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    # Target brown/gold color
    tr, tg, tb = 183, 133, 58
    
    for item in datas:
        r, g, b, a = item
        # Calculate luminosity
        lum = (r * 0.299 + g * 0.587 + b * 0.114)
        
        # Background is around lum=20. We want to map lum=25 to alpha=0, and lum=100+ to alpha=255.
        alpha = int((lum - 25) * 2.5)
        if alpha < 0:
            alpha = 0
        if alpha > 255:
            alpha = 255
            
        new_data.append((tr, tg, tb, alpha))
        
    img.putdata(new_data)
    
    # Crop to bounding box of non-transparent
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")

if __name__ == "__main__":
    convert_to_white_brown(sys.argv[1], sys.argv[2])
