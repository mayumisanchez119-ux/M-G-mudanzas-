import subprocess
import time
import json
import urllib.request

edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
proc = subprocess.Popen([
    edge_path,
    "--headless",
    "--remote-debugging-port=9222",
    "--disable-gpu",
    "--no-sandbox",
    "http://localhost:8080"
])

time.sleep(2)

try:
    # Query targets
    req = urllib.request.urlopen("http://127.0.0.1:9222/json")
    targets = json.loads(req.read().decode('utf-8'))
    print("TARGETS:", targets)
    
    # We can connect to websocket or read DevTools
    ws_url = targets[0].get('webSocketDebuggerUrl')
    print("WS URL:", ws_url)
finally:
    proc.terminate()
