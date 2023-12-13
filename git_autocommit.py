import subprocess
import time

while True:
    subprocess.run(["git", "add", "."])
    subprocess.run(["git", "commit", "-m", "update"])
    subprocess.run(["git", "push"])

    time.sleep(120)  # Подождать 2 минут (120 секунд)
