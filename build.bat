SET mypath=%~dp0
cd %mypath:~0,-1%
cp config.ini build/config.ini
npm run build