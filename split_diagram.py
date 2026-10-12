from PIL import Image
import sys
import math

def split_and_transparent(input_path, out_petals, out_outer):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    cx, cy = width / 2, height / 2
    
    # We will compute the max radius. The image has letterboxing.
    # The actual circle has a radius. Let's just use the min dimension half.
    max_r = min(width, height) / 2
    
    petals_data = []
    outer_data = []
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = img.getpixel((x, y))
            lum = (r * 0.299 + g * 0.587 + b * 0.114)
            
            # Remove black background: if lum is low, alpha is 0
            alpha = int((lum - 20) * 2.5)
            if alpha < 0: alpha = 0
            if alpha > 255: alpha = 255
            
            dist = math.sqrt((x - cx)**2 + (y - cy)**2)
            # The split point is around 40.5% of max_r
            # Wait, 40.5% of max_r or of the actual diagram?
            # In CSS I used 40.5% of the container (which was a tight square).
            # The original image is 1600x1066. max_r = 533.
            # 40.5% of 533 is 215. Let's check.
            # Actually, let's just output the pixel to petals if dist < split_r, else to outer
            # Wait, the previous css mask used 40.5% of the shortest dimension?
            # No, the previous css used `radial-gradient(circle, ... 40%)` on `background-size: cover` or `100% 100%`.
            
            # Let's crop the image to a square first to be safe, just like before.
            pass

    # Better approach: first crop to tight bounding box of non-dark pixels to get a perfect square.
    # Then split at 40.5% of the square's width/2.
    
    # First, make transparent
    datas = img.getdata()
    new_data = []
    for item in datas:
        r, g, b, a = item
        lum = (r * 0.299 + g * 0.587 + b * 0.114)
        alpha = int((lum - 20) * 2.5)
        if alpha < 0: alpha = 0
        if alpha > 255: alpha = 255
        new_data.append((r, g, b, alpha))
        
    img.putdata(new_data)
    
    # Crop
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    width, height = img.size
    cx, cy = width / 2, height / 2
    max_r = min(width, height) / 2
    
    petals_img = Image.new("RGBA", (width, height), (0,0,0,0))
    outer_img = Image.new("RGBA", (width, height), (0,0,0,0))
    
    petals_pixels = petals_img.load()
    outer_pixels = outer_img.load()
    src_pixels = img.load()
    
    split_r = max_r * 0.405
    
    for y in range(height):
        for x in range(width):
            pixel = src_pixels[x, y]
            dist = math.sqrt((x - cx)**2 + (y - cy)**2)
            
            # Anti-aliased split
            if dist < split_r - 1:
                petals_pixels[x, y] = pixel
            elif dist > split_r + 1:
                outer_pixels[x, y] = pixel
            else:
                # blend
                t = (dist - (split_r - 1)) / 2.0
                p_alpha = int(pixel[3] * (1 - t))
                o_alpha = int(pixel[3] * t)
                petals_pixels[x, y] = (pixel[0], pixel[1], pixel[2], p_alpha)
                outer_pixels[x, y] = (pixel[0], pixel[1], pixel[2], o_alpha)
                
    petals_img.save(out_petals, "PNG")
    outer_img.save(out_outer, "PNG")

if __name__ == "__main__":
    split_and_transparent(sys.argv[1], sys.argv[2], sys.argv[3])
