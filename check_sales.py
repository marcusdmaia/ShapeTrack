import urllib.request
import json

headers = {
    "apikey": "sb_publishable_9XOfZAQbRbU8_Yn46tueoA_g9fqESrU",
    "Authorization": "Bearer sb_publishable_9XOfZAQbRbU8_Yn46tueoA_g9fqESrU"
}

url = "https://xsgjttyrxhwmtxlvbdoa.supabase.co/rest/v1/sales?select=*"
req = urllib.request.Request(url, headers=headers)

try:
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode('utf-8'))
        print(json.dumps(data, indent=2))
except Exception as e:
    print(f"Error: {e}")
