import xml.etree.ElementTree as ET
import json
import re

def parse_wp_xml(file_path):
    tree = ET.parse(file_path)
    root = tree.getroot()
    
    # Namespaces usually present in WP exports
    ns = {
        'wp': 'http://wordpress.org/export/1.2/',
        'content': 'http://purl.org/rss/1.0/modules/content/'
    }
    
    pages = []
    
    for item in root.findall('.//item'):
        post_type = item.find('wp:post_type', ns)
        if post_type is not None and post_type.text in ['page', 'post', 'service']:
            title = item.find('title').text if item.find('title') is not None else ''
            link = item.find('link').text if item.find('link') is not None else ''
            content = item.find('content:encoded', ns)
            content_text = content.text if content is not None else ''
            
            # Clean up the content lightly (remove shortcodes, basic html tags)
            if content_text:
                # Remove some common shortcodes like [vc_row]
                content_text = re.sub(r'\[/?.*?\]', '', content_text)
                # We will keep HTML since we might need to parse it later, or strip it
                # For now just save raw content
            
            pages.append({
                'title': title,
                'link': link,
                'type': post_type.text,
                'content': content_text
            })
            
    with open('parsed_content.json', 'w') as f:
        json.dump(pages, f, indent=2)

if __name__ == '__main__':
    parse_wp_xml('wp-export.xml')
