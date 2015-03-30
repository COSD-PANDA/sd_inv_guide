require('shelljs/global');

rm('-rf', 'public');
cd('../sddatacoordinators');
exec('gitbook build');
cd('../sddcpusher');
cp('-r', '../sddatacoordinators/_book/', 'public');
