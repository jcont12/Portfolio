1- 'npm run build' to create a build folder that has your index on the main page!!

2- Upload all your files, including your static folder, to your S3 bucket.

3.- Change Properties 'Static Website Hosting' and add index.html page as index document

4.- Change Permission > Access control List > public acces to Everyone Read bucket permissions (yes)

5.- In bucket policy add the necessary policy

3- Go into Route 53 and get your values (example with portfolio: ns-1243.awsdns-27.org., ns-791.awsdns-34.net. , ns-1719.awsdns-22.co.uk., ns-1243.awsdns-27.org.)
to put them as custom nameservers on Godaddy (deleting the trailing point).

4.- On route 53 click on create record set and create an alias,
