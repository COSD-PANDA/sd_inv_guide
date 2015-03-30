require('shelljs/global');

cd('../sddatacoordinators');
exec('gitbook build');
cd('../sddcpusher');
cp('-r', '../sddatacoordinators/_book/', 'public');
