module.exports = {
	apps: [
	{
	name: "devozproperty",
	script: "/var/www/ozproperty.insafee.com/venv/bin/gunicorn",
	args: "devozproperty.wsgi:application --workers 3 --bind 0.0.0.0:8001",
	cwd: "/var/www/ozproperty.insafee.com/devozproperty",
	interpreter: "/var/www/ozproperty.insafee.com/venv/bin/python",
	env: {
		DJANGO_SETTINGS_MODULE: "devozproperty.settings",
		PYTHONUNBUFFERED: "1",
	},
      },
   ],
};
