#!/bin/bash

# =================================================================
# 🚀 SOVEREIGN DEPLOYMENT PROTOCOL (v.2050.1)
# Architect: Global 2050 Founder
# Target: Minimum Viable Hardware (MVH) - Pentium G4560 Compliance
# Description: Automating the Stand-alone OS Environment Setup
# =================================================================

# Konfigurasi Direktori
SOURCE_DIR=$(pwd)
TARGET_DIR="$HOME/Sovereign_OS_2050"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Warna Terminal untuk Output Profesional
GREEN='\033[0.32m'
RED='\033[0.31m'
GOLD='\033[0.33m'
NC='\033[0m' # No Color

echo -e "${GOLD}----------------------------------------------------------${NC}"
echo -e "${GREEN}INITIATING DEPLOYMENT: THE NEXT EVOLUTION FRAMEWORK${NC}"
echo -e "${GOLD}----------------------------------------------------------${NC}"

# 1. Semakan Integriti Fail Sumber
echo -e "[1/4] Verifying Core Manifest..."
FILES=("index.html" "style.css" "script.js" "main.js" "test_integrity.js")

for file in "${FILES[@]}"; do
    if [ -f "$SOURCE_DIR/$file" ]; then
        echo -e "  ✅ $file detected."
    else
        echo -e "  ❌ ${RED}CRITICAL ERROR: $file missing!${NC}"
        exit 1
    fi
done

# 2. Penyediaan Persekitaran MVH
echo -e "\n[2/4] Preparing MVH Local Environment..."
if [ ! -d "$TARGET_DIR" ]; then
    mkdir -p "$TARGET_DIR"
    echo -e "  Created directory: $TARGET_DIR"
else
    echo -e "  Target directory exists. Creating archive backup..."
    tar -czf "$HOME/SOVEREIGN_BACKUP_$TIMESTAMP.tar.gz" -C "$TARGET_DIR" .
fi

# 3. Perpindahan Fail & Penguncian Logik
echo -e "\n[3/4] Deploying Sovereign Tech Stack..."
cp "$SOURCE_DIR/index.html" "$TARGET_DIR/"
cp "$SOURCE_DIR/style.css" "$TARGET_DIR/"
cp "$SOURCE_DIR/script.js" "$TARGET_DIR/"
cp "$SOURCE_DIR/main.js" "$TARGET_DIR/"
cp "$SOURCE_DIR/test_integrity.js" "$TARGET_DIR/"

# Set permissions: Read/Write for user, Read-only for others to prevent injection
chmod 644 "$TARGET_DIR"/*
echo -e "  Files deployed and permissions locked."

# 4. Pengaktifan OSA Offline
echo -e "\n[4/4] Activating Offline Smartest Algorithm (OSA)..."
echo -e "  System is now ready for Stand-alone operation."

echo -e "\n${GOLD}==========================================================${NC}"
echo -e "${GREEN}DEPLOYMENT SUCCESSFUL: SOVEREIGN STATUS ACTIVE${NC}"
echo -e "Location: $TARGET_DIR"
echo -e "Action: Open index.html in a sandboxed browser to begin."
echo -e "${GOLD}==========================================================${NC}"
