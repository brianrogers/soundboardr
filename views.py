#!/usr/bin/env python

import cgi
import os
import logging

from google.appengine.ext import webapp
from google.appengine.ext.webapp import util
from google.appengine.ext.webapp import template
from google.appengine.ext import db
import base64
import hmac
import sha

from models import *

class ShowSoundBoard(webapp.RequestHandler):
	def get(self,soundboardid):
		template_values = {'soundboardid':soundboardid
							,'YOUR_AWS_ACCESS_KEY':'1J0SCPES3BY4DWSAM0R2'
							}
		
		path = os.path.join(os.path.dirname(__file__),'templates/soundboard.html')
		self.response.out.write(template.render(path,template_values))