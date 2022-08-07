@echo off
Title Discord RPC Client v1.1 ~ iPuppyYT
color 0A
echo Starting Node Installation... 
node-v16.16.0-x64.msi
echo Done...
timeout /t 3 /nobreak > nul
cls
echo:
echo Starting RPC...
timeout /t 3 /nobreak > nul
node index.js
echo Just close discord to close the RPC Client.