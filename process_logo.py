from PIL import Image
import numpy as np

try:
    img = Image.open('/Users/krishnachaturvedi/.gemini/antigravity/brain/ecf22c59-83d3-4174-a23d-f7dc049948ff/media__1771951997167.jpg').convert('RGBA')
    data = np.array(img)
    
    # Make dark blue background transparent
    # The background is dark blue [  2   1   7 255] and similar.
    # We can calculate distance from a pure dark blue and alpha it.
    
    r = data[:, :, 0].astype(int)
    g = data[:, :, 1].astype(int)
    b = data[:, :, 2].astype(int)
    
    # Distance from black/dark blue. If < threshold, make transparent
    dist = np.sqrt(r**2 + g**2 + b**2)
    # create a soft alpha based on distance
    alpha = np.clip((dist - 10) * 10, 0, 255).astype(np.uint8)
    
    data[:, :, 3] = alpha
    
    img_transparent = Image.fromarray(data, 'RGBA')
    
    # The logo is roughly in the center
    # The favicon is in the bottom right corner: let's say x=650 to 1024, y=700 to 1024
    
    # Crop favicon
    favicon_crop = img_transparent.crop((650, 700, 1024, 1024))
    # Get bounding box of non-transparent
    favicon_bbox = favicon_crop.getbbox()
    if favicon_bbox:
        favicon = favicon_crop.crop(favicon_bbox)
        favicon.save('/Users/krishnachaturvedi/LinkLift-1/app/favicon.ico', format='ICO', sizes=[(256, 256)])
        print("Favicon updated.")
    
    # Crop main logo
    # Everything except the bottom right corner
    # Let's crop from 100, 100, 900, 700
    logo_crop = img_transparent.crop((100, 150, 900, 680))
    logo_bbox = logo_crop.getbbox()
    if logo_bbox:
        logo = logo_crop.crop(logo_bbox)
        logo.save('/Users/krishnachaturvedi/LinkLift-1/public/logo.png', format='PNG')
        print("Logo updated.")
    
except Exception as e:
    print("Error:", e)

