#!/usr/bin/env python
# encoding: utf-8

from google.appengine.ext import db
#from google.appengine.tools import bulkloader

#data objects
class Soundboard(db.Expando):
	createdate = db.DateTimeProperty(auto_now_add=True)
	owneremail = db.StringProperty()
	active = db.BooleanProperty()
	soundboard_json = db.TextProperty()
	