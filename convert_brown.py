from PIL import Image
import sys

def convert_to_brown_combo(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    
    # Dark brown
    r1, g1, b1 = 101, 67, 33
    # Light brown / gold
    r2, g2, b2 = 217, 165, 46
    
    for item in datas:
        r, g, b, a = item
        lum = (r * 0.299 + g * 0.587 + b * 0.114)
        
        # Calculate alpha
        alpha = int((lum - 20) * 3.0)
        if alpha < 0: alpha = 0
        if alpha > 255: alpha = 255
        
        if alpha == 0:
            new_data.append((255, 255, 255, 0))
        else:
            # t goes from 0.0 to 1.0 based on brightness
            t = min(max((lum - 30) / 150.0, 0.0), 1.0)
            
            out_r = int(r1 * (1 - t) + r2 * t)
            out_g = int(g1 * (1 - t) + g2 * t)
            out_b = int(b1 * (1 - t) + b2 * t)
            
            new_data.append((out_r, out_g, out_b, alpha))
            
    img.putdata(new_data)
    
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")

if __name__ == "__main__":
    convert_to_brown_combo(sys.argv[1], sys.argv[2])
