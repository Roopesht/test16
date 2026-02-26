# pip install google-api-python-client google-auth-httplib2 google-auth-oauthlib
# pip install google-api-python-client pdfminer.six



from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.http import MediaIoBaseDownload
from pdfminer.high_level import extract_text
import io

# ---------- CONFIG ----------
FILE_ID = "1CRyVEF6OTJD2lwcyN9u9UJyIkZn--yag"
SCOPES = ['https://www.googleapis.com/auth/drive.readonly']

# ---------- AUTH ----------
flow = InstalledAppFlow.from_client_secrets_file(
    "credentials.json",
    SCOPES
)

creds = flow.run_local_server(port=0)

# ---------- DRIVE SERVICE ----------
drive_service = build('drive', 'v3', credentials=creds)

# ---------- STREAM PDF INTO MEMORY ----------
pdf_buffer = io.BytesIO()

request = drive_service.files().get_media(fileId=FILE_ID)
downloader = MediaIoBaseDownload(pdf_buffer, request)

done = False
while not done:
    status, done = downloader.next_chunk()
    print(f"{int(status.progress()*100)}% downloaded")

pdf_buffer.seek(0)

# ---------- EXTRACT TEXT ----------
text = extract_text(pdf_buffer)

print("\n===== DOCUMENT TEXT =====\n")
print(text)
