import os

root = os.getcwd()
dashboards_src = os.path.join(root, 'Img y Recursos', 'Dashboards')
dashboards_dst = os.path.join(root, 'public', 'images', 'dashboards')
logos_src = os.path.join(root, 'Logos y tipo')
logos_dst = os.path.join(root, 'public', 'logos')

os.makedirs(dashboards_dst, exist_ok=True)
os.makedirs(logos_dst, exist_ok=True)

valid_exts = ('.png', '.jpg', '.jpeg', '.webp', '.svg')

def safe_copy(src, dst):
    try:
        with open(src, 'rb') as fsrc:
            data = fsrc.read()
        with open(dst, 'wb') as fdst:
            fdst.write(data)
        print(f"Copied {os.path.basename(src)}")
    except Exception as e:
        print(f"Skipped {os.path.basename(src)}: {e}")

for f in os.listdir(dashboards_src):
    if f.lower().endswith(valid_exts):
        safe_copy(os.path.join(dashboards_src, f), os.path.join(dashboards_dst, f))

for f in os.listdir(logos_src):
    if f.lower().endswith(valid_exts):
        safe_copy(os.path.join(logos_src, f), os.path.join(logos_dst, f))

root_logo = os.path.join(root, 'PowerDashboardLogoCompleto.png')
if os.path.exists(root_logo):
    safe_copy(root_logo, os.path.join(logos_dst, 'PowerDashboardLogoCompleto.png'))
