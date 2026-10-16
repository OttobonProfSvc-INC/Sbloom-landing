# sBLOOM Docker Deployment Guide (Linux / PuTTY)

This project is pre-configured with a multi-stage production Docker setup running on port **`4180`** (selected specifically to avoid collisions with standard ports such as 80, 443, 3000, 5000, 5173, 8000, and 8080).

---

## Quick Start on Your Server (via PuTTY / SSH)

### 1. Clone the Repository
```bash
git clone https://github.com/OttobonProfSvc-INC/Sbloom-landing.git
cd Sbloom-landing
```
*(Or your active git remote repository)*

---

### 2. (Optional) Custom Port Setup
The app defaults to port **`4180`**. If you wish to customize this:
```bash
cp .env.example .env
# Edit the port if needed:
nano .env
```

---

### 3. Build & Run the Container
Run Docker Compose in detached mode:
```bash
docker compose up -d --build
```
*(If your server uses Docker Compose v1, use `docker-compose up -d --build`)*

---

### 4. Verify Application Health & Logs
Check container status:
```bash
docker compose ps
```
You should see:
```text
NAME             IMAGE                  COMMAND                  SERVICE      STATUS                    PORTS
sbloom-landing   sbloom-landing-app     "npx react-router-s…"   sbloom-app   Up (healthy)              0.0.0.0:4180->4180/tcp
```

View real-time server output:
```bash
docker compose logs -f
```

---

### 5. Access the Website
Open your browser and navigate to:
```text
http://<YOUR_SERVER_IP>:4180
```

> **Note on Firewall**: If your cloud provider (AWS EC2, DigitalOcean, Hetzner, etc.) uses a security group or firewall (e.g. `ufw`), make sure inbound traffic on port `4180` is allowed:
> ```bash
> sudo ufw allow 4180/tcp
> ```

---

## Helpful Maintenance Commands

- **Update to latest code**:
  ```bash
  git pull
  docker compose up -d --build
  ```
- **Stop application**:
  ```bash
  docker compose down
  ```
- **Restart application**:
  ```bash
  docker compose restart
  ```
- **View resource usage**:
  ```bash
  docker stats sbloom-landing
  ```
