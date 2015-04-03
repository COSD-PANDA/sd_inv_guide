require('shelljs/global');

rm('-rf', '~/Dropbox/Public/SDShare/sddc.pdf');
cd('../sddatacoordinators');
exec('gitbook pdf . ~/Dropbox/Public/SDShare/sddc.pdf');
cd('../sddcpusher');
